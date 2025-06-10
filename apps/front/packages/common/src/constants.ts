export const APP_CONSTANTS = {
  JWT_EXPIRES_IN: "7d",
  COOKIE_NAME: "session",
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const

export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  MODERATOR: "moderator",
} as const

export const PROJECT_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
} as const
