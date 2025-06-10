import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class Project {
  @Field()
  id: string

  @Field()
  name: string

  @Field({ nullable: true })
  description?: string

  @Field()
  status: string

  @Field({ nullable: true })
  budget?: number

  @Field()
  userId: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
