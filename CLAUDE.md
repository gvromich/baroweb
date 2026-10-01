# Baro web

Marketing landing page for Baro, a delivery-insight product for engineering teams. The page introduces Baro and collects early-access sign-ups.

## Stack

Static site: `index.html`, `styles.css`, `main.js`. No build step, no dependencies. Keep it that way unless there's a real need.

## Run locally

    python3 -m http.server 8000

Open http://localhost:8000. The server must be started from the repo root.

## Structure

- `index.html` holds all the page content. Sections: hero (headline, one early-access button), "What Baro says" (three plain-words insight cards from demo data), "How it works" (four-step animated flow), principles, tools strip, Live, Sprint, Team health, closing sign-up, footer.
- `styles.css` uses CSS variables in `:root` for the palette. Change colors there, not inline.
- `main.js` handles the sign-up forms (validation, honeypot, submit).
- `assets/` holds the logo mark (`baro-mark.png`, `favicon.png`) and product mockups (`mock-live.webp`, `mock-sprint.webp`, `mock-team-health.webp`).

## Sign-ups

Both forms post to FormSubmit, which emails each request to connect@altevant.com. The endpoint is `ENDPOINT` in `main.js`. FormSubmit sends a one-time activation email to that address on the first submission; sign-ups don't arrive until it's confirmed. Don't change the destination address without being asked.

## Brand and design

- Dark theme. Background `#0b0d14`, panels `#141922`, borders `#232a36`.
- Accents: indigo `#5d68d6`, teal `#4fc3c7`, amber `#e0a83a`. They come from the logo (indigo and teal wave, amber arrow) and the product UI.
- Font: Figtree, loaded from Google Fonts. The wordmark "Baro" is live text, not an image.
- Logo files are the official ones. Don't redraw or recolor them.
- Mockups are real product screens. Replace them by dropping new files into `assets/` with the same names, and keep the `width` and `height` attributes in sync with the new image.

## Copy guidelines

- Plain, confident, human. No buzzwords, no filler, no AI-sounding phrasing.
- Baro is team-level only. It never ranks individuals, and copy must not suggest otherwise.
- Don't claim integrations or features that aren't in the product. Jira, GitHub and Slack are the tools currently named.

## SEO

- Head tags in `index.html` (title, description, canonical, Open Graph, Twitter card, JSON-LD) use absolute URLs on `https://www.raisethebaro.com/`. Keep it that way, since link previews ignore relative paths.
- The social preview image is `assets/og-image.jpg` (1200x630). If the headline changes, update the image too.
- `robots.txt` and `sitemap.xml` live at the repo root. Update `lastmod` in the sitemap when the page changes meaningfully, and add any new page to it.
- Keep exactly one `<h1>`. Don't claim ratings, prices or features in structured data that the product doesn't have.

## Quality checks before pushing

- The page works at phone width (single column, no horizontal scroll).
- Images have alt text and explicit dimensions. Form inputs have labels.
- The sign-up form still validates and shows success and error messages.

## Git

- `main` is the source of truth for what gets deployed.
- The owner tests on the live site, so merge every finished change to `main` right away, without waiting to be asked. Commit on the working branch, then fast-forward `main` (merge `main` into the branch first if it has moved).
- Keep commits small, with clear messages.
