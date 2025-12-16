"use client";

import { useEffect, useState } from "react";
import CommentForm from "./comment-form";
import Image from "next/image";
import { formatDistanceToNow } from 'date-fns';

export interface BlogComment {
    id: string;
    content: string;
    createdAt: string;
    user: {
        name: string;
        image: string;
    };
}

export default function CommentSection({ slug }: { slug: string }) {
    const [comments, setComments] = useState<BlogComment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch(`/api/comments?slug=${slug}`);
                if (res.ok) {
                    const data = await res.json();
                    setComments(data);
                }
            } catch (error) {
                console.error("Failed to load comments", error);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [slug]);

    const handleCommentAdded = (newComment: BlogComment) => {
        setComments((prev) => [newComment, ...prev]);
    };

    return (
        <section className="max-w-3xl mx-auto py-12 px-4 md:px-0">
            <h2 className="text-2xl font-secondary font-bold text-neutral-900 mb-8 border-b border-black/10 pb-4">
                Comments ({comments.length})
            </h2>

            <div className="mb-12">
                <CommentForm slug={slug} onCommentAdded={handleCommentAdded} />
            </div>

            <div className="flex flex-col gap-8">
                {loading ? (
                    <p className="text-neutral-500 text-center animate-pulse">Loading comments...</p>
                ) : comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-neutral-200">
                                <Image
                                    src={comment.user.image || "/placeholder-user.jpg"} // Need a fallback
                                    alt={comment.user.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-1 grow">
                                <div className="flex items-baseline justify-between">
                                    <span className="font-semibold text-neutral-900 text-sm">{comment.user.name}</span>
                                    <span className="text-xs text-neutral-400">
                                        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                                    </span>
                                </div>
                                <div className="text-neutral-700 leading-relaxed text-sm font-secondary">
                                   {comment.content}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-neutral-500 text-center py-8">No comments yet. Be the first to share your thoughts!</p>
                )}
            </div>
        </section>
    );
}
