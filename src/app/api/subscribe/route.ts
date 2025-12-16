import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Invalid email" }, { status: 400 });
        }

        try {
            await prisma.subscriber.create({
                data: { email },
            });
            return NextResponse.json({ message: "Subscribed successfully" });
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') { 
                    return NextResponse.json({ message: "Already subscribed" });
                }
            }
            throw error;
        }

    } catch (error) {
        console.error("Subscribe error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
