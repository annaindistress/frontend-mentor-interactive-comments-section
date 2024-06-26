import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/frontend-mentor-interactive-comments-section/",
  plugins: [svgr(), react()],
});
