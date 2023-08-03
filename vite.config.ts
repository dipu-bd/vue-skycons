import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/vue-skycons",
  plugins: [vue()],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  server: {
    port: 8025,
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  }
})
