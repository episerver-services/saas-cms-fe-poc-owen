# Optimizely SaaS CMS FE Template

A **Next.js 15** hybrid front-end template integrating with the **Optimizely SaaS CMS Delivery API**. Supports both **custom integrations** and **Visual Builder (VB) experiences**, with CI/CD pipelines, multi-site scaling, Docker builds, and BDD test coverage.

---

## 🧩 Key Features

- ✅ **Hybrid build support**: `custom` and `visual-builder` modes via `IS_BUILD` env
- 🌍 **Multi-site ready**: scale across domains or layout configurations
- 📦 **Docker-optimised builds** with per-site configs and build-time args
- 🧪 **BDD testing** via Cucumber + Gherkin
- 📐 **GraphQL SDK** generated with `graphql-codegen`
- 🧾 **CMS metadata + SEO tags** extracted at build time
- 🔁 **Preview/edit mode-ready** (stubbed, next in roadmap)

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
docker build   --build-arg NODE_ENV=production   --build-arg IS_BUILD=custom   --build-arg OPTIMIZELY_API_URL=https://cg.optimizely.com/content/v3/graphql   --build-arg OPTIMIZELY_SINGLE_KEY=your_delivery_key   --build-arg OPTIMIZELY_PREVIEW_SECRET=your_preview_secret   --build-arg OPTIMIZELY_LAYOUT_ID=layout_id   -t optimizely-fe:custom .
```

### 🔨 Build for Visual Builder

```bash
docker build   --build-arg NODE_ENV=production   --build-arg IS_BUILD=vb   --build-arg OPTIMIZELY_API_URL=https://cg.optimizely.com/content/v3/graphql   --build-arg OPTIMIZELY_SINGLE_KEY=your_delivery_key   --build-arg OPTIMIZELY_PREVIEW_SECRET=your_preview_secret   --build-arg OPTIMIZELY_LAYOUT_ID=layout_id   -t optimizely-fe:vb .
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
│  ├─ components/          # Shared content blocks
│  ├─ page.tsx             # Homepage
│  ├─ layout.tsx           # Shared layout
│  ├─ metadata.ts          # SEO metadata from CMS
│
📁 lib/
│  ├─ content/             # CMS fetch helpers
│  ├─ optimizely/          # GraphQL codegen SDK
│  ├─ session/             # Placeholder for auth/session
│  └─ utils/               # Logger, helpers
│
📁 features/               # BDD tests
📁 types/                  # Custom TypeScript types
📁 mocks/                  # Local CMS mocks
📁 scripts/                # Codegen tooling
📄 Dockerfile              # Hybrid Dockerfile
📄 docker-compose.yml      # Optional Docker dev support
```

---

## 📦 PNPM Scripts

| Command            | Description                                  |
|--------------------|----------------------------------------------|
| `pnpm dev:custom`  | Dev server using `.env.custom-styling.local` |
| `pnpm dev:vb`      | Dev server using `.env.visual-builder.local` |
| `pnpm build:custom`| Prod build for custom setup                  |
| `pnpm build:vb`    | Prod build for VB setup                      |
| `pnpm test:bdd`    | Run Cucumber tests                           |
| `pnpm codegen:*`   | Run GraphQL codegen for custom or VB         |

---

## 🔮 Roadmap

- [ ] Enable preview mode & inline editing (Visual Builder)
- [ ] Add Jest/RTL unit test suite
- [ ] Support domain-based routing and multi-site selection
- [ ] Add Playwright or Cypress for E2E coverage
- [ ] Complete full CMS component mapping for layout blocks

---

## 👨‍💻 Maintainer

**Owen Liversidge**  
📍 Weymouth, UK  
🐕 Dog enthusiast. React/Next specialist. FE Architect for Optimizely SaaS CMS.
