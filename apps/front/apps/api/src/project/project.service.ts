import { Injectable } from "@nestjs/common"
import { eq } from "drizzle-orm"
import { projects } from "../database/schema"
import type { CreateProjectDto } from "@pbc/dto"

@Injectable()
export class ProjectService {
  private db: any

  constructor(db: any) {
    this.db = db
  }

  async findAll() {
    return this.db.select().from(projects)
  }

  async findById(id: string) {
    const result = await this.db.select().from(projects).where(eq(projects.id, id))
    return result[0]
  }

  async findByUserId(userId: string) {
    return this.db.select().from(projects).where(eq(projects.userId, userId))
  }

  async create(createProjectDto: CreateProjectDto & { userId: string }) {
    const result = await this.db.insert(projects).values(createProjectDto).returning()
    return result[0]
  }

  async update(id: string, updateData: Partial<CreateProjectDto>) {
    const result = await this.db
      .update(projects)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(projects.id, id))
      .returning()

    return result[0]
  }

  async delete(id: string) {
    await this.db.delete(projects).where(eq(projects.id, id))
    return true
  }
}
