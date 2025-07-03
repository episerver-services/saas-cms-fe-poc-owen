import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to combine class names using `clsx` and merge them using `tailwind-merge`.
 *
 * - Removes falsy values like `undefined`, `null`, `false`.
 * - Handles conditional classes.
 * - Resolves Tailwind class conflicts.
 *
 * @param inputs - Any number of class values (strings, arrays, objects, etc.)
 * @returns A single merged class string with conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
