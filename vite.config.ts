import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/frontend-mentor-interactive-comments-section/",
  plugins: [react()],
});
