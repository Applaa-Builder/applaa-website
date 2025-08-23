# Applaa Marketing Website – Product Requirements Document (PRD)

## 1. Purpose
Build a high-conversion, Vercel-hosted marketing website that presents Applaa’s vision, features, pricing, and roadmap, and enables account sign-in and subscription purchase for the Pro plan.

## 2. Goals & KPIs
- Increase downloads/signups
- Convert to Pro subscriptions
- Communicate UNLIMITED App Builder vision
- SEO-friendly, fast (LCP < 2.5s), accessible (AA)

## 3. Target Users
- Non-technical founders and creators
- Professional developers
- SMBs evaluating internal tools

## 4. Scope (MVP)
- Landing page with hero, features, stats, CTA
- Features deep-dive page
- Pricing page with Stripe checkout
- Roadmap page
- Authentication (NextAuth: Email + Google + GitHub)
- Account page (view plan/status)
- Docs pages placeholders

## 5. Non-Goals (MVP)
- Team management, invoices portal (link to Stripe Portal)
- Blog (placeholder)

## 6. Architecture
- Next.js 14 App Router, Tailwind CSS
- Prisma (Postgres)
- NextAuth (Auth) – Email + OAuth (Google, GitHub)
- Stripe (Billing) – Products/Prices + Webhooks
- Deployed on Vercel

## 7. Data Model
- User (NextAuth)
- Account, Session, VerificationToken (NextAuth)
- Subscription: stripeCustomerId, priceId, status, periodEnd

## 8. Pages & Routes
- / (Landing)
- /features
- /pricing
- /roadmap
- /account (protected)
- /api/auth/* (NextAuth)
- /api/stripe/webhook (Stripe)

## 9. Security & Compliance
- Store only minimal PII
- Use HTTPS everywhere
- Verify Stripe signatures
- CSRF protection via NextAuth

## 10. Analytics & SEO
- PostHog/GA – page views, funnels
- Sitemap, robots.txt, OpenGraph meta

## 11. Milestones
1) Scaffold + PRD + Schema (this milestone)
2) Landing + Features content
3) Auth + Account page
4) Stripe integration + Pricing
5) Roadmap + SEO + Analytics
6) Vercel deploy + QA

## 12. Acceptance Criteria
- CI build passes
- Database migrations apply
- Sign-in works; account page shows subscription status
- Stripe test checkout succeeds; webhook updates status
- Lighthouse score 90%+
