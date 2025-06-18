/**
 * A simple logging utility for structured console output.
 *
 * In development mode, `info` logs messages to the console.
 * All environments log `warn` and `error` messages.
 */
export const logger = {
  /**
   * Logs an informational message to the console, only in development mode.
   *
   * @param message - The main log message.
   * @param args - Additional contextual information to log.
   */
  info: (message: string, ...args: Array<unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(`[info] ${message}`, ...args)
    }
  },

  /**
   * Logs a warning message to the console.
   *
   * @param message - The warning message.
   * @param args - Additional contextual information to log.
   */
  warn: (message: string, ...args: Array<unknown>) => {
    console.warn(`[warn] ${message}`, ...args)
  },

  /**
   * Logs an error message to the console.
   *
   * @param message - The error message.
   * @param args - Additional contextual information to log.
   */
  error: (message: string, ...args: Array<unknown>) => {
    console.error(`[error] ${message}`, ...args)
  },
}
