import { Resolver, Mutation, Context } from "@nestjs/graphql"
import type { AuthService } from "./auth.service"
import type { LoginDto } from "@pbc/dto"
import { AuthResponse } from "./auth.types"

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async login(input: LoginDto, @Context() context: any) {
    const result = await this.authService.login(input)

    // Set HTTP-only cookie
    context.res.cookie("session", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    return result
  }

  @Mutation(() => Boolean)
  async logout(@Context() context: any) {
    context.res.clearCookie('session')
    return true
  }
}
