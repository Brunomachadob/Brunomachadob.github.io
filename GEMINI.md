# Project Overview

This is a personal website/portfolio project built with [Gatsby.js](https://www.gatsbyjs.com/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). It serves as a showcase for the author's professional experience, education, and personal projects. The site is deployed to GitHub Pages using GitHub Actions for continuous deployment and includes Google Analytics for tracking.

## Technology Stack

*   **Framework:** Gatsby.js
*   **UI Library:** React
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Deployment:** GitHub Pages via GitHub Actions
*   **Analytics:** Google Analytics (via `gatsby-plugin-google-gtag`)

# Building and Running

## Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

## Available Scripts

In the project directory, you can run:

*   **`npm install`** or **`npm ci`**: Installs project dependencies. `npm ci` is preferred in CI/CD environments for clean installs.
*   **`npm start`**: Starts the development server. The site will be accessible at `http://localhost:8000`. This command uses `gatsby develop`.
*   **`npm run build`**: Builds the static site for production to the `public` directory. This command uses `gatsby clean && gatsby build`.
*   **`npm run serve`**: Serves the built production site locally. This command uses `gatsby serve`.
*   **`npm run clean`**: Cleans the Gatsby cache and public directory.
*   **`npm run typecheck`**: Runs the TypeScript compiler to check for type errors without emitting JavaScript.

# Development Conventions

*   **Language:** The project is written entirely in TypeScript, ensuring type safety throughout the codebase.
*   **Component-Based Architecture:** UI is structured using React components, located in the `src/components` directory.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) is used for utility-first styling, with configuration defined in `tailwind.config.js`. A custom `roboto` font family is extended.
*   **Strict Type Checking:** The `tsconfig.json` enforces strict TypeScript rules, promoting high code quality.
*   **Automated Deployment:** Changes pushed to the `master` branch automatically trigger a GitHub Actions workflow (`.github/workflows/gatsby.yml`) that builds and deploys the site to GitHub Pages.

# Project Structure

```
.
├── .github/workflows/
│   └── gatsby.yml         # GitHub Actions workflow for CI/CD
├── src/
│   ├── components/        # Reusable React components
│   ├── hooks/             # Custom React hooks
│   ├── images/            # Project images (e.g., favicon)
│   ├── pages/             # Gatsby pages (e.g., index.tsx, 404.tsx)
│   ├── styles/            # Global CSS styles
│   └── utils/             # Utility functions
├── gatsby-config.ts       # Gatsby configuration
├── package.json           # Project metadata, scripts, and dependencies
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project README
```