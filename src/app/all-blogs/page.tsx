import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import BlogList from "./blog-list";
import { getBlogs } from "@/lib/sheets";

export const revalidate = 60;

export default async function AllBlogsPage() {
    const initialBlogs = await getBlogs(9, 0);

    return (
        <div className="bg-[#EAE8E4] min-h-screen flex flex-col">
            <Navbar />

            <main className="grow pt-32 pb-24 px-4 md:px-32">
                <header className="mb-16 border-b border-black/10 pb-8">
                    <h1 className="text-4xl items-center text-center md:text-7xl font-secondary font-bold text-neutral-900 mb-4">
                        BLOGS
                    </h1>
                </header>

                <BlogList initialBlogs={initialBlogs} />
            </main>

            <Footer />
        </div>
    );
}
