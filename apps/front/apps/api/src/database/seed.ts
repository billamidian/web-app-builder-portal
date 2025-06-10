import { db } from "./database.module"
import { users, projects, timelines } from "./schema"
import { hash } from "bcrypt"
import { sql } from "drizzle-orm"

async function seed() {
  console.log("🌱 Seeding database...")

  // Clear existing data
  await db.delete(timelines)
  await db.delete(projects)
  await db.delete(users)

  // Reset sequences
  await db.execute(sql`ALTER SEQUENCE users_id_seq RESTART WITH 1`)
  await db.execute(sql`ALTER SEQUENCE projects_id_seq RESTART WITH 1`)
  await db.execute(sql`ALTER SEQUENCE timelines_id_seq RESTART WITH 1`)

  // Create users
  const adminPassword = await hash("admin123", 10)
  const userPassword = await hash("user123", 10)

  await db.insert(users).values([
    {
      name: "Admin User",
      email: "admin@pushbuttonbuild.com",
      password: adminPassword,
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Regular User",
      email: "user@example.com",
      password: userPassword,
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])

  // Create projects
  await db.insert(projects).values([
    {
      name: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart, and checkout.",
      userId: 1,
      status: "in-progress",
      createdAt: new Date(),
      updatedAt: new Date(),
      apiKeys: JSON.stringify({
        STRIPE_API_KEY: "sk_test_mock_key_123456789",
        SENDGRID_API_KEY: "SG.mock_sendgrid_key_123456789",
        AWS_ACCESS_KEY: "AKIAMOCKAWSACCESSKEY",
        AWS_SECRET_KEY: "mock/aws/secret/key/123456789",
      }),
    },
    {
      name: "Blog Platform",
      description: "A blog platform with markdown support, comments, and user authentication.",
      userId: 2,
      status: "planning",
      createdAt: new Date(),
      updatedAt: new Date(),
      apiKeys: JSON.stringify({
        OPENAI_API_KEY: "sk-mock-openai-key-123456789",
        CLOUDINARY_API_KEY: "mock_cloudinary_123456789",
        CLOUDINARY_API_SECRET: "mock_cloudinary_secret_123456789",
      }),
    },
  ])

  // Create timelines
  await db.insert(timelines).values([
    {
      projectId: 1,
      stage: "planning",
      startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
      endDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
      completed: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      projectId: 1,
      stage: "development",
      startDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
      endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      projectId: 2,
      stage: "planning",
      startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])

  console.log("✅ Database seeded successfully!")
}

seed()
  .catch((error) => {
    console.error("Error seeding database:", error)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
