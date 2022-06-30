import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  clearScreen: false,
  build: {
    target: 'es6'
  },
  plugins: [
    vue()
  ]
})
