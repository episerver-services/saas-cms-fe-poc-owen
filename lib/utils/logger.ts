export const logger = {
  info: (message: string, ...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(`[info] ${message}`, ...args)
    }
  },
  warn: (message: string, ...args: any[]) => {
    console.warn(`[warn] ${message}`, ...args)
  },
  error: (message: string, ...args: any[]) => {
    console.error(`[error] ${message}`, ...args)
  },
}
