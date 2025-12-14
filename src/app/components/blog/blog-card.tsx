import Image from "next/image";

import Link from "next/link";

interface BlogCardProps {
    imageSrc?: string;
    number: string;
    category?: string;
    author: string;
    readTime: string;
    title: string;
    slug?: string; // Add slug prop
}

export default function BlogCard({
    imageSrc,
    number = "019",
    category = "Tech",
    author,
    readTime,
    title,
    slug = "demo-post" // Default slug for now
}: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="block">
            <div className="border border-black bg-white p-2 w-full group cursor-pointer transition-colors duration-300 h-full flex flex-col">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-2 text-[10px] font-mono tracking-wider text-black/80">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full border border-black bg-transparent group-hover:bg-black transition-colors duration-300"></div>
                        <div className="w-2 h-2 rounded-full border border-black bg-transparent group-hover:bg-black transition-colors duration-300"></div>
                        <div className="w-2 h-2 rounded-full border border-black bg-transparent group-hover:bg-black transition-colors duration-300"></div>
                    </div>
                    <div className="grow mx-2 border-t border-dashed border-black/40"></div>
                    <div>FEATURED</div>
                    <div className="grow mx-2 border-t border-dashed border-black/40"></div>
                    <div>[NO. {number}]</div>
                </div>

                {/* Image Container */}
                <div className="relative w-full aspect-4/3 overflow-hidden border border-black mb-3 bg-neutral-200">
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center text-neutral-500">
                            No Image
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex items-center justify-between text-[10px] uppercase font-inter tracking-wider border-b border-black/10 pb-2 mb-3 text-neutral-600">
                    <span>{category}</span>
                    <span>{author} • {readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl py-3 font-secondary font-bold leading-tight grow">
                    <span className="group-hover:bg-[#FFCC80] px-1 box-decoration-clone transition-colors duration-300">
                        {title}
                    </span>
                </h3>
            </div>
        </Link>
    );
}