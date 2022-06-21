/**
 * Removes the leading and trailing white space and line terminator characters
 * and strips extra whitespace from all documents, leaving only at most one whitespace between any two other characters.
 */
export function cleanWhiteSpaces(text: string) {
  return text.trim().replace(/\s{2,}/g, ' ');
}
