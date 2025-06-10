import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class User {
  @Field()
  id: string

  @Field()
  email: string

  @Field()
  name: string

  @Field()
  role: string
}

@ObjectType()
export class AuthResponse {
  @Field(() => User)
  user: User

  @Field()
  token: string
}
