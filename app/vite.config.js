import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://down-watch.onrender.com",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
