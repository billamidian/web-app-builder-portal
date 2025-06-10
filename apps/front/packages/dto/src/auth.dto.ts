import { Type } from "@sinclair/typebox"
import { IsEmail, IsString, MinLength } from "class-validator"

export const LoginSchema = Type.Object({
  email: Type.String({ format: "email" }),
  password: Type.String({ minLength: 6 }),
})

export class LoginDto {
  @IsEmail()
  email!: string

  @IsString()
  @MinLength(6)
  password!: string
}

export const AuthResponseSchema = Type.Object({
  user: Type.Object({
    id: Type.String(),
    email: Type.String(),
    name: Type.String(),
    role: Type.String(),
  }),
  token: Type.String(),
})
