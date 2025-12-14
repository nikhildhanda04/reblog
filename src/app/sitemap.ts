import { MetadataRoute } from 'next';
import { getBlogs } from '@/lib/sheets';

const BASE_URL = 'https://readsearch.vercel.app'; // Replace with your actual domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await getBlogs();

    const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: new Date(blog.publishedAt),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/all-blogs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/subscribe`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...blogEntries,
    ];
}
