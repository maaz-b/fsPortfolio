import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // React Compiler disabled: it can break scroll + ref + setState patterns (e.g. useParallax).
  plugins: [react()],
  base: '/fsPortfolio/',
})
