import { Type } from "@sinclair/typebox"
import { IsEmail, IsString, IsOptional, IsEnum } from "class-validator"
import { USER_ROLES, type UserRole } from "@pbc/common"

export const UserSchema = Type.Object({
  id: Type.String(),
  email: Type.String({ format: "email" }),
  name: Type.String(),
  role: Type.Enum(USER_ROLES),
  createdAt: Type.String({ format: "date-time" }),
  updatedAt: Type.String({ format: "date-time" }),
})

export class CreateUserDto {
  @IsEmail()
  email!: string

  @IsString()
  name!: string

  @IsOptional()
  @IsEnum(USER_ROLES)
  role?: UserRole

  @IsOptional()
  @IsString()
  company?: string

  @IsOptional()
  @IsString()
  phone?: string
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsEnum(USER_ROLES)
  role?: UserRole

  @IsOptional()
  @IsString()
  company?: string

  @IsOptional()
  @IsString()
  phone?: string
}
