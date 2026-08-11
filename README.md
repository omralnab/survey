# OCO POS Survey

A Typeform-style bilingual (Arabic / English) survey for restaurants and cafés, built with Next.js, TypeScript, Tailwind CSS, and Firebase Firestore.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Firebase client SDK (Firestore)
- Lucide icons

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Arabic is the default language and uses RTL. Use the **العربية | English** toggle to switch.

## Firebase setup

1. Create a Firebase project (or use an existing one).
2. Enable **Cloud Firestore**.
3. Register a **Web app** and copy the config values into `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

4. Deploy or paste the rules from `firestore.rules` so clients can create documents in `pos_survey_responses` but cannot read or modify them.

Completed surveys are stored as one document per submission in the `pos_survey_responses` collection, with a server timestamp and machine-readable answer keys.

## Project structure

```text
src/
  app/                  # Next.js App Router entry
  components/survey/    # Reusable survey UI
  data/surveyQuestions.ts
  i18n/ui.ts
  lib/firebase.ts
  lib/submitSurvey.ts
  types/survey.ts
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
