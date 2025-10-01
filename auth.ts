import { betterAuth } from "better-auth";
import { neon } from "@neondatabase/serverless";
import { NeonDialect } from "kysely-neon";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "https://keithbrowndds.com",

  trustedOrigins: [
    "http://localhost:3000",
    "https://keithbrowndds.com",
    "https://www.keithbrowndds.com",
  ],

  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: "keithbrowndds.com",
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  database: {
    dialect: new NeonDialect({
      neon: neon(process.env.POSTGRES_URL || process.env.DATABASE_URL || ""),
    }),
    type: "postgres",
  },
});