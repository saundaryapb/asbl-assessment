# ASBL — Real Estate Web Application

A production-ready React web application for ASBL, a Hyderabad-based real estate company. Built with React 19, TypeScript, Ant Design v6, and Tailwind CSS v4, following strict separation of concerns and scalable folder conventions.

🌐 **Live**: [https://asbl-black.vercel.app](https://asbl-black.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 + TypeScript |
| Component Library | Ant Design v6 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Build Tool | Vite 7 |
| Testing | Vitest + Testing Library |
| Deployment | Vercel |

---

## Project Setup — How It Was Built

```bash
# 1. Scaffold with Vite React-TS template
npx create-vite@latest . --template react-ts
```

- Added `<title>` and `<meta>` tags in `index.html` sourced from the ASBL website
- Removed default Vite boilerplate code and styling; set up project icons and favicon

```bash
# 2. Install dependencies
npm install antd @ant-design/icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install -D @tailwindcss/postcss
```

- Configured `postcss.config.cjs` and Tailwind CSS v4 with the `@theme` CSS-first approach
- Set up brand theme colors inside `src/index.css`:
  - `--color-primary: #002F56` (ASBL Navy)
  - `--color-secondary: #00A1FF` (ASBL Blue)
- Configured Ant Design `ConfigProvider` with matching theme tokens
- Pushed the initial scaffolded code to GitHub

```bash
# 3. Install test tooling
npm install -D vitest @vitest/coverage-v8 @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

- Configured Vitest inside `vite.config.ts` with `environment: 'jsdom'` and global test helpers
- Added `src/test-setup.ts` for `@testing-library/jest-dom` matchers and `window.matchMedia` mock (required by antd)
- Added `test`, `test:run`, and `coverage` scripts to `package.json`

```bash
# 4. Deploy
npm install -g vercel
vercel deploy --prod
```

- Added `vercel.json` with SPA rewrite rule so all routes resolve to `index.html`

---

## Folder Structure

```
src/
├── assets/          # Static images/icons with a barrel export (index.ts)
├── layouts/         # Layout wrappers keyed by auth role
│   ├── public/      # Unauthenticated layout (header + content + footer)
│   │   ├── components/   # Dumb UI components
│   │   ├── containers/   # Smart containers with business logic
│   │   ├── constants.ts  # Nav items, footer links, social icons
│   │   ├── type.ts       # All TypeScript types/interfaces for this module
│   │   └── __tests__/   # Mirrors components/ and containers/ structure
│   └── private/     # (Placeholder) Authenticated layout — role-based
├── screens/         # Feature screens (one folder per page/feature)
│   └── projects/
│       ├── components/   # ProjectCard, ProjectModal, Projects (UI only)
│       ├── containers/   # Projects container (state, handlers, data)
│       ├── constants.ts  # Project data, keyword constants
│       ├── type.ts       # All types for this screen
│       ├── utils.ts      # Pure helper functions (getProjectStatus, etc.)
│       ├── loadable.tsx  # Code-split lazy loader
│       └── __tests__/   # Mirrors components/, containers/, plus constants + utils
└── shared/
    ├── components/  # Reusable UI atoms (CustomButton, CustomDrawer, StatusTag)
    └── utils/       # App-wide utility helpers + loadable HOC
```

---

## Coding Standards

### 1. Separation of Concerns — Containers vs Components

Every screen/feature is split into **containers** (smart) and **components** (dumb).

| Layer | Responsibility |
|---|---|
| **Component** | Renders UI only. Receives all data and callbacks via props. May contain conditional rendering (`if/else`, `switch`) but zero business logic. |
| **Container** | Owns state, lifecycle, API calls, event handlers, and optimisation. Passes everything down to components as props. A single container can orchestrate multiple components. |

**Example from this project:**

`src/screens/projects/containers/Projects.tsx` — manages `selectedProject`, `isModalOpen`, and the `handleEnquireClick` / `handleModalClose` handlers, then passes them to `ProjectsComponent`.

`src/screens/projects/components/Projects.tsx` — purely renders the heading, anchor nav, list of `ProjectSection` cards, and `ProjectModal`. It makes zero decisions.

Each folder exposes a barrel `index.ts`:

```ts
// components/index.ts
export { ProjectsComponent } from "./Projects";
export { ProjectSection } from "./ProjectCard";
export { ProjectModal } from "./ProjectModal";

// containers/index.ts
export { default as Projects } from "./Projects";
```

### 2. Constants & Enums — No Hard-Coded String Comparisons

All magic strings live in `constants.ts` or as `const` enums in `type.ts`. Status checks are always enum-based:

```ts
// type.ts
export const ProjectStatus = {
   ACTIVE: "active",
   UPCOMING: "upcoming",
   COMPLETED: "completed",
} as const;
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

// utils.ts — ✅ enum comparison, not raw string
if (handoverDetail.includes(COMPLETED_KEYWORD)) return ProjectStatus.COMPLETED;
```

### 3. Types — Centralised in `type.ts`

No inline `interface` or `type` declarations inside component or container files. Everything is defined and exported from the module's `type.ts`:

```ts
// screens/projects/type.ts
export type Project = { ... };
export type ProjectSectionProps = { ... };
export type ProjectsComponentProps = { ... };
```

### 4. Utils — Pure, Reusable Helper Functions

All derived logic lives in `utils.ts`. Components and containers import helpers rather than reimplementing logic:

```ts
// utils.ts
export const getProjectStatus = (details: string[]): ProjectStatus => { ... };
export const buildProjectSectionId = (projectName: string): string => `project-${projectName}`;
```

### 5. Layout Wrappers — Role-Based

Layouts act as wrappers keyed to authentication roles. Currently only the `public` layout exists. A `private` layout (for authenticated/agent users) can be added under `src/layouts/private/` following the same containers/components pattern.

### 6. Routing

This application currently has a **single page** (Projects screen), so routing is not wired up — the `Content` component renders `<Projects />` directly. If additional screens are added, replace the direct render with a router (e.g. `react-router-dom`) inside `Content`:

```tsx
// Multi-page example (not yet implemented)
<Routes>
  <Route path="/" element={<Projects />} />
  <Route path="/story" element={<Story />} />
</Routes>
```

### 7. General Best Practices

- **KISS / DRY** — no duplicated logic; shared helpers live in `shared/utils/`
- **Tailwind over inline styles** — all styling via utility classes; no `style={{}}` props unless absolutely necessary
- **Meaningful variable names** — no single-letter variables (`i`, `j`), even in loops (e.g. `projectIndex`, `linkItem`)
- **Comments** — every file has a purpose comment; non-obvious logic is annotated
- **No stray `console.log`** — only `console.error` inside `catch` blocks
- **Functional components only** — no class components
- **`erasableSyntaxOnly: true`** in `tsconfig` — no TypeScript enums; use `const` + `as const` + `type` pattern instead

---

## Available Scripts

```bash
npm run dev        # Start local dev server
npm run build      # Type-check + production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
npm run test       # Run Vitest in watch mode
npm run test:run   # Run all tests once
npm run coverage   # Generate coverage report
```

---

## Testing

Tests mirror the source folder structure under `__tests__/` inside each module:

```
screens/projects/__tests__/
├── constants.test.ts
├── utils.test.ts
├── components/
│   ├── ProjectCard.test.tsx
│   ├── ProjectModal.test.tsx
│   └── Projects.test.tsx
└── containers/
    └── Projects.test.tsx
```

**82 tests, 12 test files — all passing.**

