# Optimizely SaaS CMS FE Template

A Next.js 15 front-end template using the App Router and TypeScript to integrate with the Optimizely SaaS CMS Delivery API. Built for real-world headless CMS needs like authenticated content, scalable rendering, Dockerized CI/CD, and BDD testing with Cucumber.

---

## 🧩 Features

• ✅ Structured GraphQL content fetching from Optimizely CMS  
• 🔧 Environment-driven layout and homepage IDs  
• 🐳 Docker-optimised build pipeline for production  
• 🧪 BDD testing via Cucumber + Gherkin syntax  
• 🧪 Unit tests via Jest + React Testing Library  
• 🧪 E2E browser testing via Playwright  
• 🧠 Scalable folder structure supporting CMS blocks and preview mode  
• 🌐 Mock fallback data for local development  
• 📐 Type-safe CMS integration with graphql-codegen  
• 🧾 Metadata generation from CMS for SEO

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/episerver-services/saas-cms-fe-poc-owen.git
cd saas-cms-fe-poc-owen
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

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 BDD Testing (Cucumber)

Run BDD tests:

```bash
pnpm test:bdd
```

Sample test file: `features/homepage.feature`

```gherkin
Feature: Homepage content rendering

  Scenario: Display homepage with mocked CMS content
    Given the CMS is returning homepage content
    When the user visits the homepage
    Then the page should include the title "Optimizely FE PoC"
    And the page should include the call to action
```

---

## 🧪 Unit & E2E Testing

Unit tests use **Jest** and **React Testing Library**.

```bash
pnpm test
```

Test file example:

```
app/components/__tests__/content-area-mapper.test.tsx
```

E2E tests use **Playwright**.

```bash
pnpm test:playwright
```

Test file example:

```
tests/homepage.spec.ts
```

---

## 🗂️ Project Structure

```
📁 app/
│ ├─ (site)/[locale]/[slug]/             # Localised CMS page routing
│ ├─ components/
│ │ ├─ block/
│ │ ├─ content-area/
│ │ ├─ draft/
│ │ ├─ layout/
│ │ ├─ ui/
│ │ └─ visual-builder/
│ ├─ __tests__/                          # Unit tests
│ ├─ (draft)/                            # Preview/draft handlers
│ ├─ api/
│ ├─ globals.css
│ └─ metadata.ts

📁 lib/
│ ├─ optimizely/
│ ├─ utils/
│ └─ content/

📁 features/                             # Cucumber BDD specs
📁 tests/                                # Playwright E2E tests
📁 types/
📁 public/
📁 .github/
📁 mocks/

📄 codegen.ts
📄 playwright.config.ts
📄 Dockerfile
📄 docker-compose.yml
📄 tsconfig.json
📄 README.md
```

---

## 📦 PNPM Scripts

| Command              | Description                     |
| -------------------- | ------------------------------- |
| pnpm dev             | Start dev server                |
| pnpm build           | Production build                |
| pnpm start           | Serve production build          |
| pnpm test            | Run Jest unit tests             |
| pnpm test:bdd        | Run Cucumber tests              |
| pnpm test:playwright | Run Playwright E2E tests        |
| pnpm codegen         | Generate GraphQL TypeScript SDK |

---

## 🛠️ Docker Support

Build production image:

```bash
docker build -t saas-cms-fe-poc-owen .
```

Run it:

```bash
docker run -p 3000:3000 saas-cms-fe-poc-owen
```

⚠️ Pass `OPTIMIZELY_BEARER_TOKEN` securely as a Docker build arg or secret at runtime.

---

## 📌 Known Gaps / Next Steps

• See `docs/project-status.md` for implementation tracking  
• Expand unit test coverage across more blocks/layouts  
• Add more robust Playwright coverage (auth, fallback, nav)

---

## 👨‍💻 Maintainer

**Owen Liversidge**  
📍 Weymouth, UK  
🎸 Musician. React/Next specialist. FE Architect for Optimizely SaaS CMS.
