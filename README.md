# Home Repair Hub — v2

Standalone Next.js / React / TypeScript home-repair assistance tracker for Jacksonville, Florida.

## Start

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To verify production compilation run `npm run build`.

## Features

- All **18 original organization and program records** preserved from v1, including four city programs previously identified as excluding mobile homes.
- Action-oriented overview with next organizations to call, due follow-ups, application count, and prioritized repair cases.
- Six-question eligibility screening per organization (mobile/manufactured home, Duval service area, veteran eligibility, income, ownership/title, application availability), with verification source and date. All answers begin **Unknown**; the original exclusion flags are retained until changed.
- Call/contact history with date, method, contact person, outcome, notes, next action, and follow-up date.
- Repair projects with priority, progress, descriptions, linked organizations, and local photo attachments (8 MB per image limit).
- Search, eligibility/status filters, JSON import/export.

## Storage and migration

Data is stored **locally in your browser**. Version 2 reads the old `home-repair-tracker-v1` localStorage array if no v2 data exists, preserving your original records and notes. New data is saved under `home-repair-tracker-v2`.

Photo blobs are stored in **IndexedDB** on the same browser/device. **JSON backups do not include photos.** Save your original photos separately before changing browsers, clearing site data, or switching devices. There is no account or cross-device synchronization. JSON import replaces organization, screening, call, and project data but does not remove photos.

## Important cautions

The directory's phone numbers, program eligibility, and availability were carried forward from earlier research and are **not independently reverified in this build**. "Potentially eligible" is a legacy lead, not a confirmation. A positive screening answer should include the agency's source and verification date. Ask agencies directly about inspection and code-enforcement reporting policies.

Do not walk on damaged/rotted floor sections. The app does not provide structural safety certification.

## Version 3 features

- **Smart organization matching:** Scores organizations from the six saved eligibility answers and the selected repair project. Unknown answers do not count as verified; explicitly excluded programs remain visible.
- **Personalized call scripts:** Use the **Call script** button on any organization card; copy the script for calls.
- **Application documents:** Track requirements and readiness in the Documents tab. Do not store sensitive identity documents in notes.
- **Verification warnings:** Unverified and older-than-90-day eligibility records are flagged. These are user-entered verification details, not independent real-time checks.
- **Backup & Sync:** Export a complete portable JSON file **including photos** and import on another device. This is manual file-based synchronization, not automatic cloud sync. Export each device before importing because records are replaced, not merged. Store exported files securely.

Existing v2 localStorage records are read under the same `home-repair-tracker-v2` key and upgraded in memory with document checklist defaults. The 18 original seeded organizations are retained. A records-only JSON backup remains available for compatibility; it does not include photos.

### Validation

`npm install` was attempted but did not finish within the available execution time, so the Next.js production build could not be completed here. Run `npm install && npm run build` locally before deployment.
