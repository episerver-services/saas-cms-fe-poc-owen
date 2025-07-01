import type { ReactNode } from 'react'

/**
 * Wraps child content with Optimizely's `data-epi-*` attributes
 * to enable property overlays in edit mode.
 *
 * @param {EditableProps} props - Component props
 * @param {string} props.name - The name of the editable property
 * @param {boolean} props.enabled - Whether edit mode is active
 * @param {ReactNode} props.children - The content to be wrapped
 * @returns {React.JSX.Element} The wrapped or unwrapped content
 */
interface EditableProps {
  name: string
  enabled: boolean
  children: ReactNode
}

export default function Editable({
  name,
  enabled,
  children,
}: EditableProps): React.JSX.Element {
  return enabled ? (
    <span
      data-epi-property-name={name}
      data-epi-property-render="none"
      data-epi-property-edittype="floating"
    >
      {children}
    </span>
  ) : (
    <>{children}</>
  )
}
