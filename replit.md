# Job Prospect Tracker

A full-stack web application for tracking job prospects throughout the hiring process.

## Architecture

- **Frontend**: React 18 + TypeScript, Vite, Tailwind CSS, Shadcn UI components
- **Backend**: Express 5 + TypeScript, served via `tsx` in development
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter (client-side), Express (API)
- **State Management**: TanStack React Query

## Project Structure

```
client/         - React frontend application
  src/
    App.tsx     - Main app with routing
    main.tsx    - Entry point
    pages/      - Page components
    components/ - Reusable UI components
    hooks/      - Custom React hooks
    lib/        - Utilities

server/         - Express backend
  index.ts      - Server entry point (port 5000)
  routes.ts     - API routes for prospects CRUD
  storage.ts    - Database access layer (DatabaseStorage)
  db.ts         - Drizzle/PostgreSQL connection
  vite.ts       - Vite dev server integration
  static.ts     - Static file serving (production)

shared/         - Shared TypeScript types and schemas
  schema.ts     - Drizzle schema + Zod validation for prospects table
```

## Key Scripts

- `npm run dev` - Start development server (tsx + Vite HMR on port 5000)
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run db:push` - Sync database schema with Drizzle

## Database Schema

**prospects** table:
- `id` (serial, PK)
- `company_name` (text, required)
- `role_title` (text, required)
- `job_url` (text, optional)
- `status` (text): Bookmarked | Applied | Phone Screen | Interviewing | Offer | Rejected | Withdrawn
- `interest_level` (text): High | Medium | Low
- `notes` (text, optional)
- `created_at` (timestamp with timezone)

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string (auto-set by Replit)
- `PORT` - Server port (defaults to 5000)
- `NODE_ENV` - development | production
