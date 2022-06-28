import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  clearScreen: false,
  build: {
    target: 'es6'
  },
  css: {
    postcss: {
      plugins: [
        require('postcss-preset-env')({
          browsers: [
            'Chrome >= 61',
            'Safari >= 10.1',
            "iOS >= 10.3",
            "Firefox >= 60",
            "Edge >= 16",
            "Opera >= 48"
          ]
        })
      ]
    }
  },
  plugins: [
    vue()
  ]
})
