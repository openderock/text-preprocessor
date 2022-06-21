import { unicodeMap } from './data/unicode-charchters';

/**
 * Replaces hugely-ignorant, and widely subjective transliteration of latin, cryllic, greek unicode characters with english ascii.
 */
export function killUnicode(text: string) {
  unicodeMap.forEach((regex, key) => {
    text = text.replace(regex, key);
  });
  return text;
}
