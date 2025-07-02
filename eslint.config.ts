import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Completely ignore this generated file
  {
    ignores: ['lib/optimizely/sdk.ts'],
  },

  // Apply the base config
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Optional: override additional rules globally
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]

export default eslintConfig
