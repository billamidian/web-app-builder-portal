import { Injectable } from "@nestjs/common"
import { eq } from "drizzle-orm"
import { users } from "../database/schema"
import type { CreateUserDto, UpdateUserDto } from "@pbc/dto"
import * as bcrypt from "bcryptjs"

@Injectable()
export class UserService {
  private db: any

  constructor(db: any) {
    this.db = db
  }

  async findAll() {
    return this.db.select().from(users)
  }

  async findById(id: string) {
    const result = await this.db.select().from(users).where(eq(users.id, id))
    return result[0]
  }

  async findByEmail(email: string) {
    const result = await this.db.select().from(users).where(eq(users.email, email))
    return result[0]
  }

  async create(createUserDto: CreateUserDto & { password: string }) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)

    const result = await this.db
      .insert(users)
      .values({
        ...createUserDto,
        password: hashedPassword,
      })
      .returning()

    return result[0]
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.db
      .update(users)
      .set({ ...updateUserDto, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning()

    return result[0]
  }

  async delete(id: string) {
    await this.db.delete(users).where(eq(users.id, id))
    return true
  }
}
