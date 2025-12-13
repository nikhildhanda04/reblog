
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer";
import Image from "next/image";

// Extended Mock Data for the demo
const blogContent = {
    title: "How e-commerce is redefining global shopping trends",
    subtitle: "Discover how online shopping is reshaping the retail landscape and consumer behavior worldwide.",
    author: "Emily Johnson",
    date: "Oct 24, 2024",
    readTime: "6 min read",
    content: `
        <p>Behind the scenes, automation and intelligent tools are changing how stores operate. Faster fulfillment, modern warehouse systems, and efficient tracking improve the delivery experience.</p>
        <p>Digital payments are also improving. Secure checkout, quick approvals, and multiple payment modes increase confidence and reduce cart abandonment.</p>

        <h2>One connected shopping journey</h2>
        <p>Shoppers move between online and offline experiences depending on what works best for them. Here is how hybrid journeys improve retail:</p>
        <ul>
            <li>Reach customers across multiple digital touchpoints</li>
            <li>Improve conversions through personalized product recommendations</li>
            <li>Streamline operations with automated fulfillment and inventory management</li>
        </ul>
        <p>This creates flexibility. Whether buyers start online or offline, they expect the journey to feel smooth and connected.</p>

        <h2>Conclusion</h2>
        <p>E commerce is not just an alternative way to shop. It is changing global culture and pushing the retail world to focus on convenience, speed, trust, personalization, and accessibility.</p>
        <p>As technology continues to evolve, shopping becomes more flexible, more connected, and more catered to each individual. Customers can now explore products without limits.</p>
        <p>The rise of e commerce marks the beginning of a new retail era. And this evolution is still moving forward.</p>
    `
};

export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="bg-[#EAE8E4] min-h-screen flex flex-col">
            <Navbar />

            <main className="grow pt-32 pb-24 px-4 md:px-8">
                <article className="max-w-3xl mx-auto flex flex-col gap-12">

                    {/* Header */}
                    <header className="text-center flex flex-col gap-6">
                        <h1 className="text-4xl md:text-6xl font-secondary font-bold text-neutral-900 leading-tight">
                            {blogContent.title}
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            {blogContent.subtitle}
                        </p>

                        <div className="flex items-center justify-center gap-4 text-sm font-inter tracking-wider bg-white/50 py-2 px-6 rounded-full w-fit mx-auto border border-black/5">
                            <span className="font-semibold text-black">by {blogContent.author}</span>
                            <span className="text-neutral-400">|</span>
                            <span className="text-neutral-600">{blogContent.readTime}</span>
                        </div>
                    </header>

                    {/* Hero Image */}
                    <div className="w-full aspect-video relative border border-black overflow-hidden bg-neutral-200">
                        {/* Placeholder for dynamic image */}
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 bg-neutral-300">
                            Article Hero Image
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-neutral max-w-none font-secondary leading-loose text-neutral-800
                        prose-headings:font-secondary prose-headings:font-bold prose-headings:text-neutral-900
                        prose-p:mb-8 prose-li:marker:text-black">
                        <div dangerouslySetInnerHTML={{ __html: blogContent.content }} />
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-black/10 my-12"></div>

                    {/* Next Blog / Navigation (Simplified) */}
                    <div className="border border-black bg-white p-6 flex items-center justify-between group cursor-pointer hover:bg-neutral-50 transition-colors">
                        <div className="flex flex-col gap-2">
                            <span className="text-xs uppercase tracking-widest text-neutral-500">Next to read</span>
                            <span className="font-secondary text-xl font-bold group-hover:underline decoration-1 underline-offset-4">Best productivity hacks for creative freelancers today</span>
                        </div>
                        <div className="h-16 w-24 bg-neutral-200 border border-black/10"></div>
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    );
}
