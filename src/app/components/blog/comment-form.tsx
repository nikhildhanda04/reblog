"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

import { BlogComment } from "./comment-section";

export default function CommentForm({ slug, onCommentAdded }: { slug: string, onCommentAdded: (comment: BlogComment) => void }) {
    const { data: session } = authClient.useSession();
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;

        setLoading(true);
        try {
            const res = await fetch("/api/comments", {
                method: "POST",
                body: JSON.stringify({ content, slug }),
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (res.ok) {
                setContent("");
                onCommentAdded(data);
            }
        } catch (error) {
            console.error("Failed to post comment");
        } finally {
            setLoading(false);
        }
    };

    if (!session) {
        return (
            <div className="bg-neutral-100 p-6 rounded-lg text-center border border-neutral-200">
                <p className="text-neutral-600 mb-4 font-secondary">Sign in to leave a comment</p>
                <button
                    onClick={() => authClient.signIn.social({ 
                        provider: "google",
                        callbackURL: window.location.href 
                    })}
                    className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2 mx-auto"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.013-1.133 8.053-3.24 2.08-2.16 2.747-5.467 2.747-8.24 0-.8-.08-1.547-.187-2.293h-10.613z"/></svg>
                    Continue with Google
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-3">
                {session?.user.image && (
                   <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200">
                      <Image src={session.user.image} alt={session.user.name || "User"} fill className="object-cover" />
                   </div>
                )}
                <span className="font-semibold text-sm text-neutral-700">{session?.user.name}</span>
            </div>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full p-4 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-black min-h-[100px] font-secondary resize-y"
                required
            />
            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
                >
                    {loading ? "Posting..." : "Post Comment"}
                </button>
            </div>
        </form>
    );
}
