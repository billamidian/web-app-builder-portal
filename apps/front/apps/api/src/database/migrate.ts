import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { Pool } from "pg"
import * as dotenv from "dotenv"

// Load environment variables
dotenv.config()

async function runMigrations() {
  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set")
  }

  console.log("🔄 Running database migrations...")

  const pool = new Pool({
    connectionString,
  })

  const db = drizzle(pool)

  try {
    await migrate(db, { migrationsFolder: "drizzle" })
    console.log("✅ Migrations completed successfully!")
  } catch (error) {
    console.error("❌ Migration failed:", error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

runMigrations()
