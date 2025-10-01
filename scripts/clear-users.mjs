// Script to clear all users from dev database
import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";

// Load .env file manually
const envFile = readFileSync(".env", "utf-8");
const envVars = {};
envFile.split("\n").forEach((line) => {
  const [key, ...valueParts] = line.split("=");
  if (key && valueParts.length) {
    envVars[key.trim()] = valueParts.join("=").trim();
  }
});

const sql = neon(envVars.POSTGRES_URL);

async function clearUsers() {
  try {
    console.log("⚠️  WARNING: This will delete ALL users from the dev database!");
    console.log("Database:", envVars.POSTGRES_URL.split("@")[1].split("/")[0]);
    console.log("\nDeleting in 3 seconds... (Ctrl+C to cancel)\n");

    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Deleting sessions...");
    const deletedSessions = await sql`DELETE FROM "session"`;
    console.log(`✓ Deleted ${deletedSessions.length} session(s)`);

    console.log("Deleting accounts...");
    const deletedAccounts = await sql`DELETE FROM "account"`;
    console.log(`✓ Deleted ${deletedAccounts.length} account(s)`);

    console.log("Deleting users...");
    const deletedUsers = await sql`DELETE FROM "user"`;
    console.log(`✓ Deleted ${deletedUsers.length} user(s)`);

    console.log("\n✅ All users cleared from dev database!");
  } catch (error) {
    console.error("❌ Error clearing users:", error);
  }
}

clearUsers();
