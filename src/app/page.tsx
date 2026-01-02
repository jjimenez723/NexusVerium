import Link from 'next/link';
import { ArrowRight, Leaf, Cpu, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="container px-4 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
            <span>Engineering a Resilient Future</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Nexus</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">Verium</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Integrating advanced AI systems with rigorous environmental engineering to restore wetlands, monitor watersheds, and empower responsible decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
              Explore Capabilities <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-muted transition-all"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-muted/10">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Core Focus Areas</h2>
            <p className="text-muted-foreground">Three pillars defining our approach to sustainable innovation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="group relative p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Environmental Engineering</h3>
                <p className="text-muted-foreground mb-6">
                  Restoring ecological health through data-driven wetland, watershed, and infrastructure interventions.
                </p>
                <Link href="/environmental-restoration" className="text-sm font-medium text-primary hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Responsible AI</h3>
                <p className="text-muted-foreground mb-6">
                  Integrating ethical AI workflows to support organizational alignment and decision support.
                </p>
                <Link href="/responsible-ai" className="text-sm font-medium text-primary hover:underline">
                  Our Approach &rarr;
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                  <Microscope className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Research Vision</h3>
                <p className="text-muted-foreground mb-6">
                  Long-term inquiry into the synergy between natural systems and artificial intelligence.
                </p>
                <Link href="/research-vision" className="text-sm font-medium text-primary hover:underline">
                  Explore Research &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
