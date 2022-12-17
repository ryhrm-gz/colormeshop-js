/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  test: {},
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ColormeShopJs",
      fileName: (format) => `colormeshop-js.${format}.js`,
    },
    rollupOptions: {
      external: ["axios", "redaxios"],
      output: {
        globals: {
          axios: "axios",
          redaxios: "redaxios",
        },
      },
    },
  },
});
