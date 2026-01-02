import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllCombinations, getPageData } from '@/lib/pseo/utils';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Force static generation
export const dynamicParams = false;

interface Props {
    params: Promise<{ service: string; context: string }>;
}

export async function generateStaticParams() {
    const combos = getAllCombinations();
    return combos.map((c) => ({
        service: c.serviceSlug,
        context: c.contextSlug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { service, context } = await params;
    const data = getPageData(service, context);
    if (!data) return {};

    return {
        title: data.metaTitle,
        description: data.metaDescription,
        alternates: {
            canonical: `https://nexusverium.com${data.slug}`,
        },
    };
}

export default async function ServiceContextPage({ params }: Props) {
    const { service, context } = await params;
    const data = getPageData(service, context);

    if (!data) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: data.title,
        description: data.metaDescription,
        provider: {
            '@type': 'Organization',
            name: 'Nexus Verium',
            url: 'https://nexusverium.com',
        },
        areaServed: 'Global',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: data.service.title,
        },
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqJsonLd]) }}
            />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-600 leading-tight">
                            {data.heroHeadline}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {data.heroSubheadline}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
                            >
                                Consult with us <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-muted-foreground/20 hover:bg-muted transition-all"
                            >
                                View all services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem & Solution */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="glass-card">
                        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {data.problemStatement}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {data.solutionOverview}
                        </p>
                        <ul className="space-y-3">
                            {data.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ (SEO optimized) */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {data.faqs.map((faq, i) => (
                            <div key={i} className="glass-card p-6">
                                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                                <p className="text-muted-foreground opacity-90">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
