export const logger = {
  info: (message: string, ...args: Array<unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(`[info] ${message}`, ...args)
    }
  },
  warn: (message: string, ...args: Array<unknown>) => {
    console.warn(`[warn] ${message}`, ...args)
  },
  error: (message: string, ...args: Array<unknown>) => {
    console.error(`[error] ${message}`, ...args)
  },
}
