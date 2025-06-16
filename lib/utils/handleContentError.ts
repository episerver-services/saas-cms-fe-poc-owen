export function handleContentError(source: string, error: unknown) {
  const label = `[Optimizely CMS Error in ${source}]`
  const message =
    error instanceof Error ? error.message : JSON.stringify(error, null, 2)

  if (process.env.NODE_ENV === 'development') {
    console.error(`${label}: ${message}`)
  } else {
    // Could log to an error tracking service here
    console.warn(`${label}: suppressed in production`)
  }
}
