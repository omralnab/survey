# OCO POS Survey

A Typeform-style bilingual (Arabic / English) survey for restaurants and cafés, built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide icons
- Browser localStorage for draft progress

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Arabic is the default language and uses RTL. Use the **العربية | English** toggle to switch.

Answers are kept in the browser (localStorage) while the survey is in progress. There is no backend or database.

## Project structure

```text
src/
  app/                  # Next.js App Router entry
  components/survey/    # Reusable survey UI
  data/surveyQuestions.ts
  i18n/ui.ts
  lib/surveyStorage.ts
  types/survey.ts
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Deploy — no environment variables required.
