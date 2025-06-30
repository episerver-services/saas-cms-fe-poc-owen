# Optimizely SaaS CMS FE Template

A **Next.js 15** proof-of-concept front-end app using the **App Router** and **TypeScript** to fetch structured content from the **Optimizely SaaS CMS Delivery API**. Designed for real-world scenarios like authenticated content access, layout-aware rendering, and robust testability via Cucumber.

---

## 🧩 Features

- ✅ **GraphQL-powered content fetching** from the Optimizely Delivery API
- 🧪 **Fallback mock data** in local development
- 🧱 **Global layout content** from CMS (e.g., header, footer)
- 🔐 **Environment-based configuration** for secure delivery
- 🐳 **Docker-compatible build pipeline** for CI/CD
- 🧬 **BDD testing** with Cucumber + Gherkin syntax
- 🧠 **Scalable structure** for routing and content modelling

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-org/optimizely-fe-template.git
cd optimizely-fe-template
pnpm install
```

### 2. Set Up Environment

Create a `.env.local` file at the root:

```env
# === Delivery API ===
OPTIMIZELY_BEARER_TOKEN=your_real_delivery_api_token_here

# Homepage content ID and version
OPTIMIZELY_CONTENT_ID=contentreference:/content/optimizely.com/en/homepage/
OPTIMIZELY_CONTENT_VERSION=published

# Layout content ID and version
OPTIMIZELY_LAYOUT_ID=contentreference:/content/optimizely.com/en/layout/
OPTIMIZELY_LAYOUT_VERSION=published

# === Frontend-specific settings ===
SITE_DOMAIN=localhost:3000

# === Dev only: allow local TLS requests to self-signed CMS endpoints ===
NODE_TLS_REJECT_UNAUTHORIZED=0
```

### 3. Run Locally

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testing

### BDD with Cucumber

Run all behaviour tests:

```bash
pnpm test:bdd
```

#### Sample Feature File

`features/homepage.feature`:

```gherkin
Feature: Homepage Content

  Scenario: Display homepage with mocked CMS content
    Given the CMS is returning homepage content
    When the user visits the homepage
    Then the page should include the title "Mock Homepage"
    And the page should include the call to action
```

Step definitions live in `features/step_definitions/`.

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Global layout
│   ├── page.tsx                # Homepage route
│   └── components/             # BlockRenderer etc.
├── lib/
│   └── content/                # GraphQL logic, mocks, helpers
├── types/
│   └── cms.ts                  # CMS-specific TypeScript types
├── features/
│   ├── homepage.feature        # BDD test scenarios
│   └── step_definitions/
├── public/                     # Static assets
├── .env.local                  # Local config
├── Dockerfile                  # Multi-stage build definition
├── .github/workflows/ci-cd.yml # GitHub Actions workflow
```

---

## 📦 PNPM Scripts

| Command         | Description                                 |
|-----------------|---------------------------------------------|
| `pnpm dev`      | Start local dev server                      |
| `pnpm build`    | Create production build                     |
| `pnpm start`    | Serve production build                      |
| `pnpm test:bdd` | Run Cucumber BDD feature tests              |
| `pnpm codegen`  | Generate GraphQL types from schema/queries  |

---

## 🛠️ CI/CD Pipeline

- GitHub Actions workflow: `.github/workflows/ci-cd.yml`
- Lint, test, build, and Dockerize
- Docker image published to DockerHub on `main` branch push
- Environment variables passed via `--build-arg` into Docker build

---

## 🧭 Next Steps

- [ ] Add real content IDs and live token
- [ ] Extend routing (e.g., `/products`, `/about`)
- [ ] Enable Optimizely Preview/Edit mode
- [ ] Integrate Optimizely Graph Management API
- [ ] Add Jest unit tests
- [ ] Add Playwright E2E test suite

---

## 👨‍💻 Maintainer

**Owen Liversidge**  
📍 Weymouth, UK  
🐕 Likes dogs, accessibility, and clean React code.
