/**
 * Short, stable React key from a string. Lists keyed by their full text
 * (key={item}, key={faq.question}) repeated that text a third time in the
 * React Server Components payload of every page. A djb2 hash keeps the key
 * stable and unique for static lists at a fraction of the size.
 */
export function shortKey(value: string): string {
  let hash = 5381;
  for (let i = 0; i < value.length; i++) {
    hash = ((hash << 5) + hash + value.charCodeAt(i)) | 0;
  }
  return (hash >>> 0).toString(36);
}
