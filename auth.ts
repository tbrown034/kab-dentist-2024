import { betterAuth } from "better-auth";
import { neon } from "@neondatabase/serverless";
import { NeonDialect } from "kysely-neon";
import { nextCookies } from "better-auth/next-js";
import { APIError } from "better-auth/api";

// Email allowlist - only these emails can sign up
const ALLOWED_EMAILS = [
  "trevor.brown@gmail.com",
  "kabdds@keithbrowndds.com",
  "admin@keithbrowndds.com",
];

export const auth = betterAuth({
  // Explicit base URL prevents state mismatch errors
  baseURL: process.env.BETTER_AUTH_URL,

  // Secure cookies in production (required for HTTPS)
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },

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

  // Email allowlist enforcement
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          // Check if email is on the allowlist (case-insensitive)
          if (!ALLOWED_EMAILS.includes(user.email.toLowerCase())) {
            throw new APIError("FORBIDDEN", {
              message: "Registration is restricted to authorized users only.",
            });
          }
          return { data: user };
        },
      },
    },
  },

  plugins: [nextCookies()],
});