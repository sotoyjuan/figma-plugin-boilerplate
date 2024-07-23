import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  root: "src/ui",
  publicDir: "../../public",
  plugins: [vue(), viteSingleFile(), svgLoader()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/ui/assets/style/index.scss";`,
      },
    },
  },
  build: {
    target: "esnext",
    assetsInlineLimit: Infinity,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    emptyOutDir: false,
    outDir: "../../dist",
    sourcemap: true,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => "everything.js",
      },
      input: {
        index: "src/ui/index.html",
      },
    },
  },
});
