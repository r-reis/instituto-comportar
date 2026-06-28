// @ts-check
import { defineConfig } from "astro/config";

// Static site for GitHub Pages.
// `base` is provided by the GitHub Actions deploy workflow (PAGES_BASE_PATH).
// Locally it defaults to "/" so `npm run dev` works without any setup.
//
// When you set up your custom domain later, set `site` to your domain
// and remove/empty the `base`.
// Garante barra no final (ex: "/instituto-comportar/") para que
// import.meta.env.BASE_URL + "images/..." gere uma URL válida.
const rawBase = process.env.PAGES_BASE_PATH || "/";
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

export default defineConfig({
  site: process.env.PAGES_SITE_URL || "https://example.github.io",
  base,
  output: "static",
});
