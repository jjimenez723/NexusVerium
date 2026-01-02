import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Studies',
    description: 'Real-world applications of Nexus Verium methodologies.',
};

export default function CaseStudiesPage() {
    return (
        <div className="container mx-auto px-4 py-24 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground mb-12">
                See the impact of our work in wetlands, watersheds, and urban environments.
            </p>

            <div className="p-12 border border-dashed border-muted-foreground/20 rounded-xl">
                <p className="text-muted-foreground">Detailed case studies coming soon upon project completion.</p>
            </div>
        </div>
    );
}
