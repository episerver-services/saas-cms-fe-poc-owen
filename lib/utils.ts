import { ReadonlyURLSearchParams } from 'next/navigation'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Constructs a full URL by appending query parameters to a base pathname.
 *
 * @param {string} pathname - The base path (e.g. `/search`)
 * @param {URLSearchParams | ReadonlyURLSearchParams} params - URL search parameters to append
 * @returns {string} Full URL string including query parameters
 *
 * @example
 * createUrl('/search', new URLSearchParams({ q: 'dogs' }))
 * // Returns: '/search?q=dogs'
 */
export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
): string => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

/**
 * Ensures that a pathname begins with a leading slash.
 *
 * @param {string} pathname - The path to normalise
 * @returns {string} The path with a leading slash
 *
 * @example
 * leadingSlashUrlPath('about') // Returns '/about'
 */
export const leadingSlashUrlPath = (pathname: string): string => {
  return `${pathname.startsWith('/') ? '' : '/'}${pathname}`
}

/**
 * Utility for combining Tailwind class names with conditional logic and deduplication.
 * Uses `clsx` for logic and `tailwind-merge` for resolving conflicts.
 *
 * @param {...ClassValue[]} inputs - Conditional class strings or arrays
 * @returns {string} Merged class string
 *
 * @example
 * cn('p-4', condition && 'bg-red-500', 'p-4') // Returns: 'bg-red-500 p-4'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
