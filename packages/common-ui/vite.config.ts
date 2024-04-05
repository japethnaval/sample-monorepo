import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    copyPublicDir: false,
    lib: {
      fileName: "index",
      entry: resolve(__dirname, "index.ts"),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
    },
  },
});
