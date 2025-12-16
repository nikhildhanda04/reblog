import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth"; // Assuming auth helper to get session
import { headers } from "next/headers";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
        return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    try {
        const comments = await prisma.comment.findMany({
            where: { postId: slug },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true,
                    },
                },
            },
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(comments);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { content, slug } = await request.json();

        if (!content || !slug) {
            return NextResponse.json({ error: "Content and slug are required" }, { status: 400 });
        }

        const comment = await prisma.comment.create({
            data: {
                content,
                postId: slug,
                userId: session.user.id,
            },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true,
                    },
                },
            },
        });

        return NextResponse.json(comment);
    } catch (error) {
        console.error("Error creating comment:", error);
        return NextResponse.json({ error: "Failed to create comment" }, { status: 500 });
    }
}
