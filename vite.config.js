import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@routes': path.resolve('src/routes'),
      '@pages': path.resolve('src/pages'),
      '@styles': path.resolve('src/styles'),
      '@redux': path.resolve('src/redux'),
      '@lib': path.resolve('src/lib'),
      '@ui': path.resolve('src/components/ui')
    }
  }
})
