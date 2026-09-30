# baroweb

Landing page for Baro: intro, product views and an early-access sign-up.

Static site (HTML, CSS, a little JS). No build step.

## Run locally

    python3 -m http.server 8000

Then open http://localhost:8000.

## Layout

- `index.html`, `styles.css`, `main.js` are the page.
- `assets/` holds the product mockups and the logo mark.

## Sign-ups

The form posts to FormSubmit, which forwards each request to connect@altevant.com.
The first submission sends an activation email to that address; click the link in it once.
To swap providers, change `ENDPOINT` in `main.js`.

