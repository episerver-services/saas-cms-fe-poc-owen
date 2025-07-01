# Optimizely SaaS CMS Front-End Implementation Plan

## ✅ Phase 1: Core Rendering and Live Preview

### 1. Enable Preview Mode
- [ ] Support `/preview` route with query params: `?key={key}&ver={version}&loc={locale}&ctx={edit|preview}&preview_token={token}`
- [ ] Inject `communicationinjector.js` during preview
- [ ] Conditionally render `data-epi-edit` attributes
- [ ] Listen for `optimizely:cms:contentSaved` and re-fetch content using new preview token

### 2. Language Support
- [ ] Support dynamic locale from pathname or query param
- [ ] Inject `locale` in GraphQL queries
- [ ] Fallback UI for unsupported or missing language variants

## ✅ Phase 2: Layout and Content Rendering

### 3. Render Visual Builder Layouts
- [ ] Create components to render `experience` and `section` types
- [ ] Handle `rows`, `columns`, `components` inside sections
- [ ] Fallback for unstructured content

### 4. Handle Styles from Display Templates
- [ ] Map `displaySettings` or `displayTemplateKey` to visual classes or props
- [ ] Apply styles to section, row, column, or component wrappers

## ✅ Phase 3: Enhanced Functionality

### 5. Implement GraphQL Search
- [ ] Create `SiteSearch` component
- [ ] Use `match`, `contains`, `highlight`, and `autocomplete`
- [ ] Support filters via facets and content types

### 6. Accessibility and SEO Enhancements
- [ ] Use semantic HTML with proper headings, regions, and ARIA
- [ ] Add skip links and keyboard support
- [ ] Add meta tags (title, description) from CMS content

## ✅ Phase 4: Testing and Tooling

### 7. Testing
- [ ] Write BDD-style tests using Cucumber for:
  - Layout rendering
  - Search
  - Language switching
  - Preview mode
- [ ] Add Jest + RTL tests for key components

---

## 🧪 Optional Stretch Features
- Integrate content recommendations (when enabled)
- Add custom display template rendering
- Add deployment fallback pages and runtime error handling