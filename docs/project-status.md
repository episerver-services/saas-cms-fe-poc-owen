# 📊 Project Status: Optimizely SaaS CMS FE Template

This file tracks the current implementation progress of the custom frontend template for the Optimizely SaaS CMS project.

✅ = Complete  
🔄 = In Progress  
🔲 = Not Started

---

## 🧱 Phase 1: Project Setup & Infrastructure

| Task                             | Status  | Notes |
|----------------------------------|---------|-------|
| Project scaffold & folder layout | ✅       | Uses App Router + `/app` layout |
| Environment config (.env setup) | ✅       | Local and Docker-ready |
| TypeScript + ESLint config       | ✅       | Strict mode enabled |
| GitHub CI/CD pipelines           | ✅       | Basic test/build jobs in place |
| Commit linting / Husky hooks     | 🔲       | Optional enhancement |

---

## 📦 Phase 2: CMS Integration (Headless Foundation)

| Task                                | Status  | Notes |
|-------------------------------------|---------|-------|
| GraphQL API connection              | ✅       | Bearer token auth via ENV |
| SDK setup with graphql-codegen      | ✅       | Codegen in `lib/optimizely/sdk.ts` |
| Content ID config (home, layout)    | ✅       | ENV-driven |
| Preview mode support (draft route)  | 🔄       | Basic route scaffolded, needs secure handling |
| Fallback & error handling           | 🔄       | Needs user-friendly fallback UI |

---

## 🧱 Phase 3: Core Rendering Logic

| Task                                     | Status  | Notes |
|------------------------------------------|---------|-------|
| Page routing (`[locale]/[slug]`)         | ✅       | Supported via Next.js catch-all |
| Catch-all content renderer               | ✅       | Based on layout/content |
| Component factory mapper                 | ✅       | Based on `__typename` |
| Slot renderer for named areas            | 🔄       | Implemented for base blocks, needs nesting refinements |
| ID resolution (inline/shared blocks)     | 🔄       | Partially supported |
| Rich text and media component base       | ✅       | Text, CTA, Image supported |

---

## 🌐 Phase 4: Performance & Delivery

| Task                           | Status  | Notes |
|--------------------------------|---------|-------|
| Rendering model enforcement    | 🔲       | SSG/ISR preferred; fallback logic pending |
| CDN-based image transformation | 🔲       | Use of `cdn-cgi/image` not yet wired |
| Core Web Vitals planning       | 🔲       | To be handled post-baseline rendering |

---

## 🛡️ Phase 5: Accessibility, SEO & Metadata

| Task                        | Status  | Notes |
|-----------------------------|---------|-------|
| Metadata from CMS           | ✅       | Title, OG populated via `metadata.ts` |
| Accessibility baseline      | 🔄       | WCAG checks for components underway |
| Skip links, ARIA audit      | 🔲       | Yet to be implemented |
| robots.txt / sitemap setup  | 🔲       | To be added for production readiness |

---

## 🧪 Phase 6: Testing & Deployment

| Task                            | Status  | Notes |
|---------------------------------|---------|-------|
| Jest unit test setup            | 🔲       | Framework not yet added |
| BDD testing via Cucumber        | ✅       | `features/` folder and one sample test |
| Playwright/Cypress E2E tests    | 🔲       | Not yet integrated |
| Dockerfile & runtime container  | ✅       | Working Docker build pipeline |

---

## 🧩 Phase 7: Visual Builder Readiness

| Task                                     | Status  | Notes |
|------------------------------------------|---------|-------|
| Layout-aware slot rendering              | 🔄       | Functional but needs metadata support |
| ExperienceRenderer for VB compatibility  | 🔲       | Base component to be created |
| displayOption / spacing / styling hints  | 🔲       | Needs mapping support |
| Draft/preview mode from CMS editor       | 🔄       | Draft routing exists, auth token wiring pending |
| Opti ID / editor identity passthrough    | 🔲       | Preview token handling to be designed |

---

## ⏱️ Estimated Remaining Workload

| Phase | Remaining Tasks | Complexity |
|-------|------------------|------------|
| 1     | Commit hooks     | Low        |
| 2     | Preview fallback | Medium     |
| 3     | Slot renderer refinement, nested blocks | High |
| 4     | CDN image, fallback logic     | Medium     |
| 5     | Skip links, robots.txt, sitemap | Medium |
| 6     | Unit & E2E tests              | High        |
| 7     | ExperienceRenderer, VB preview | High        |

---

_Last updated: {{today’s date}}_