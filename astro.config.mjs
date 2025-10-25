// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        "fa6-solid": ["bars", "chevron-down"],
        "fa6-brands": ["square-facebook", "x-twitter"],
      },
    }),
  ],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Poppins",
        cssVariable: "--font-poppins",
      },
    ],
  },
});
