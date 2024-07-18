import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  // plugins: [react()],
  plugins: [react(), svgr()],
  base: "https://daus2020.github.io/dark-light-theme",
});
