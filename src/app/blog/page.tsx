import Link from 'next/link';
import { getAllPosts } from '@/lib/pseo/blog';
import { Metadata } from 'next';
import { Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog & Insights',
    description: 'Thinking and research from the Nexus Verium team.',
};

export default function BlogIndexPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-4 py-24">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Insights</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative flex flex-col glass-card hover:bg-white/5 transition-colors">
                        <div className="mb-4">
                            <div className="flex bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium w-fit mb-4">
                                {post.tags[0]}
                            </div>
                            <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                            </h2>
                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                {post.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto border-t border-white/5 pt-4">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {post.author.split(' ')[0]}
                            </div>
                            <div className="ml-auto">
                                {post.readingTime}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
