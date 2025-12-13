import Navbar from "./components/common/navbar";
import Hero from "./components/landing-page/hero";
import RecentBlogs from "./components/landing-page/recent-blogs";
import Quote from "./components/landing-page/quote";
import Footer from "./components/common/footer";
import { getLatestBlog } from "@/lib/sheets";

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  const latestBlog = await getLatestBlog();

  return (
    <>
      <div>
        <Navbar />
        <Hero latestBlog={latestBlog} />
        <RecentBlogs />
        <Quote />
        <Footer />
      </div>
    </>
  );
}
