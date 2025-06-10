export interface PaginationInput {
  page?: number
  limit?: number
}

export interface PaginationResult<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export type UserRole = "admin" | "user" | "moderator"
export type ProjectStatus = "pending" | "in_progress" | "completed" | "cancelled"
