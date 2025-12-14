import Navbar from "./components/common/navbar";
import Hero from "./components/landing-page/hero";
import RecentBlogs from "./components/landing-page/recent-blogs";
import Quote from "./components/landing-page/quote";
import Footer from "./components/common/footer";
import { getLatestBlog, getBlogs } from "@/lib/sheets";
import FadeIn from "./components/common/fade-in";

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  const latestBlog = await getLatestBlog();
  const blogs = await getBlogs(6); // Fetch 6 recent blogs

  return (
    <>
      <div>
        <Navbar />
        <FadeIn>
          <Hero latestBlog={latestBlog || undefined} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <RecentBlogs blogs={blogs} />
        </FadeIn>

        <FadeIn delay={0.3}>
          <Quote />
        </FadeIn>

        <Footer />
      </div>
    </>
  );
}
