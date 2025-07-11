# Optimizely SaaS CMS FE Template

> [!WARNING]
> This repository is not production ready and should not be used in production environments. The codebase is currently under active development and may contain incomplete features, breaking changes, and potential security vulnerabilities.

A **Next.js 15** hybrid front-end template integrating with the **Optimizely SaaS CMS Delivery API**. Currently focused on rendering **published content only** (MVP), with plans to incrementally add Visual Builder (VB) preview/editing support in later phases.

---

## 🧩 Key Features (MVP)

- ✅ **Hybrid build support**: `custom` and `visual-builder` modes via `IS_BUILD` env
- ✅ **Published content rendering** via GraphQL SDK
- ✅ **Visual Builder fragment rendering** for published `Experience` pages
- 📐 **GraphQL SDK** generated with `graphql-codegen`
- 📦 **Docker-optimised builds** with per-site configs and build-time args
- 🧪 **BDD testing** via Cucumber + Gherkin
- 🌍 **Multi-site ready**: scale across domains or layout configurations
- 🔁 **Preview/edit mode**: deferred to later phase

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/episerver-services/saas-cms-fe-poc-owen.git
cd saas-cms-fe-poc-owen
pnpm install
```

---

## ⚙️ Environment Configuration

### 🔧 `.env.custom-styling.local`

Used for the **custom** integration:

```env
OPTIMIZELY_API_URL=https://cg.optimizely.com/content/v3/graphql
OPTIMIZELY_SINGLE_KEY=your_delivery_key
OPTIMIZELY_LAYOUT_ID=contentreference:/content/optimizely.com/en/layout/
OPTIMIZELY_PREVIEW_SECRET=your_preview_secret
IS_BUILD=custom
```

### 🔧 `.env.visual-builder.local`

Used for the **Visual Builder** integration:

```env
OPTIMIZELY_API_URL=https://cg.optimizely.com/content/v3/graphql
OPTIMIZELY_SINGLE_KEY=your_delivery_key
OPTIMIZELY_LAYOUT_ID=contentreference:/content/optimizely.com/en/layout/
OPTIMIZELY_PREVIEW_SECRET=your_preview_secret
IS_BUILD=vb
```

---

## 🧪 BDD Testing (Cucumber)

```bash
pnpm test:bdd
```

Sample test: `features/homepage.feature`

```gherkin
Feature: Homepage Content

  Scenario: Display homepage with mocked CMS content
    Given the CMS is returning homepage content
    When the user visits the homepage
    Then the page should include the title "Mock Homepage"
```

---

## 🛠 Docker Usage

### 🔨 Build for Custom Integration

```bash
docker build --build-arg NODE_ENV=production --build-arg IS_BUILD=custom --build-arg OPTIMIZELY_API_URL=https://cg.optimizely.com/content/v3/graphql --build-arg OPTIMIZELY_SINGLE_KEY=your_delivery_key --build-arg OPTIMIZELY_PREVIEW_SECRET=your_preview_secret --build-arg OPTIMIZELY_LAYOUT_ID=layout_id -t optimizely-fe:custom .
```

### 🔨 Build for Visual Builder (future)

```bash
docker build --build-arg NODE_ENV=production --build-arg IS_BUILD=vb --build-arg OPTIMIZELY_API_URL=https://cg.optimizely.com/content/v3/graphql --build-arg OPTIMIZELY_SINGLE_KEY=your_delivery_key --build-arg OPTIMIZELY_PREVIEW_SECRET=your_preview_secret --build-arg OPTIMIZELY_LAYOUT_ID=layout_id -t optimizely-fe:vb .
```

---

## 🤖 CI/CD (GitHub Actions)

This project supports CI/CD via GitHub Actions:

- Validates and lints
- Runs tests
- Builds Docker image
- Tags with short SHA
- Publishes to DockerHub if on `main` branch

Key envs are passed securely using GitHub Secrets.

---

## 🗂 Project Structure

```
📁 app/                     # Next.js App Router structure
│  ├─ [...slug]/           # CMS page rendering by path
│  ├─ layout.tsx           # Shared layout
│  ├─ metadata.ts          # SEO metadata from CMS
│
📁 lib/
│  ├─ content/             # CMS fetch helpers
│  ├─ optimizely/
│  │   ├─ components/      # Shared blocks and mappers
│  │   ├─ queries/
│  │   │   ├─ custom/      # GraphQL queries and fragments for custom
│  │   │   └─ visual/      # GraphQL queries and fragments for VB
│  │   │       └─ sdk/     # Codegen output for Visual Builder
│  │   └─ types/           # Experience types, block props, etc.
│  ├─ session/             # Placeholder for auth/session
│  └─ utils/               # Logger, block factory, etc.
│
📁 scripts/                # Centralised codegen configs
📁 features/               # BDD tests
📁 types/                  # Custom TypeScript types
📁 mocks/                  # Local CMS mocks
📄 Dockerfile              # Hybrid Dockerfile
📄 docker-compose.yml      # Optional Docker dev support
```

---

## 📦 PNPM Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `pnpm dev:custom`   | Dev server using `.env.custom-styling.local` |
| `pnpm dev:vb`       | Dev server using `.env.visual-builder.local` |
| `pnpm build:custom` | Prod build for custom setup                  |
| `pnpm build:vb`     | Prod build for VB setup (future)             |
| `pnpm test:bdd`     | Run Cucumber tests                           |
| `pnpm codegen:*`    | Run GraphQL codegen for custom or VB         |

---

# ✅ Visual Builder Integration Plan

This checklist outlines the steps required to extend the MVP to include **Visual Builder (VB)** support. You’re currently wrapping up **Phase 1.5**, having implemented a hybrid architecture that supports published VB experiences via fragment-based rendering.

---

### ✅ Phase 1: Published Content (MVP)

- [x] Support rendering published CMS pages via GraphQL
- [x] Dynamic page routing via `[...slug]`
- [x] Typed SDK via `graphql-codegen`
- [x] Docker + CI pipeline validation

---

### ✅ Phase 1.5: Visual Builder Schema Integration (Published Only)

- [x] Added separate `visual` query namespace for Experience-based rendering
- [x] Introduced core VB query: `getExperienceById.graphql`
- [x] Added reusable VB fragments: `ExperienceData`, `HeroBlockData`, etc.
- [x] Resolved fragment type errors via schema-guided refinement
- [x] Codegen validation passes for all VB queries and fragments
- [x] Maintains custom/visual build separation via env flags

---

### ⏳ Phase 2: Layout Support (VB-specific)

- [ ] Add layout-aware rendering from official VB demo
- [ ] Use layout nodes and component mapping
- [ ] Inject VB layout shell dynamically per Experience

---

### ⏳ Phase 3: Visual Builder Preview & Editing (Deferred)

- [ ] Add dynamic route for draft preview (e.g. `/draft/[version]/[...slug]`)
- [ ] Handle Opti ID and preview token flow
- [ ] Support live editing with Optimizely's editing toolbar

---

## 👨‍💻 Maintainer

**Owen Liversidge**  
📍 Weymouth, UK  
🎸 Musician. React/Next specialist. FE Architect for Optimizely SaaS CMS.
