import { FlatCompat } from '@eslint/eslintrc'
import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: js.configs.recommended, // optional unless you're using "eslint:recommended"
  allConfig: js.configs.all // optional unless you're using "eslint:all"
})

export default [
  ...compat.extends('standard'),
  ...tseslint.configs.recommended
]
