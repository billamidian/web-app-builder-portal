import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo"
import { JwtModule } from "@nestjs/jwt"
import { DatabaseModule } from "./database/database.module"
import { AuthModule } from "./auth/auth.module"
import { UserModule } from "./user/user.module"
import { ProjectModule } from "./project/project.module"

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: ({ req, res }) => ({ req, res }),
      playground: true,
      introspection: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.APP_SECRET || "dev-secret",
      signOptions: { expiresIn: "7d" },
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
    ProjectModule,
  ],
})
export class AppModule {}
