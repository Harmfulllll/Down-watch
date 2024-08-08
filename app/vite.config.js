import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  port: 5173,
  server: {
    /*     proxy: {
      "/api": {
        target: "https://down-watch.onrender.com",
      },
    }, */
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
