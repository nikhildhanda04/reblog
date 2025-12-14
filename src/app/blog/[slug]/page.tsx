import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer";
import Image from "next/image";
import { getBlogBySlug } from "@/lib/sheets";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);

    if (!blog) {
        return {
            title: "Blog Not Found",
        };
    }

    return {
        title: blog.title,
        description: `Read ${blog.title} by ${blog.author}. ${blog.readTime}.`,
        openGraph: {
            title: blog.title,
            description: `Read ${blog.title} by ${blog.author}.`,
            type: "article",
            authors: [blog.author],
            publishedTime: blog.publishedAt,
            images: [
                {
                    url: blog.image,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },
    };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params; // Next.js 15+ needs this awaited
    const blog = await getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    return (
        <div className="bg-[#EAE8E4] min-h-screen flex flex-col">
            <Navbar />

            <main className="grow pt-32 pb-24 px-4 md:px-8">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": blog.title,
                            "image": [blog.image],
                            "datePublished": blog.publishedAt,
                            "author": [{
                                "@type": "Person",
                                "name": blog.author,
                            }]
                        })
                    }}
                />
                <article className="max-w-3xl mx-auto flex flex-col gap-12">

                    {/* Header */}
                    <header className="text-center flex flex-col gap-6">
                        <h1 className="text-4xl md:text-6xl font-secondary font-bold text-neutral-900 leading-tight">
                            {blog.title}
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            {/* Subtitle is not in Sheet yet, using excerpt or hiding */}
                            {/* {blog.subtitle} */}
                        </p>

                        <div className="flex items-center justify-center gap-4 text-sm font-inter tracking-wider bg-white/50 py-2 px-6 rounded-full w-fit mx-auto border border-black/5">
                            <span className="font-semibold text-black">by {blog.author}</span>
                            <span className="text-neutral-400">|</span>
                            <span className="text-neutral-600">{blog.readTime}</span>
                        </div>
                    </header>


                    {/* Hero Image */}
                    {blog.image && (
                        <div className="w-full aspect-video relative border border-black overflow-hidden bg-neutral-200">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-lg prose-neutral max-w-none font-secondary leading-loose text-neutral-800
                        prose-headings:font-secondary prose-headings:font-bold prose-headings:text-neutral-900
                        prose-p:mb-8 prose-li:marker:text-black">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-black/10 my-12"></div>

                    {/* Next Blog / Navigation (Simplified) */}
                    <div className="border border-black bg-white p-6 flex items-center justify-between group cursor-pointer hover:bg-neutral-50 transition-colors">
                        <div className="flex flex-col gap-2">
                            <span className="text-xs uppercase tracking-widest text-neutral-500">Read More</span>
                            <span className="font-secondary text-xl font-bold group-hover:underline decoration-1 underline-offset-4">Back to Home</span>
                        </div>
                        {/* <div className="h-16 w-24 bg-neutral-200 border border-black/10"></div> */}
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    );
}

