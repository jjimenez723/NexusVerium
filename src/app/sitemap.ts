import { MetadataRoute } from 'next';
import { getAllCombinations } from '@/lib/pseo/utils';
import { getAllPosts } from '@/lib/pseo/blog';

export const baseUrl = 'https://nexusverium.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        '',
        '/services',
        '/environmental-restoration',
        '/responsible-ai',
        '/research-vision',
        '/about',
        '/team',
        '/contact',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const pseoRoutes = getAllCombinations().map((combo) => ({
        url: `${baseUrl}/services/${combo.serviceSlug}/${combo.contextSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const blogRoutes = getAllPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...pseoRoutes, ...blogRoutes];
}
