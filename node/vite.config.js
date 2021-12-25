import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoPlgin from './src/auto-import'
import autoTry from './src/auto-try'
export default defineConfig({
  plugins: [vue(),autoPlgin(),autoTry()]
})
