"use client";

import { useState } from "react";
import BlogCard from "../components/blog/blog-card";
import { BlogPost } from "@/lib/sheets";

interface BlogListProps {
    initialBlogs: BlogPost[];
}

export default function BlogList({ initialBlogs }: BlogListProps) {
    const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
    const [offset, setOffset] = useState(initialBlogs.length);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadMore = async () => {
        setLoading(true);
        try {
            const limit = 9;
            const res = await fetch(`/api/blogs?limit=${limit}&offset=${offset}`);
            if (!res.ok) throw new Error("Failed to load");

            const newBlogs: BlogPost[] = await res.json();

            if (newBlogs.length < limit) {
                setHasMore(false);
            }

            if (newBlogs.length > 0) {
                setBlogs((prev) => [...prev, ...newBlogs]);
                setOffset((prev) => prev + newBlogs.length);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={`${blog.id}-${index}`}
                        number={blog.id} // Or generate a number based on index if styling requires "001"
                        category={blog.category}
                        author={blog.author}
                        readTime={blog.readTime}
                        title={blog.title}
                        slug={blog.slug}
                    />
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="px-4 py-2 bg-black text-white font-inter text-sm rounded-md font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
                    >
                        {loading ? "Loading..." : "Load More"}
                    </button>
                </div>
            )}
        </div>
    );
}
