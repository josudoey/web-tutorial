# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

pnpm monorepo with React tutorial projects:

- **apps/react-\*/**: Next.js + React

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
- Be concise and avoid ambiguity
