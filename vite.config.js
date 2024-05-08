import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./extension/manifest-dev.json";


export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
