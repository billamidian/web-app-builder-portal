import { Injectable, UnauthorizedException } from "@nestjs/common"
import type { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcryptjs"
import type { UserService } from "../user/user.service"
import type { LoginDto } from "@pbc/dto"

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email)
    if (!user) {
      throw new UnauthorizedException("Invalid credentials")
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials")
    }

    const payload = { sub: user.id, email: user.email, role: user.role }
    const token = this.jwtService.sign(payload)

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    }
  }

  async validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token)
      const user = await this.userService.findById(payload.sub)
      return user
    } catch {
      return null
    }
  }
}
