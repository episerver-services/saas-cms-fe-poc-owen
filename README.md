# Optimizely SaaS CMS FE Template

A **Next.js 15** front-end template using the **App Router** and **TypeScript** to integrate with the **Optimizely SaaS CMS Delivery API**. Built for real-world headless CMS needs like authenticated content, scalable rendering, Dockerized CI/CD, and BDD testing with Cucumber.

---

## 🧩 Features

- ✅ **Structured GraphQL content fetching** from Optimizely CMS
- 🔧 **Environment-driven** layout and homepage IDs
- 🐳 **Docker-optimised build pipeline** for production
- 🧪 **BDD testing** via Cucumber + Gherkin syntax
- 🧠 **Scalable folder structure** supporting CMS blocks and preview mode
- 🌐 **Mock fallback data** for local development
- 📐 **Type-safe CMS integration** with `graphql-codegen`
- 🧾 **Metadata generation** from CMS for SEO

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-org/optimizely-fe-template.git
cd optimizely-fe-template
pnpm install
```

### 2. Configure Environment

Create `.env.local`:

```env
# === Delivery API ===
OPTIMIZELY_BEARER_TOKEN=your_real_token_here

# Homepage content ID and version
OPTIMIZELY_CONTENT_ID=contentreference:/content/optimizely.com/en/homepage/
OPTIMIZELY_CONTENT_VERSION=published

# Layout content ID and version
OPTIMIZELY_LAYOUT_ID=contentreference:/content/optimizely.com/en/layout/
OPTIMIZELY_LAYOUT_VERSION=published

# === Frontend-specific ===
SITE_DOMAIN=http://localhost:3000
```

### 3. Run the Dev Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

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

## 🗂️ Project Structure

```
📁 app/                     # Next.js App Router structure
│  ├─ [...slug]/           # Dynamic page loading by GUID
│  ├─ components/          # React block/component mappers
│  ├─ page.tsx             # Homepage route
│  ├─ layout.tsx           # Shared layout
│  ├─ metadata.ts          # Metadata pulled from CMS
│
📁 lib/
│  ├─ content/             # CMS fetch logic and helpers
│  ├─ optimizely/          # GraphQL SDK and schema handling
│  ├─ session/             # Placeholder for auth/session logic
│  └─ utils/               # Misc utilities like logger
│
📁 features/               # Cucumber BDD files
│  ├─ homepage.feature
│  └─ step-definitions/
│
📁 types/                  # Type overrides and shims
📁 mocks/                  # OpenAPI mock responses
📁 scripts/                # Schema tooling
📁 public/                 # Static assets
📄 schema.graphql          # Latest schema
📄 codegen.yaml            # GraphQL Codegen config
📄 Dockerfile              # Production Dockerfile
📄 docker-compose.yml      # Optional Docker support
```

---

## 📦 PNPM Scripts

| Command                   | Description                                                   |
| ------------------------- | ------------------------------------------------------------- |
| `pnpm dev`                | Start dev server                                              |
| `pnpm build`              | Production build                                              |
| `pnpm start`              | Serve production build                                        |
| `pnpm test:bdd`           | Run Cucumber tests                                            |
| `pnpm fetch:live-schema`  | Generate TypeScript types from live schema/queries            |
| `pnpm fetch:local-schema` | Generate TypeScript types from local/hardcoded schema queries |

---

## 🛠️ Docker Support

Build the app into a production-ready image:

```bash
docker build -t optimizely-fe-template .
```

Then run it:

```bash
docker run -p 3000:3000 optimizely-fe-template
```

> ⚠️ Pass `OPTIMIZELY_BEARER_TOKEN` securely as a Docker build arg or secret at runtime.

---

## 📌 Known Gaps / Next Steps

- [ ] Preview/edit mode for CMS authoring
- [ ] Better layout type coverage (e.g. footer, menu nav)
- [ ] Add Jest unit tests alongside Cucumber
- [ ] Extend routing with content modelling patterns
- [ ] Add full E2E suite via Playwright or Cypress

---

## 👨‍💻 Maintainer

**Owen Liversidge**  
📍 Weymouth, UK  
🐕 Dog enthusiast. React/Next specialist. FE Architect for Optimizely SaaS CMS.
