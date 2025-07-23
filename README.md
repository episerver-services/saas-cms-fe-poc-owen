Optimizely SaaS CMS FE Template

A Next.js 15 front-end template using the App Router and TypeScript to integrate with the Optimizely SaaS CMS Delivery API. Built for real-world headless CMS needs like authenticated content, scalable rendering, Dockerized CI/CD, and BDD testing with Cucumber.

⸻

🧩 Features
	•	✅ Structured GraphQL content fetching from Optimizely CMS
	•	🔧 Environment-driven layout and homepage IDs
	•	🐳 Docker-optimised build pipeline for production
	•	🧪 BDD testing via Cucumber + Gherkin syntax
	•	🧠 Scalable folder structure supporting CMS blocks and preview mode
	•	🌐 Mock fallback data for local development
	•	📐 Type-safe CMS integration with graphql-codegen
	•	🧾 Metadata generation from CMS for SEO

⸻

🚀 Getting Started

1. Clone & Install

git clone https://github.com/episerver-services/saas-cms-fe-poc-owen.git
cd saas-cms-fe-poc-owen
pnpm install

2. Configure Environment

Create .env.local:

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

3. Run the Dev Server

Please note that this feature has yet to be implemented, but is set up ready to be integrated.

pnpm dev

Open http://localhost:3000 in your browser.

⸻

🧪 BDD Testing (Cucumber)

pnpm test:bdd

Sample test: features/homepage.feature

Feature: Homepage Content

  Scenario: Display homepage with mocked CMS content
    Given the CMS is returning homepage content
    When the user visits the homepage
    Then the page should include the title "Mock Homepage"


⸻

🗂️ Project Structure

📁 app/                     # Next.js App Router structure
│  ├─ (site)/[locale]/     # Localised routing
│  │   └─ [slug]/          # Slug-based CMS page routing
│  ├─ components/          # Shared UI components and mappers
│  │   ├─ block/           # CMS block components
│  │   ├─ content-area/    # Block renderer for CMS content areas
│  │   ├─ draft/           # Draft mode-specific wrappers
│  │   ├─ layout/          # Page layout and navigation
│  │   ├─ ui/              # Generic UI elements
│  │   └─ visual-builder/  # Optional: Experience (VB) components
│  ├─ (draft)/             # API handlers for preview/draft support
│  ├─ api/                 # Placeholder for API routes
│  ├─ globals.css          # Global styles
│  └─ metadata.ts          # CMS-powered metadata setup
│
📁 lib/
│  ├─ optimizely/          # GraphQL SDK, client and helpers
│  ├─ utils/               # Language, metadata, misc helpers
│  └─ content/             # (Optional) Rich text renderers etc.
│
📁 features/               # Cucumber features and step definitions
📁 types/                  # Project-level type utilities and shims
📁 public/                 # Static assets
📁 .github/                # GitHub Actions workflows
📁 mocks/                  # (Optional) Mocked API responses
📄 codegen.ts              # GraphQL Codegen config
📄 Dockerfile              # Production Dockerfile
📄 docker-compose.yml      # Docker orchestration config
📄 tsconfig.json           # TypeScript config
📄 README.md               # This file


⸻

📦 PNPM Scripts

Command	Description
pnpm dev	Start dev server
pnpm build	Production build
pnpm start	Serve production build
pnpm test:bdd	Run Cucumber tests
pnpm codegen	Generate TypeScript types from live schema/queries


⸻

🛠️ Docker Support

Build the app into a production-ready image:

docker build -t saas-cms-fe-poc-owen .

Then run it:

docker run -p 3000:3000 saas-cms-fe-poc-owen

⚠️ Pass OPTIMIZELY_BEARER_TOKEN securely as a Docker build arg or secret at runtime.

⸻

📌 Known Gaps / Next Steps
	•	See docs/project-status.md for implementation status tracking.

⸻

👨‍💻 Maintainer

Owen Liversidge
📍 Weymouth, UK
🎸 Musician. React/Next specialist. FE Architect for Optimizely SaaS CMS.