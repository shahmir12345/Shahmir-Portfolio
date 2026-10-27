# Shahmir Khan: Portfolio

Built with Next.js (App Router) + TypeScript. Dark theme, plain CSS.

## Run it on your computer

1. Install Node.js (LTS) from https://nodejs.org
2. Open this folder in VS Code, then open the terminal and run:

```bash
npm install
cp .env.example .env.local    # Windows: copy .env.example .env.local
npm run dev
```

3. Open http://localhost:3000

## Add your own files (inside the `public/` folder)

| File | What it is |
|------|-----------|
| `public/photo.jpg` | Your photo (used on Home, About and Contact) |
| `public/cv.pdf` | Your CV (the Download CV button) |
| `public/certs/kpitb.jpg` | KPITB internship certificate (image) |
| `public/certs/docker.jpg` | Docker certificate (image) |

Until you add them, the site shows "SK" initials and placeholder boxes.

## Change your text

- Personal info, skills, services, process steps, certificates: `src/data/site.ts`
- Projects (and their GitHub / Live links): `src/data/projects.ts`

## Contact form

1. Create a free account on https://resend.com and make an API key
2. Put it in `.env.local` as `RESEND_API_KEY`, and your inbox address as `CONTACT_TO_EMAIL`
3. Restart `npm run dev`

## Deploy

Push to GitHub, then import the repo on https://vercel.com. Add the same two
environment variables in Vercel > Project Settings > Environment Variables.
