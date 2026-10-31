# Xyvin Technologies website

Marketing site for [www.xyvin.com](https://www.xyvin.com), built with Next.js 16 (App Router), React 19 and Tailwind CSS. Deployed on Vercel.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in the values you need
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run typecheck`.

## Environment variables

| Name | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com), used by the contact form |
| `CONTACT_TO_EMAIL` | Where enquiries are sent (comma-separate several addresses) |
| `CONTACT_FROM_EMAIL` | Sender address on a domain verified in Resend, e.g. `Xyvin Website <website@xyvin.com>` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID. Leave empty to disable analytics and the cookie banner |

Set the same variables in Vercel under Project Settings > Environment Variables.

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/site_config.ts` | Company details, contact info, routes and **the stats shown on the site** |
| `src/data/services.ts` | Services (pages, footer links, contact form options) |
| `src/data/projects.ts` | Portfolio projects. Add a `caseStudy` to publish a `/work/[slug]` page |
| `src/data/testimonials.ts`, `team_data.ts`, `advisory_board_data.ts`, `clients.ts`, `blog_data.ts` | Other page content |
| `src/components/ui/` | Shared design-system components (buttons, sections, cards) |
| `src/components/layout/` | Header, footer, WhatsApp button |
| `src/app/` | Routes, plus `robots.ts`, `sitemap.ts`, `opengraph-image.tsx` and `not-found.tsx` |
| `src/app/api/contact/route.ts` | Contact form endpoint (validation, spam checks, sends via Resend) |
| `tailwind.config.ts` | Design tokens: colours, fonts, type scale |

## Design rules

Keep the site plain and specific: navy text on white or warm off-white, one amber accent used only as a fill, thin borders, real screenshots and photos. Avoid gradient text, glows, pill badges above headings, decorative animation and unverifiable numbers.

## Workflow

Work on a branch, push it, and review the Vercel preview URL before merging to `main` (which deploys to production).
