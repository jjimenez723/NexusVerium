import { Metadata } from 'next';
import { team } from '@/lib/pseo/data';
import { UserCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Team',
    description: 'Meet the experts behind Nexus Verium.',
};

export default function TeamPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Nexus Verium',
        employee: team.map((member) => ({
            '@type': 'Person',
            name: member.name,
            jobTitle: member.role,
            description: member.bio,
        })),
    };

    return (
        <div className="container mx-auto px-4 py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-2xl mx-auto text-center mb-16">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
                <p className="text-muted-foreground text-lg">
                    A collaborative collective of engineers, researchers, and systems thinkers.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {team.map((member) => (
                    <div key={member.id} className="glass-card flex flex-col items-center text-center p-8">
                        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
                            {/* Placeholder for real image */}
                            <UserCircle2 className="w-12 h-12 text-muted-foreground" />
                        </div>
                        <h2 className="text-xl font-bold">{member.name}</h2>
                        <p className="text-primary font-medium mb-4">{member.role}</p>
                        <p className="text-muted-foreground leading-relaxed">
                            {member.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
