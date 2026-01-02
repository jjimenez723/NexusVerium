import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research Vision',
    description: 'Long-term inquiry into the intersection of technology and ecology.',
};

export default function ResearchPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Pillar Three</span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Research Vision</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We dedicate a portion of our resources to blue-sky research, exploring how emerging technologies can fundamentally reshape our relationship with the natural world.
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h3>Current Areas of Inquiry</h3>

                    <h4>1. Bio-Acoustic Monitoring</h4>
                    <p>
                        Using deep learning to identify bird and amphibian calls in wetland soundscapes, providing real-time metrics of biodiversity health without invasive surveys.
                    </p>

                    <h4>2. Satellite Imagery & Carbon Sequestration</h4>
                    <p>
                        Developing higher-resolution models to estimate carbon capture in peatlands using multi-spectral satellite data combined with ground-truth soil sensors.
                    </p>

                    <h4>3. Generative Design for Topography</h4>
                    <p>
                        Can AI "dream" of more resilient riverbeds? We are testing generative design algorithms to propose micro-topographies that maximize water retention and habitat diversity.
                    </p>
                </div>
            </div>
        </div>
    );
}
