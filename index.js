import _proverbs from './proverbs.json' with { type: "json" };

export const proverbs = _proverbs;

export function getRandomProverb() {
    return proverbs[Math.floor(Math.random() * proverbs.length)];
}

function normalizeKeywords(keywords) {
    if (keywords.length === 1 && Array.isArray(keywords[0])) {
        return keywords[0].map(k => k.toLowerCase());
    }
    return keywords.map(k => k.toLowerCase());
}

export function searchProverbOR(...keywords) {
    keywords = normalizeKeywords(keywords);
    const matches = proverbs.filter(proverb => 
        keywords.some(keyword => proverb.includes(keyword))
    );
    return matches || [];
}

export function searchProverbAND(...keywords) {
    keywords = normalizeKeywords(keywords);
    const matches = proverbs.filter(proverb =>
        keywords.every(keyword => proverb.toLowerCase().includes(keyword))
    );
    return matches || [];
}