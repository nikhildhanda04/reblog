import { NextResponse } from "next/server";
import { addSubscriber } from "@/lib/sheets";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Invalid email" }, { status: 400 });
        }

        const success = await addSubscriber(email);

        if (success) {
            return NextResponse.json({ message: "Subscribed successfully" });
        } else {

            return NextResponse.json({ error: "Failed to add subscriber" }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
