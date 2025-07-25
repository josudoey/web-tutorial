# React Flowbite Basic

This is a basic React project template using Next.js with TypeScript and Flowbite React UI components.

## Features

- 🚀 Based on Next.js 15+ App Router
- 🎨 Integrated Flowbite React UI components
- 📱 Responsive Design with Tailwind CSS
- 🎯 TypeScript Support
- 🔧 Modern Development Toolchain
- ⚡ Fast development with Next.js
- 🎨 Beautiful UI components from Flowbite

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

- `pnpm dev` - Start development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Project Structure

```
react-flowbite-basic/
├── app/                 # Next.js App Router pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/          # Reusable UI components
│   ├── navbar.tsx       # Navigation bar component
│   └── sidebar.tsx      # Sidebar component
├── public/              # Static assets
│   ├── figma.svg
│   ├── flowbite-react.svg
│   ├── flowbite.svg
│   ├── pattern-dark.svg
│   ├── pattern-light.svg
│   └── vercel.svg
├── .flowbite-react/     # Flowbite React configuration
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Tech Stack

- **Framework**: Next.js 15.3.0
- **Language**: TypeScript 5.x
- **UI Library**: Flowbite React 0.11.7
- **Styling**: Tailwind CSS 4.x
- **Icons**: React Icons 5.5.0
- **Package Manager**: pnpm (recommended)
- **Linting**: ESLint with Next.js config
- **Code Formatting**: Prettier with Tailwind CSS plugin

## Flowbite React Components

This project includes several pre-built Flowbite React components:

- **Navbar**: Responsive navigation bar with mobile menu
- **Sidebar**: Collapsible sidebar with navigation links
- **Buttons**: Various button styles and variants
- **Cards**: Content cards with different layouts
- **Icons**: React Icons integration

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Documentation](https://react.dev/) - learn about React
- [Flowbite React Documentation](https://flowbite-react.com/) - learn about Flowbite React components
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
