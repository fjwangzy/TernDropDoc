# TernDrop Help Center (TernDropDoc)

This repository contains the documentation and Help Center for [TernDrop](https://terndrop.com), built using [VitePress](https://vitepress.dev/). 

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

Clone the repository and install the dependencies:

```bash
git clone git@github.com:fjwangzy/TernDropDoc.git
cd TernDropDoc
npm install
# or
pnpm install
```

### Local Development

Start the local development server with hot-module-replacement (HMR):

```bash
npm run docs:dev
# or
pnpm docs:dev
```
The documentation site will be accessible at `http://localhost:5173/TernDropDoc/`.

### Build for Production

Build the static files for production deployment:

```bash
npm run docs:build
# or
pnpm docs:build
```
This will generate the built assets inside the `docs/.vitepress/dist` directory.

### Local Preview

To preview the production build locally:

```bash
npm run docs:preview
# or
pnpm docs:preview
```

## 🛠️ Customizations & Features

- **Custom Outline Sidebar**: Features a custom Vue component (`AsideToggle.vue`) that allows users to collapse and expand the right-hand document outline sidebar for better reading focus.
- **Enhanced Navbar**: Customized navigation bar with a direct link to the main TernDrop website.
- **GitHub Actions Deployment**: The site is fully automated and automatically deployed to GitHub Pages upon pushing to the `main` branch.

## 📁 Project Structure

```
TernDropDoc/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts       # Main VitePress configuration
│   │   ├── theme/           # Custom theme extensions (CSS & Vue components)
│   │   └── dist/            # Production build output
│   ├── HelpCenter/          # Help Center markdown documents
│   ├── public/              # Static assets (like logo.png)
│   └── index.md             # Homepage content
├── .github/workflows/       # GitHub Actions CI/CD workflows
└── package.json             # Project metadata and scripts
```

## 🌐 Deployment

Deployment is handled automatically by GitHub Actions. Any commit pushed to the `main` branch will trigger the `deploy.yml` workflow, which builds the VitePress site and publishes it to the `gh-pages` branch. The live site is hosted via GitHub Pages at: `https://fjwangzy.github.io/TernDropDoc/`.
