Applaa Website – Next.js (Vercel-ready)

This is the isolated marketing website for Applaa. It uses Next.js 14 (App Router) with Tailwind CSS and is designed for deployment on Vercel. It includes Prisma for Postgres, with stubs for authentication (NextAuth) and billing (Stripe).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Environment
1) Copy `.env.example` to `.env.local`
2) Provide values for: `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`

Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Prisma (Postgres)
- NextAuth (Auth)
- Stripe (Billing)

Monorepo note: This folder is isolated from the Electron app to avoid conflicts and can be deployed independently to Vercel.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
