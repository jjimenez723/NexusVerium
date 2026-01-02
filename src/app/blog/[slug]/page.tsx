import { getPostBySlug, getAllPosts } from '@/lib/pseo/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: post.author }],
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        author: {
            '@type': 'Person',
            name: post.author
        },
        datePublished: post.date,
    };

    return (
        <article className="container mx-auto px-4 py-24 max-w-3xl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
            </Link>

            <header className="mb-12">
                <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-6 text-sm text-muted-foreground border-b border-white/10 pb-8">
                    <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                    </div>
                    <div>{post.readingTime}</div>
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-a:text-primary prose-img:rounded-xl">
                <MDXRemote source={post.content} />
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
                <Link href="/contact" className="block text-center p-8 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <h3 className="text-lg font-bold mb-2">Have questions about this topic?</h3>
                    <p className="text-muted-foreground">Reach out to our team to discuss how this applies to your organization.</p>
                </Link>
            </div>
        </article>
    );
}
