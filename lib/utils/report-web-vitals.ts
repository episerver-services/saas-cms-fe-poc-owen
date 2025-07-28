/**
 * Reports Core Web Vitals and custom web performance metrics.
 * Currently logs to console; can be extended to send to analytics endpoints.
 *
 * @param metric - The performance metric provided by Next.js
 */
export function reportWebVitals(metric: {
  id: string
  name: string
  startTime: number
  value: number
  label: 'web-vital' | 'custom'
}) {
  console.log(`[Web Vitals] ${metric.name}: ${metric.value}`)

  // Example: send to analytics
  // fetch('/analytics', {
  //   method: 'POST',
  //   body: JSON.stringify(metric),
  //   keepalive: true,
  // })
}
