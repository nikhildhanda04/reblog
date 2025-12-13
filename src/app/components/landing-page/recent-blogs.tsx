import BlogCard from "../blog/blog-card";
import Link from "next/link";

const recentPosts = [
    {
        number: "001",
        category: "Design",
        author: "Sarah Jenkins",
        readTime: "5 min read",
        title: "The evolution of minimalism in digital product design",
    },
    {
        number: "002",
        category: "Technology",
        author: "David Ross",
        readTime: "8 min read",
        title: "Understanding the impact of AI on creative workflows",
    },
    {
        number: "003",
        category: "Lifestyle",
        author: "Emily Chen",
        readTime: "4 min read",
        title: "Building sustainable habits for remote work success",
    },
    {
        number: "004",
        category: "Culture",
        author: "Marcus Johnson",
        readTime: "6 min read",
        title: "Why storytelling matters more than ever in branding",
    },
    {
        number: "005",
        category: "Coding",
        author: "Alex Turner",
        readTime: "10 min read",
        title: "A definitive guide to React server components in 2025",
    },
    {
        number: "006",
        category: "Finance",
        author: "Jessica Lee",
        readTime: "7 min read",
        title: "Smart investment strategies for digital nomads",
    },
];

export default function RecentBlogs() {
    return (
        <>
            <div className="flex flex-col gap-8 px-32 py-24">

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
                    {recentPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            {...post}
                        />
                    ))}
                </div>


            </div>
        </>
    )
}