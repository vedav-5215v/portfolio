# P. Mukteswara — The Series

A cinematic, streaming-inspired portfolio for **P. Mukteswara**, a B.E Mechanical Engineering student at Saveetha University and aspiring Design Engineer. The original layout, motion effects, and interaction patterns have been preserved.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. In the terminal run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

To create a production build, run `npm run build`.

## Personalize the portfolio

- **Profile, education, projects, skills, and links:** `src/data/portfolio.ts`
- **Portrait:** replace `public/assets/mukteswara-placeholder.svg` with the portrait, then update `profile.portrait` in `src/data/portfolio.ts` (or keep the same path and filename).
- **Resume:** place Mukteswara's PDF in `public/assets/` and set `profile.resumePdf` in `src/data/portfolio.ts` to its public path, for example `/assets/P_Mukteswara_Resume.pdf`.
- **Contact:** the supplied email and LinkedIn are already configured. GitHub is intentionally omitted until a profile URL is provided.

Only details provided so far are included. No previous owner's projects, achievements, certifications, education, resume, or portrait should be used. Project descriptions are intentionally conservative; add technical details when Mukteswara confirms them.
