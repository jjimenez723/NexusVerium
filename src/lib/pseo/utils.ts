import { services, contexts } from './data';
import { generateCombination } from './generator';

export function getServiceBySlug(slug: string) {
    return services.find((s) => s.slug === slug);
}

export function getContextBySlug(slug: string) {
    return contexts.find((c) => c.slug === slug);
}

export function getAllCombinations() {
    const combos = [];
    for (const service of services) {
        for (const context of contexts) {
            combos.push({
                serviceSlug: service.slug,
                contextSlug: context.slug,
            });
        }
    }
    return combos;
}

export function getPageData(serviceSlug: string, contextSlug: string) {
    const service = getServiceBySlug(serviceSlug);
    const context = getContextBySlug(contextSlug);

    if (!service || !context) return null;

    return generateCombination(service, context);
}
