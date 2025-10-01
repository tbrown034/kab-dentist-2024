import { betterAuth } from "better-auth";
import { neon } from "@neondatabase/serverless";
import { NeonDialect } from "kysely-neon";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: {
    dialect: new NeonDialect({
      neon: neon(process.env.POSTGRES_URL || process.env.DATABASE_URL || ""),
    }),
    type: "postgres",
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  plugins: [nextCookies()],
});