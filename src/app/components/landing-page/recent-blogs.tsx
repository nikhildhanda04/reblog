import BlogCard from "../blog/blog-card";
import Link from "next/link";
import { BlogPost } from "@/lib/sheets";

interface RecentBlogsProps {
    blogs: BlogPost[];
}

export default function RecentBlogs({ blogs }: RecentBlogsProps) {
    return (
        <>
            <div className="flex flex-col gap-8 px-4 md:px-32 py-24">

                <div className="flex w-full justify-between items-center gap-2 py-6 border-b border-neutral-800">

                    <div className="text-5xl font-secondary  font-bold">
                        Recent Posts
                    </div>
                    <Link href="/all-blogs">
                        <div className="text-sm font-inter px-4 py-2 rounded-md font-medium text-white bg-black cursor-pointer hover:bg-neutral-800 transition-colors">
                            View All
                        </div>
                    </Link>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {blogs.map((post, index) => (
                        <BlogCard
                            key={post.id || index}
                            imageSrc={post.image}
                            number={`00${index + 1}`.slice(-3)}
                            category={post.category}
                            author={post.author}
                            readTime={post.readTime}
                            title={post.title}
                            slug={post.slug}
                        />
                    ))}
                </div>


            </div>
        </>
    )
}