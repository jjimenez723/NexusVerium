import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Nexus Verium is at the forefront of environmental engineering and AI research.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">About Nexus Verium</h1>

            <div className="prose prose-lg dark:prose-invert">
                <p className="lead text-xl text-muted-foreground mb-8">
                    We are a research-driven consultancy dedicated to healing the planet through the convergence of rigorous ecological science and responsible artificial intelligence.
                </p>

                <h2>Our Mission</h2>
                <p>
                    To empower organizations, governments, and communities with the data and tools needed to restore wetlands, protect watersheds, and build sustainable infrastructure. We believe that technology, when applied with wisdom and care, is a powerful ally in the fight against environmental degradation.
                </p>

                <h2>Our Philosophy</h2>
                <p>
                    We operate at the nexus of two powerful forces: the complexity of natural systems and the predictive power of machine learning. Our approach is "Verium"—rooted in truth. We seek the ground truth of environmental data, ensuring that our AI models reflect the reality of the ecosystems we aim to protect.
                </p>

                <p>
                    Unlike "techno-solutionism" that ignores ecological nuance, we prioritize the expertise of biologists, hydrologists, and engineers. AI is our instrument, not our master.
                </p>
            </div>
        </div>
    );
}
