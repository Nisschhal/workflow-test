import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true, // allows describe/it/expect without imports
    setupFiles: "./src/test/setup.js", // <-- points to the file above
  },
})
