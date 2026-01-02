import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Nexus Verium regarding collaboration or consultation.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-2xl">
            <h1 className="font-display text-4xl font-bold mb-8 text-center">Get in Touch</h1>
            <p className="text-center text-muted-foreground mb-12">
                Whether you are a potential partner, a client needing consultation, or a researcher, we would love to hear from you.
            </p>

            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input type="text" id="name" className="w-full p-3 rounded-lg border border-input bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input type="email" id="email" className="w-full p-3 rounded-lg border border-input bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="jane@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <select id="subject" className="w-full p-3 rounded-lg border border-input bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                        <option>General Inquiry</option>
                        <option>Environmental Consultation</option>
                        <option>AI Strategy</option>
                        <option>Research Collaboration</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea id="message" rows={5} className="w-full p-3 rounded-lg border border-input bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="How can we help?" />
                </div>

                <button type="submit" className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">
                    Send Message
                </button>
            </form>
        </div>
    );
}
