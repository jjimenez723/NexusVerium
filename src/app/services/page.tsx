import { Metadata } from 'next';
import Link from 'next/link';
import { services, contexts } from '@/lib/pseo/data';
import { ArrowRight, Box } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Comprehensive environmental engineering and AI solutions.',
};

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">Our Capabilities</h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                Discover how we apply our core competencies across different environmental contexts.
            </p>

            <div className="grid gap-12 max-w-5xl mx-auto">
                {services.map((service) => (
                    <div key={service.id} className="glass-card p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="md:w-1/3">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Box className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                                <p className="text-muted-foreground mb-4">{service.description}</p>
                            </div>

                            <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
                                {contexts.map((context) => (
                                    <Link
                                        key={context.id}
                                        href={`/services/${service.slug}/${context.slug}`}
                                        className="group p-4 rounded-lg border border-white/5 bg-background hover:border-primary/30 transition-all flex items-center justify-between"
                                    >
                                        <span className="font-medium text-sm">For {context.title}</span>
                                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
