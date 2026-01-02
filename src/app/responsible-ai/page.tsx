import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Responsible AI & Workflow Integration',
    description: 'Ethical AI consultation and workflow automation for mission-driven organizations.',
};

export default function ResponsibleAiPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Pillar Two</span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">Responsible AI Integration</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Beyond algorithms, we focus on alignment. We help organizations integrate AI into their workflows in ways that are transparent, ethical, and human-centric.
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h3>A Supportive Partner</h3>
                    <p>
                        Our AI practice is not about replacing human judgment but enhancing it. We work with environmental NGOs, research institutes, and sustainable businesses to automate drudgery and surface insights.
                    </p>

                    <div className="my-8 p-6 border-l-4 border-primary bg-muted/20">
                        <p className="italic m-0">
                            "We view AI as a reflective tool—a mirror that helps organizations see their data more clearly, not a black box that dictates decisions."
                        </p>
                    </div>

                    <h3>Our Approach</h3>
                    <ul>
                        <li><strong>Workflow Automation:</strong> Streamlining reporting and data entry so experts can focus on science.</li>
                        <li><strong>Decision Support Systems:</strong> Building dashboards that visualize complex trade-offs in restoration planning.</li>
                        <li><strong>Ethical Audits:</strong> Ensuring data models do not perpetuate bias or obscure critical externalities.</li>
                    </ul>

                    <p className="text-sm text-muted-foreground mt-8">
                        *Note: Our AI services are strictly for organizational and environmental applications. We do not offer clinical or therapeutic AI services.
                    </p>
                </div>
            </div>
        </div>
    );
}
