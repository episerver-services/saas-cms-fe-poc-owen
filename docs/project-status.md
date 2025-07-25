# 📊 Project Status: Optimizely SaaS CMS FE Template

This file tracks the current implementation progress of the custom frontend template for the Optimizely SaaS CMS project.

✅ = Complete  
🔄 = In Progress  
🔲 = Not Started

_Last updated: 24 July 2025_

---

## 🧱 Phase 1: Project Setup & Infrastructure

| Task                             | Status | Notes                                        |
| -------------------------------- | ------ | -------------------------------------------- |
| Project scaffold & folder layout | ✅     | Uses App Router + `/app` layout              |
| Environment config (.env setup)  | ✅     | `.env.local` found; Docker-ready             |
| TypeScript + ESLint config       | ✅     | `tsconfig.json`, `eslint.config.ts` in place |
| GitHub CI/CD pipelines           | ✅     | `.github/` workflows present                 |
| Commit linting / Husky hooks     | 🔲     | `.husky/` directory not yet added            |

---

## 📦 Phase 2: CMS Integration (Headless Foundation)

| Task                               | Status | Notes                                                |
| ---------------------------------- | ------ | ---------------------------------------------------- |
| GraphQL API connection             | ✅     | ENV-based bearer token wiring complete               |
| SDK setup with graphql-codegen     | ✅     | Codegen present in `codegen.ts` and `lib/optimizely` |
| Content ID config (home, layout)   | ✅     | ENV vars support root layout/content                 |
| Preview mode support (draft route) | ✅     | All preview routes (including draft mode API) exist  |
| Fallback & error handling          | ✅     | not-found.tsx refactored, build passes cleanly       |

---

## 🧱 Phase 3: Core Rendering Logic

| Task                                 | Status | Notes                                                               |
| ------------------------------------ | ------ | ------------------------------------------------------------------- |
| Page routing (`[locale]/[slug]`)     | ✅     | Implemented via catch-all dynamic route                             |
| Catch-all content renderer           | ✅     | Working via shared layout/content rendering                         |
| Component factory mapper             | ✅     | Uses `__typename` switcher                                          |
| Slot renderer for named areas        | ✅     | Base implementation working; nested slots TBD                       |
| ID resolution (inline/shared blocks) | 🔄     | Visual Builder runtime shape guard added; next: nested slot support |
| Rich text and media component base   | ✅     | CTA, Text, Image components supported                               |

---

## 🌐 Phase 4: Performance & Delivery

| Task                           | Status | Notes                                 |
| ------------------------------ | ------ | ------------------------------------- |
| Rendering model enforcement    | 🔲     | ISR/SSG strategy not yet enforced     |
| CDN-based image transformation | 🔲     | `cdn-cgi/image` not wired up yet      |
| Core Web Vitals planning       | 🔲     | No next/script optimisations seen yet |

---

## 🛡️ Phase 5: Accessibility, SEO & Metadata

| Task                       | Status | Notes                                        |
| -------------------------- | ------ | -------------------------------------------- |
| Metadata from CMS          | ✅     | Populated via `metadata.ts`                  |
| Accessibility baseline     | 🔄     | ARIA enhancements present, still under audit |
| Skip links, ARIA audit     | 🔲     | Not yet implemented                          |
| robots.txt / sitemap setup | 🔲     | Missing config/routes                        |

---

## 🧪 Phase 6: Testing & Deployment

| Task                           | Status | Notes                                      |
| ------------------------------ | ------ | ------------------------------------------ |
| Jest unit test setup           | 🔲     | No Jest config detected                    |
| BDD testing via Cucumber       | ✅     | `features/` folder and `cucumber.ts` found |
| Playwright/Cypress E2E tests   | 🔲     | Not integrated yet                         |
| Dockerfile & runtime container | ✅     | Dockerfile and Compose config present      |

---

## 🧩 Phase 7: Visual Builder Readiness

| Task                                    | Status | Notes                                        |
| --------------------------------------- | ------ | -------------------------------------------- |
| Layout-aware slot rendering             | 🔄     | Working base logic, needs enhancements       |
| ExperienceRenderer for VB compatibility | 🔲     | Not scaffolded yet                           |
| displayOption / spacing / styling hints | 🔲     | No mapping yet                               |
| Draft/preview mode from CMS editor      | ✅     | Experience draft route structure is in place |
| Opti ID / editor identity passthrough   | 🔲     | Preview impersonation not wired up yet       |

---

## ⏱️ Estimated Remaining Workload

| Phase | Remaining Tasks                               | Complexity |
| ----- | --------------------------------------------- | ---------- |
| 1     | Commit hooks                                  | Low        |
| 2     | Preview fallback, error views                 | Medium     |
| 3     | Slot nesting support                          | High       |
| 4     | CDN image transform, render fallback handling | Medium     |
| 5     | ARIA audits, skip links, sitemap              | Medium     |
| 6     | Unit + E2E test frameworks                    | High       |
| 7     | Visual Builder renderer, token passthrough    | High       |
