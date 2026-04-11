// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["astro/runtime/client/dev-toolbar/entrypoint.js"],
    },
  },
  adapter: netlify(),
  output: "server",
  integrations: [
    icon({
      include: {
        "fa6-solid": ["bars", "chevron-down"],
        "fa6-brands": ["square-facebook", "x-twitter"],
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Rubik",
      cssVariable: "--font-rubik",
      weights: [400, 500],
      styles: ["normal"],
    },
  ],
});
