import { Resolver, Query, Mutation } from "@nestjs/graphql"
import type { ProjectService } from "./project.service"
import type { CreateProjectDto } from "@pbc/dto"
import { Project } from "./project.types"

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => [Project])
  async projects() {
    return this.projectService.findAll()
  }

  @Query(() => Project)
  async project(id: string) {
    return this.projectService.findById(id)
  }

  @Mutation(() => Project)
  async createProject(createProjectDto: CreateProjectDto & { userId: string }) {
    return this.projectService.create(createProjectDto)
  }

  @Mutation(() => Boolean)
  async deleteProject(id: string) {
    return this.projectService.delete(id)
  }
}
