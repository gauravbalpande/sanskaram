/**
 * Merge class names, filtering out falsy values.
 * Use instead of string concatenation for conditional Tailwind classes.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
