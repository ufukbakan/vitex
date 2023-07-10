import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import generouted from "@generouted/react-router/plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
  server: {
    proxy: {
      "/api": {
        rewrite: (path) => path.replace(/^\/api/, ""),
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        secure: true
      }
    }
  }
})
