type NavigationLink = {
  text: string
  title: string
  target?: string
  url: {
    base: string
    default: string
  }
}

type HeaderBlockProps = {
  MenuNavigationHeading?: string
  NavigationLinks?: NavigationLink[]
  isFirst?: boolean
  preview?: boolean
}

export default function HeaderBlock({
  MenuNavigationHeading,
  NavigationLinks,
}: HeaderBlockProps) {
  return (
    <header className="site-header">
      {MenuNavigationHeading && <h2>{MenuNavigationHeading}</h2>}
      <nav>
        <ul>
          {NavigationLinks?.map((link, i) => (
            <li key={i}>
              <a href={link.url.default} target={link.target ?? '_self'}>
                {link.text ?? link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
