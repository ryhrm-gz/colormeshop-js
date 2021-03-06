/// <reference types="vitest" />
const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  test: {},
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ColormeShopJs",
      fileName: (format) => `colormeshop-js.${format}.js`,
    },
  },
});
