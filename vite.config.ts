import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar bibliotecas grandes
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
          'icons-vendor': ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome'],
          'routing-vendor': ['react-router-dom'],
          'form-vendor': ['react-hook-form'],
          'i18n-vendor': ['react-i18next', 'i18next'],
          'utils-vendor': ['validator', '@emailjs/browser', 'next-themes'],
          'vanta-vendor': ['vanta']
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
