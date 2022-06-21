import { contractions } from './data/contractions';

/**
 * Replaces all occuring English contractions by their expanded equivalents, e.g. "don't" is changed to "do not".
 */
export function expandContractions(text: string) {
  text = text.toLowerCase();
  for (const key in contractions) {
    text = text.replace(new RegExp(key, 'gi'), contractions[key]);
  }
  return text;
}
