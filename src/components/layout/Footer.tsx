import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-muted/30 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="font-display text-lg font-bold">Nexus Verium</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Research-driven AI and environmental engineering for a resilient future.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/services/environmental-monitoring/wetlands" className="hover:text-primary">Wetland Analytics</Link></li>
                        <li><Link href="/services/ai-decision-support/restoration-planning" className="hover:text-primary">Restoration Planning</Link></li>
                        <li><Link href="/services/environmental-monitoring/watersheds" className="hover:text-primary">Watershed Quality</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                        <li><Link href="/team" className="hover:text-primary">Team</Link></li>
                        <li><Link href="/research-vision" className="hover:text-primary">Research Vision</Link></li>
                        <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Connect</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-primary">Twitter</a></li>
                        <li><a href="#" className="hover:text-primary">Scholar</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Nexus Verium. All rights reserved.
            </div>
        </footer>
    );
}
