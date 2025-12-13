"use client";

import { useEffect, useState } from "react";
import BlogCard from "../blog/blog-card";
import Carousel from "./carousel";
import SubscribeBox from "./subscribe-box";

interface HeroProps {
    latestBlog?: {
        title: string;
        author: string;
        readTime: string;
        category: string;
        slug: string;
    };
}

export default function Hero({ latestBlog }: HeroProps) {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate normalized position (-1 to 1) based on window height
            const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
            // Move shadow opposite to mouse, max 10px
            setOffsetY(normalizedY * 10);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Default fallback if no blog provided
    const blog = latestBlog || {
        title: "Best productivity hacks for creative freelancers today",
        author: "Michael Smith",
        readTime: "7 min read",
        category: "Tech",
        slug: "demo-post"
    };

    return (
        <>
            <div className="flex flex-col gap-12 items-center justify-center">

                <div className="relative text-[200px] font-primary tracking-wide font-bold leading-none select-none">

                    <div
                        className="absolute inset-0 top-5 text-transparent opacity-10 bg-clip-text z-0 pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(circle, #a3a3a3 1.5px, transparent 1px)",
                            backgroundSize: "4px 4px",
                            transform: `translateY(${offsetY}px) translateX(${offsetY * 0.5}px)`,
                            opacity: 0.5
                        }}
                    >
                        READO
                    </div>

                    {/* Main Text Layer */}
                    <div className="relative z-10 text-black">
                        READO
                    </div>
                </div>

                <div className="">
                    <Carousel />
                </div>

                <div className="grid grid-cols-2 justify-between w-full gap-12 px-32 py-12">

                    <div className="flex flex-col justify-between gap-6">

                        <div>

                            <div className="text-7xl tracking-tight font-secondary font-bold">
                            A modern magazine for curious minds
                        </div>
                        <div className="text-base font-inter">
                            Dive into well-crafted stories, interviews, and guides designed to inform, inspire, and keep you updated with the latest in news, and creativity.
                        </div>

                        </div>
                        

                        <div className="w-full mt-26">
                    <SubscribeBox />
                </div>

                    </div>

                    <div>
                        <BlogCard
                            number="LATEST"
                            category={blog.category}
                            author={blog.author}
                            readTime={blog.readTime}
                            title={blog.title}
                            slug={blog.slug}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}