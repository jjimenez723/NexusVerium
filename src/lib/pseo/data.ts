import { Service, Context, TeamMember } from './types';

export const services: Service[] = [
    {
        id: 'env-monitoring',
        title: 'Environmental Monitoring',
        slug: 'environmental-monitoring',
        description: 'Advanced data collection and analysis for ecosystem health.',
        iconName: 'Activity',
    },
    {
        id: 'ai-decision',
        title: 'AI Decision Support',
        slug: 'ai-decision-support',
        description: 'Machine learning models for complex environmental decision-making.',
        iconName: 'BrainCircuit',
    },
    {
        id: 'engineering',
        title: 'Eco-Engineering',
        slug: 'eco-engineering',
        description: 'Sustainable engineering solutions for restoration and resilience.',
        iconName: 'Hammer',
    },
];

export const contexts: Context[] = [
    {
        id: 'wetlands',
        title: 'Wetlands',
        slug: 'wetlands',
        description: 'Critical marshes, swamps, and peatlands needing protection.',
    },
    {
        id: 'watersheds',
        title: 'Watersheds',
        slug: 'watersheds',
        description: 'Interconnected water systems and drainage basins.',
    },
    {
        id: 'infrastructure',
        title: 'Sustainable Infrastructure',
        slug: 'sustainable-infrastructure',
        description: 'Built environments integrating with natural systems.',
    },
    {
        id: 'restoration',
        title: 'Restoration Projects',
        slug: 'restoration-planning',
        description: 'Large-scale efforts to recover degraded ecosystems.',
    },
];

export const team: TeamMember[] = [
    {
        id: 'jonathan',
        name: 'Jonathan Eleonidas Arroyo Yunda',
        role: 'Founder',
        bio: 'Leading the intersection of environmental engineering and advanced AI systems.',
    },
    {
        id: 'jensy',
        name: 'Jensy Jimenez',
        role: 'AI Systems Engineer',
        bio: 'Specializing in responsible AI architectures and scalable data systems.',
    },
];
