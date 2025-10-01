// Script to check current users in dev database
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

async function checkUsers() {
  try {
    console.log("Checking users in dev database...\n");

    const users = await sql`SELECT id, email, name, "createdAt" FROM "user"`;

    if (users.length === 0) {
      console.log("✅ No users found in database");
    } else {
      console.log(`Found ${users.length} user(s):\n`);
      users.forEach((user, index) => {
        console.log(`${index + 1}. ${user.email}`);
        console.log(`   Name: ${user.name || 'N/A'}`);
        console.log(`   ID: ${user.id}`);
        console.log(`   Created: ${user.createdAt}`);
        console.log('');
      });
    }
  } catch (error) {
    console.error("Error checking users:", error);
  }
}

checkUsers();
