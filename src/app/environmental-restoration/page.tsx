import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Environmental Restoration Engineering',
    description: 'Restoring wetlands and watersheds through engineering and data science.',
};

export default function RestorationPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Pillar One</span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Environmental Restoration</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We don't just monitor decline; we engineer recovery. Our restoration projects leverage hydraulic modeling, soil science, and native planting strategies optimized by AI.
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h3>Core Competencies</h3>
                    <ul>
                        <li><strong>Wetland Construction & Rehabilitation:</strong> Designing hydraulic regimes that support diverse hydrophytes.</li>
                        <li><strong>Watershed Management:</strong> reducing nutrient loading through strategic buffer zones.</li>
                        <li><strong>Urban Ecology:</strong> Integrating green infrastructure into dense cityscapes to manage stormwater.</li>
                    </ul>

                    <h3>The Role of Technology</h3>
                    <p>
                        Traditional restoration relies on historical analogs. We use predictive modeling to design for <em>future</em> climates, ensuring that the ecosystems we build today remain resilient in 2050.
                    </p>
                </div>

                <div className="mt-12 p-8 bg-muted rounded-2xl">
                    <h3 className="text-xl font-bold mb-4">Case Study: Coastal Marsh Resilience</h3>
                    <p className="mb-6">
                        Discover how strict hydrological monitoring helped restore 500 acres of degraded salt marsh.
                    </p>
                    <Link href="/services/environmental-monitoring/wetlands" className="font-medium text-primary hover:underline">
                        Explore Wetland Services &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
