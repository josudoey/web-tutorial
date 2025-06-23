# React Antd Basic

This is a basic project template using React and Ant Design.

## Features

- 🚀 Based on Next.js 13+ App Router
- 🎨 Integrated Ant Design 5.x
- 📱 Responsive Design
- 🎯 TypeScript Support
- 🔧 Modern Development Toolchain

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm

## Getting Started

1. Install dependencies:

```bash
pnpm install
# or
npm install
```

### Development

Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## Project Structure

```
react-antd-basic/
├── app/                 # Next.js App Router pages
│   ├── favicon.ico
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── public/              # Static assets
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript 5.x
- **UI Library**: Ant Design 5.26.1
- **Styling**: Tailwind CSS 4.x
- **Package Manager**: pnpm (recommended)
- **Linting**: ESLint with standard config
- **Code Formatting**: Prettier
