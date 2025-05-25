declare module "palestine-proverbs" {
  export const proverbs: string[];
  export function getRandomProverb(): string;
   // ORing logic
  export function searchProverbOR(...keywords: string[]): string[];
  export function searchProverbOR(keywords: string[]): string[];

  // ANDing logic
  export function searchProverbAND(...keywords: string[]): string | null;
  export function searchProverbAND(keywords: string[]): string | null;
}
