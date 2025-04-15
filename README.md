# Palanca

Transform heartfelt letters into beautiful, bound books. Create lasting memories that celebrate the connections that matter most.

## About

Palanca represents offerings, prayers, and encouragement given on behalf of others. This web application helps collect and preserve these meaningful messages in beautifully bound books.

## Tech Stack

- **Next.js 14** - React framework for server-rendered applications
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Clerk** - Authentication and user management
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Database
- **Vercel** - Deployment platform

## Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Clerk account (for authentication)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="your_database_connection_url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Webhook Secret (for Clerk webhooks)
CLERK_WEBHOOK_SECRET=your_webhook_secret
```

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/tylerreinecke/palanca-app.git
cd palanca-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations - ONLY NEEDED IF MAKING CHANGES TO DATABASE SCHEMA
npx prisma migrate dev
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
└── utils/                 # Helper functions
```

## Authentication

The application uses Clerk for authentication. Key features:
- Protected routes using middleware
- User management
- Social login options
- Session management

## Database

The application uses Prisma with PostgreSQL. Key models:
- User
- Project
- Letter
- Collection

To view the database schema, check `prisma/schema.prisma`.

## API Routes

The application exposes several API endpoints:
- `/api/users` - User management
- `/api/projects` - Project operations
- `/api/letters` - Letter management
- `/api/collections` - Collection operations

## Development Workflow

1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them:
```bash
git add .
git commit -m "Description of your changes"
```

3. Push your changes and create a pull request:
```bash
git push origin feature/your-feature-name
```

## Testing

Run the test suite:
```bash
npm test
```

## Deployment

The application is deployed on Vercel. The deployment process is automated through GitHub integration.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
