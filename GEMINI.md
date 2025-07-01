# GEMINI.md

This file provides guidance to Gemini when working with code in this repository.

## Repository Structure

pnpm monorepo with React tutorial projects:
- **apps/react-basic/**: Next.js + React
- **apps/react-antd-basic/**: Next.js + Ant Design
- **apps/react-flowbite-basic/**: Next.js + Flowbite UI

## Commands

**Root:** `pnpm install`, `pnpm lint`

**Per app:** `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`

**Flowbite only:** `pnpm format`, `pnpm format:check`

## Architecture

**Monorepo:** pnpm workspaces, shared ESLint (standard + prettier)

**Apps:** Next.js App Router (`app/layout.tsx`, `app/page.tsx`, `app/globals.css`)

**Stack:** TypeScript, Tailwind CSS, PostCSS
- react-basic: Pure React
- react-antd-basic: + Ant Design 5.x
- react-flowbite-basic: + Flowbite React + React Icons

## Development Principles

- No gold plating
- DRY principle
- Single source of truth
- Tiny changes
- Be concise and to the point
- Avoid ambiguity
- Reduce redundancy
