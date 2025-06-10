import { Type } from "@sinclair/typebox"
import { IsString, IsOptional, IsEnum, IsNumber } from "class-validator"
import { PROJECT_STATUS, type ProjectStatus } from "@pbc/common"

export const ProjectSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  description: Type.Optional(Type.String()),
  status: Type.Enum(PROJECT_STATUS),
  userId: Type.String(),
  createdAt: Type.String({ format: "date-time" }),
  updatedAt: Type.String({ format: "date-time" }),
})

export class CreateProjectDto {
  @IsString()
  name!: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsEnum(PROJECT_STATUS)
  status?: ProjectStatus

  @IsOptional()
  @IsNumber()
  budget?: number
}
