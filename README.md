# Optimizely SaaS CMS FE Template

This is a proof-of-concept front-end application built with **Next.js 15** using the **App Router** and TypeScript. It fetches content from the **Optimizely SaaS CMS** Delivery API and demonstrates integration patterns including fallback mocks, global layout content, and BDD testing with Cucumber.

---

## 🧩 Features

- ✅ Fetches content using GraphQL from Optimizely Delivery API
- 🧪 Fallback to mock content in development
- 🌍 Global layout and page content via CMS
- 🔐 Uses environment variables for secure content delivery
- ⚙️ BDD-style testing with Cucumber and Gherkin syntax
- 💡 Extensible structure for future routes and CMS content types

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-org/optimizely-fe-template.git
cd optimizely-fe-template
npm install
```

### 2. Environment Setup

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

# === Development-only ===
NODE_TLS_REJECT_UNAUTHORIZED=0
```

### 3. Run the App

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testing

### 🧬 BDD with Cucumber

You can run feature tests written in Gherkin:

```bash
npm run test:bdd
```

### Example Feature

`features/homepage.feature`

```gherkin
Feature: Homepage Content

  Scenario: Display homepage with mocked CMS content
    Given the CMS is returning homepage content
    When the user visits the homepage
    Then the page should include the title "Mock Homepage"
    And the page should include the call to action
```

### Step Definitions

Defined in `features/step_definitions/`.

---

## 📁 Project Structure

```
├── app/
│   └── page.tsx            # Homepage using SSR
│   └── layout.tsx          # Global layout pulling from CMS
├── lib/
│   └── content/            # Data fetching logic
├── types/
│   └── cms.ts              # Shared CMS types
├── features/
│   ├── homepage.feature
│   └── step_definitions/
├── .env.local              # Local environment variables
```

---

## 📦 Scripts

| Command               | Description                                 |
|-----------------------|---------------------------------------------|
| `npm run dev`         | Start dev server                            |
| `npm run build`       | Build the production app                    |
| `npm run start`       | Start the production server                 |
| `npm run test:bdd`    | Run Cucumber BDD tests                      |
| `npm run codegen`     | Generate GraphQL types from schema/queries  |

---

## 📚 Next Steps

- [ ] Add actual production CMS content
- [ ] Extend to other routes (e.g. Products, About)
- [ ] Add preview/edit mode
- [ ] Integrate Optimizely Graph Management API
- [ ] Add unit tests with Jest
- [ ] Add E2E tests with Playwright

---

## 🧑‍💻 Maintainer

Owen Liversidge  
🌐 Weymouth, UK

---