/**
 * Throws an error if the value is null or undefined.
 * Useful for runtime type narrowing and early failure.
 */
export function ensureExists<T>(
  value: T | null | undefined,
  message: string
): T {
  if (value === null || value === undefined) {
    throw new Error(message)
  }
  return value
}
