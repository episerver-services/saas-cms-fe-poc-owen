// import ContentAreaMapper from './components/content-area/mapper' // TODO: Re-enable when CMS is wired

export default function HomePage() {
  if (!process.env.OPTIMIZELY_CONTENT_ID) {
    console.warn(
      '[BUILD] OPTIMIZELY_CONTENT_ID not defined. Rendering static fallback.'
    )

    return (
      <main className="site-main">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Optimizely FE PoC
          </h1>
          <p className="text-lg text-gray-700">
            This page is currently static. To enable dynamic CMS blocks, set a
            valid{' '}
            <code className="ml-1 font-mono text-sm text-blue-600">
              OPTIMIZELY_CONTENT_ID
            </code>{' '}
            in your environment.
          </p>
        </section>
      </main>
    )
  }

  // Placeholder for future CMS block integration
  return (
    <main className="site-main">
      <p>TODO: Load dynamic content using getOptimizelyClient()</p>
    </main>
  )
}
