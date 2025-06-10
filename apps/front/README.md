# Web App Builder Portal - Monorepo

A full-stack web application built with NestJS, Next.js, and GraphQL in a monorepo structure managed by pnpm and Nx.

## Architecture

- **apps/api**: NestJS backend with Apollo GraphQL server
- **apps/front**: Next.js frontend with Apollo Client
- **packages/common**: Shared utilities and constants
- **packages/dto**: Shared types and validation schemas
- **packages/tsconfig**: Base TypeScript configurations

## Prerequisites

- Node.js 18+
- pnpm 9+
- PostgreSQL 14+
- Redis (optional, for caching)

## Quick Start

1. **Install dependencies**
   \`\`\`bash
   pnpm install
   \`\`\`

2. **Set up environment variables**
   \`\`\`bash
   cp apps/api/.env.example apps/api/.env
   cp apps/front/.env.example apps/front/.env
   \`\`\`

3. **Set up database**
   \`\`\`bash
   # Generate and run migrations
   pnpm db:generate
   pnpm db:migrate
   
   # Seed with demo data
   pnpm db:seed
   \`\`\`

4. **Start development servers**
   \`\`\`bash
   # Start both API and frontend
   pnpm dev
   
   # Or start individually
   pnpm dev:api
   pnpm dev:front
   \`\`\`

## Available Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps for production
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier
- `pnpm db:generate` - Generate database migrations
- `pnpm db:migrate` - Run database migrations
- `pnpm db:seed` - Seed database with demo data

## Development

### API (NestJS + GraphQL)
- GraphQL Playground: http://localhost:3001/graphql
- JWT authentication with HTTP-only cookies
- Drizzle ORM with PostgreSQL
- Auto-generated GraphQL schema

### Frontend (Next.js)
- Apollo Client for GraphQL
- TailwindCSS + Radix UI components
- TypeScript with auto-generated GraphQL types
- Server-side rendering

### Demo Credentials
- Admin: `admin@pushbuttonbuild.com` / `admin123`
- User: `user@example.com` / `user123`

## Project Structure

\`\`\`
├── apps/
│   ├── api/                 # NestJS backend
│   │   ├── src/
│   │   │   ├── auth/        # Authentication module
│   │   │   ├── user/        # User management
│   │   │   ├── project/     # Project management
│   │   │   └── database/    # Database schema & migrations
│   │   └── drizzle/         # Migration files
│   └── front/               # Next.js frontend
│       ├── app/             # App router pages
│       ├── components/      # Reusable components
│       └── lib/             # Apollo client & utilities
├── packages/
│   ├── common/              # Shared utilities
│   ├── dto/                 # Shared types & validation
│   └── tsconfig/            # Base TypeScript configs
└── package.json             # Root package.json
\`\`\`

## Technologies

- **Backend**: NestJS 11, Apollo Server 4, Drizzle ORM, PostgreSQL
- **Frontend**: Next.js 15, Apollo Client 3, TailwindCSS, Radix UI
- **Tooling**: Nx 20, pnpm, TypeScript, ESLint, Prettier
- **Authentication**: JWT with HTTP-only cookies
