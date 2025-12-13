import { NextResponse } from "next/server";
import { getBlogs } from "@/lib/sheets";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "9");
    const offset = parseInt(searchParams.get("offset") || "0");

    try {
        const blogs = await getBlogs(limit, offset);
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}
