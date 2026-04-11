import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const server = {
  subscribe: defineAction({
    accept: "form",
    input: z.object({
      email: z.email(),
    }),
    handler: async (input) => {
      return input.email;
    },
  }),
};
