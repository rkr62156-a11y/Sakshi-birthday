# Sakshi (Suar) Birthday Website

A four-screen, mobile-first birthday surprise with a server-verified secret code, five supplied photos, animated reveal, gallery, friendship letter, and links to a current Hindi playlist.

## Secret code
`BEAUTIFUL SUAR`

## Run locally
Requires Node.js 18+.

```bash
npm start
```
Then open http://localhost:3000

## Optional deployment environment variables
- `PORT` — port to listen on (default 3000)
- `CODEWORD` — change the secret code (default `BEAUTIFUL SUAR`)
- `SESSION_SECRET` — set a long random secret before public deployment

The site uses only Node's built-in modules; no `npm install` is required. The unlock endpoint verifies the code on the server, uses an HttpOnly signed cookie, and rate-limits failed attempts per IP. For production deployment, use HTTPS and set a strong `SESSION_SECRET` and a unique `CODEWORD`.

## Music
Music is user-initiated via Spotify search links (no autoplay). The included picks reflect October 2026 Hindi listening trends; availability can vary by region/account.
