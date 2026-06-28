// @ts-check
import { defineConfig } from "astro/config";

// Static site for GitHub Pages.
// `base` is provided by the GitHub Actions deploy workflow (PAGES_BASE_PATH).
// Locally it defaults to "/" so `npm run dev` works without any setup.
//
// When you set up your custom domain later, set `site` to your domain
// and remove/empty the `base`.
export default defineConfig({
  site: process.env.PAGES_SITE_URL || "https://example.github.io",
  base: process.env.PAGES_BASE_PATH || "/",
  output: "static",
});
