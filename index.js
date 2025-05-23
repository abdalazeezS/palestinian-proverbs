import _proverbs from './proverbs.json' with { type: "json" };

export const proverbs = _proverbs;

export function getRandomProverb() {
    return proverbs[Math.floor(Math.random() * proverbs.length)];
}
