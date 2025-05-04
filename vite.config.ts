import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repoName = 'ilcovo'; // <-- Add your repository name here

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Add the base property here
  base: `/${repoName}/`, // <-- THIS IS THE FIX

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));