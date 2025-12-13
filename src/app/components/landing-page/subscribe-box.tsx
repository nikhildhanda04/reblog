"use client";

import { useState } from "react";
import Image from "next/image";

export default function SubscribeBox() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="w-full h-full relative p-2 bg-white backdrop-blur-sm shadow-sm">
            {/* Airmail Border Pattern - Grayscale */}
            <div className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: `
                        repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 10px,
                            #000000 10px,
                            #000000 20px,
                            transparent 20px,
                            transparent 30px
                        ) top left / 100% 8px no-repeat,
                        
                        repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 10px,
                            #000000 10px,
                            #000000 20px,
                            transparent 20px,
                            transparent 30px
                        ) bottom left / 100% 8px no-repeat,
                        
                        repeating-linear-gradient(
                            -135deg,
                            transparent,
                            transparent 10px,
                            #000000 10px,
                            #000000 20px,
                            transparent 20px,
                            transparent 30px
                        ) top left / 8px 100% no-repeat,
                        
                        repeating-linear-gradient(
                            -135deg,
                            transparent,
                            transparent 10px,
                            #000000 10px,
                            #000000 20px,
                            transparent 20px,
                            transparent 30px
                        ) top right / 8px 100% no-repeat
                    `
                }}
            />

            <div className="flex flex-col gap-2 p-6 bg-white h-full justify-between relative z-0">

                <div className="flex items-start justify-between">
                    <div className="space-y-3">
                        <h3 className="font-secondary text-3xl font-bold text-gray-900 leading-none">Don&apos;t miss a thing</h3>
                        <p className="font-inter text-sm text-gray-600 ">Subscribe to get updates straight to your inbox.</p>
                    </div>

                    <div className="opacity-80 -rotate-12 transform translate-x-1 translate-y-1">
                        <div className="w-15 h-15 rounded-full border-[3px] border-dashed border-black flex items-center justify-center font-mono text-[9px] text-center leading-tight tracking-widest">
                            POST<br />OFFICE<br />PUNE
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex border border-black p-1">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-3 py-2 outline-none font-inter text-sm bg-transparent placeholder:text-neutral-400"
                        />
                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="bg-black text-white px-6 py-2 font-bold text-xs tracking-widest hover:bg-neutral-800 transition-colors disabled:opacity-50"
                        >
                            {status === "loading" ? "SEND..." : status === "success" ? "DONE" : "SUBSCRIBE"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
