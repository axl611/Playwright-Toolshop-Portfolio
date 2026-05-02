# QA Automation Portfolio

Automation portfolio targeting mid-level QA Engineer roles.  
Two independent projects covering the full QA stack — UI, API, performance, and CI/CD.

---

## Skills at a Glance

| Area | Tools |
|---|---|
| **E2E Automation** | Playwright · TypeScript · Cucumber BDD |
| **API Testing** | Playwright APIRequestContext · REST |
| **Performance** | k6 · smoke · load · stress scenarios |
| **Accessibility** | axe-core |
| **Visual Regression** | Playwright toHaveScreenshot() |
| **CI/CD** | GitHub Actions · Allure Reports |
| **Containerization** | Docker · Docker Compose |
| **Code Quality** | ESLint · Strict TypeScript |

---

## Projects

### Project 1 — E2E Automation Suite
**App under test:** [OrangeHRM](https://opensource-demo.orangehrmlive.com) — open source HR management system

Full end-to-end automation suite covering login flows, multi-role testing, form interactions, and visual regression on a real enterprise-style SaaS app.

**Key patterns:**
- Page Object Model with shared `BaseComponent`
- Multi-role testing with Playwright `storageState`
- Cucumber BDD feature files and step definitions
- Accessibility scanning with axe-core on every main page
- Visual regression with committed baseline screenshots
- API mocking with `page.route()` for slow endpoints
- Allure report published on every CI run

→ [View Project](./project-1-e2e)

---

### Project 2 — API + Performance Suite
**App under test:** [Restful Booker](https://automationintesting.online) — booking management REST API

Typed API client layer with full CRUD coverage, token auth flow, and k6 performance scenarios with real thresholds.

**Key patterns:**
- `BaseApiClient` extended by domain-specific clients
- TypeScript interfaces for every request and response shape
- Full CRUD — GET, POST, PUT, PATCH, DELETE
- Auth flow — login → extract token → use in subsequent requests
- Chained requests — create → verify → update → delete
- k6 smoke, load, and stress scenarios
- Thresholds: p95 < 500ms · error rate < 1%
- Two separate CI workflows — API tests and k6 run independently

→ [View Project](./project-2-api-performance)

---

## How to Run

Each project is self-contained. Navigate into the project folder and follow its README.

**Run in Docker (recommended):**
```bash
cd project-1-e2e
npm run docker:build
npm run docker:run
```

**Run locally:**
```bash
cd project-1-e2e
npm ci
npx playwright test
npm run report
```

---

## CI/CD

Both projects run automatically on every push via GitHub Actions.  
Allure reports are published to GitHub Pages after each run.

- [Project 1 Pipeline](.github/workflows) ← link once live
- [Project 2 Pipeline](.github/workflows) ← link once live

---

## Project Structure

```
qa-portfolio/
├── project-1-e2e/               # UI + BDD + Visual + Accessibility
│   ├── src/
│   │   ├── pages/               # Page Object Model
│   │   │   └── components/      # Shared BaseComponent
│   │   ├── fixtures/            # Custom Playwright fixtures
│   │   ├── data/                # Test data and user roles
│   │   └── helpers/             # Accessibility helpers
│   ├── tests/e2e/ui/            # Playwright test specs
│   ├── features/                # Cucumber feature files
│   ├── step-definitions/        # BDD step implementations
│   ├── Dockerfile
│   └── docker-compose.yml
│
└── project-2-api-performance/   # API + k6 Performance
    ├── src/api/
    │   ├── clients/             # BaseApiClient + domain clients
    │   └── models/              # TypeScript API interfaces
    ├── tests/api/               # Playwright API specs
    ├── k6/scenarios/            # smoke · load · stress
    ├── Dockerfile
    └── docker-compose.yml
```