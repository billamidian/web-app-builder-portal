import { Resolver, Query, Mutation } from "@nestjs/graphql"
import type { UserService } from "./user.service"
import type { CreateUserDto, UpdateUserDto } from "@pbc/dto"
import { User } from "../auth/auth.types"

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.findAll()
  }

  @Query(() => User)
  async user(id: string) {
    return this.userService.findById(id)
  }

  @Mutation(() => User)
  async createUser(createUserDto: CreateUserDto & { password: string }) {
    return this.userService.create(createUserDto)
  }

  @Mutation(() => User)
  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto)
  }

  @Mutation(() => Boolean)
  async deleteUser(id: string) {
    return this.userService.delete(id)
  }
}
