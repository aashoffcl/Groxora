# GROXORA — Website

A single-page marketing site for GROXORA ("Scale Beyond Limits"), a growth
agency offering business strategy, social media, content, web, SEO, video and
photo editing services.

**Colour palette:** vivid blue backgrounds, white surfaces, and a yellow
accent — chosen specifically so both the black wordmark and the blue chevron
in the logo stay legible. (The first draft used a dark navy background,
which hid the logo's black elements.) In the hero, the logo also sits on its
own white card so it reads cleanly against the blue.

**Note on the favicon file:** you asked for `favicon.io`, but that's the
name of a favicon-generator website, not a file format browsers use. Browsers
look for `favicon.ico`, so that's what's included in `images/` along with PNG
fallbacks for phone home screens.

## Folder structure

```
groxora/
├── index.html          Main (and only) HTML page
├── css/
│   └── style.css       All styling (design tokens at the top of the file)
├── js/
│   └── script.js       Mobile nav toggle + "find a service" interaction
├── images/
│   ├── groxora-logo.png      Full wordmark, transparent background
│   ├── x-mark.png             Cropped X-mark only (used to build favicons)
│   ├── favicon.ico            Multi-size .ico (16/32/48/64px)
│   ├── favicon-192.png        PNG icon for Android home screens
│   ├── favicon-512.png        PNG icon, large size
│   └── apple-touch-icon.png   180px icon for iOS home screens
└── readme.md            This file
```

## How to view it

No build step is needed — it's plain HTML/CSS/JS.

1. Unzip the folder.
2. Double-click `index.html` to open it in a browser, **or**
3. Serve it locally for the best experience (some browsers restrict
   fonts/scripts on `file://` pages):
   ```bash
   cd groxora
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```

## How to publish it

Any static host works — drag-and-drop the whole `groxora` folder into:
- Netlify (drag & drop deploy)
- Vercel
- GitHub Pages
- Cloudflare Pages

Just make sure the folder structure stays intact (`css/`, `js/`, `images/`
next to `index.html`).

## Page structure (in order)

1. **Header** — logo + nav, sticky on scroll.
2. **Hero** — logo, "Scale Beyond Limits" tagline, two CTAs.
3. **About** — who GROXORA is and how it thinks about growth.
4. **Find a service** — "What are you looking for?" Clicking a category
   scrolls to that service further down the page and briefly highlights it.
5. **Services** — all 7 services, each with what it is and why it benefits
   the client's brand:
   Business Solutions, Social Media Management, Content Creation,
   Website & Landing Pages, SEO, Professional Video Editing, Photo Editing.
6. **Why GROXORA** — four pillars: analysis before action, strategy-driven
   execution, partnership mindset, long-term growth focus.
7. **Contact** — "Let's build something that grows" + mailto link to
   aashoffcl@gmail.com, plus the India · Saudi Arabia · UK location line.
8. **Footer** — logo mark + copyright.

## Editing content

Everything is in `index.html` — service copy, About text, and the contact
email are all plain text/markup, no template engine involved. Colours and
fonts are defined once as CSS custom properties at the top of
`css/style.css` under `:root`, so re-theming means changing values in one
place.

## Notes

- Fonts (Space Grotesk / IBM Plex Sans / IBM Plex Mono) load from Google
  Fonts via `<link>` tags in `index.html`. If you need a fully offline
  version, download the font files and swap the `<link>` for local `@font-face`
  rules in `style.css`.
- All icons are hand-drawn inline SVG (no icon library dependency).
- Reduced-motion users automatically get animations disabled
  (`prefers-reduced-motion` is respected in `style.css`).
