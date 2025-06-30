import dynamic from 'next/dynamic'
import blocksMapperFactory from '@/lib/utils/block-factory'

/**
 * Dynamically imported block components.
 * These are loaded only when needed to optimise performance.
 */
const HeaderBlock = dynamic(() => import('../blocks/header-block'))
// const ContactBlock = dynamic(() => import('../blocks/contact-block'))
// const HeroBlock = dynamic(() => import('../blocks/hero-block'))
// const LogosBlock = dynamic(() => import('../blocks/logos-block'))
// const PortfolioGridBlock = dynamic(
//   () => import('../blocks/portfolio-grid-block')
// )
// const ServicesBlock = dynamic(() => import('../blocks/services-block'))
// const TestimonialsBlock = dynamic(() => import('../blocks/testimonials-block'))

/**
 * Component registry mapping CMS `__typename` values to React components.
 * This map is passed to the block factory.
 */
export const blocks = {
  HeaderBlock,
  //   ContactBlock,
  //   HeroBlock,
  //   LogosBlock,
  //   PortfolioGridBlock,
  //   ServicesBlock,
  //   TestimonialsBlock,
} as const

/**
 * Factory function that returns a rendered component given a `typeName` and props.
 */
export default blocksMapperFactory(blocks)
