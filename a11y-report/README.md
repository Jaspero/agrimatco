# WCAG 2.1 AA: agrimatco.hr (branch `a11y-wcag21aa`)

Done on 2026-11-20. "Before" is the live site (agrimatco.hr, master `1d8ab1f`); "after" is the local production
build (`RESEND_API_KEY=dummy npm run build` + `node build`; the dummy key means the contact form cannot send).

Screenshots (not committed): `screenshots/<area>-<desktop|mobile>-<before|after>.png`, and the same pairs side by
side (before left, after right) in `compare/<area>-<desktop|mobile>.png`.

## Results

**axe-core 4** (wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa), 1366 px and 390 px:

- Before (live): color-contrast on 14 of 15 pages (active menu item, buttons, MENU button: white on #009e53 =
  3.49:1), document-title on the 404 page.
- After: **0 violations** on all 72 article, product-category and product pages (both widths), and on 20 pages: home, /proizvodi, 3 product categories (herbicidi, lisnato-povrce,
  tekuca-gnojiva), ljepljive-ploce-i-role and one product, /strucni-savjeti, 6 articles (strne-zitarice with the
  video, bobicasto-voce, potrebe-biljaka-za-mikroelementima, rajcica, EC vrijednosti, simptomi deficita,
  vinova-loza), o-nama, nas-tim, dokumenti, /trazi, kontakt, politika-privatnosti, 404; and in these states:
  mobile menu open, search with and without results, contact form after sending (error message), video transcript
  open.
- Text over photos (axe "needs review"), measured against the real pixels (text hidden, screenshot, contrast per
  pixel): carousel titles at least 5.7:1 at the 5th percentile on all 8 slides (desktop and mobile), carousel text
  boxes 13:1, "Naši savjeti" text 5.3:1 minimum, member cards over the accent graphic 14.7:1, table headers on the
  green gradient 4.55:1 at the lightest end.

**Lighthouse 12**: see the table at the end.

**Keyboard, reflow, text spacing** (Playwright):

- Tab order: skip link, logo, menu, carousel controls, content, footer. Every focusable element shows a 2 px
  outline (green #008847 on links, dark grey on buttons, the whole field box on inputs).
- The skip link appears on focus and moves focus to `<main>`.
- Mobile menu: MENU has `aria-expanded`/`aria-controls`; Esc closes the menu and returns focus to MENU; tabbing
  out of the menu closes it, so focus never sits behind the overlay.
- Carousel: previous / pause / next buttons; pause stops the 7.5 s autoplay; with "reduce motion" the carousel does
  not autoplay. Partner logos: pause button; with "reduce motion" the strip does not move and the logos wrap.
- No keyboard traps. Video captions: 44 cues load and show with the CC button.
- At 320 px and 683 px (1366 px at 200 %), and with WCAG 1.4.12 text spacing at 320, 683 and 1366 px: no
  horizontal scrolling and no clipped text on 15 page types (data tables scroll inside their own box, which 1.4.10
  allows).

## Issues and fixes

| # | Issue | WCAG | Fix | Visual impact |
| --- | --- | --- | --- | --- |
| 1 | Active menu item, all buttons ("Naši savjeti", "Pošalji", "Traži"), MENU button and product card hover: white on **#009e53** = 3.49:1 | 1.4.3 | `--accent` darkened to **#008847** (4.55:1). Table header gradient end #00a94f → #008847 so its lightest part is also 4.55:1. | Green a shade darker everywhere it is used. `compare/home-top-*`, `kontakt-form-*` |
| 2 | Expert-advice video (strne-zitarice, 5 min, Croatian narration) had no captions or text alternative | 1.2.2, 1.2.3, 1.2.5 | Caption track `static/strucni-savjeti/strne-zitarice/i-vid.hr.vtt` (off by default, CC button) and a collapsible full transcript under the video that also gives all on-screen text (product compositions, doses, tables) and the visual scenes. | One closed "Tekstualni zapis videa…" line under the video. `compare/video-*` |
| 3 | **All images and the video on the 40 article pages and the 5 sticky-board product pages were broken** (404): relative `src="strucni-savjeti/…"` resolved to `/strucni-savjeti/strucni-savjeti/…` after the 2025 move from Sapper (which had `<base href="/">`) to SvelteKit. Three more had wrong file names (secerac.png, zamjena-prihrana.png, patlidžan-1.jpg). | 1.1.1 (content missing) | Paths made absolute; file names fixed (patlidžan-1.jpg renamed to patlidzan-1.jpg). Images get width/height (no layout shift), lazy loading below the first one, `fetchpriority="high"` on the first; the 31 wide header photos also get WebP copies at 960 and 1920 px (`<picture>`, same picture), so phones load ~55 kB instead of 300–900 kB. The video has width/height (no layout shift) and `preload="metadata"`. | **Images are back on all those pages.** `compare/bobicasto-images-*`, `product-*` |
| 4 | Informative images had `alt=""`: phenophase drawings, nutrient-deficiency photo grids with labels, infographics with numbers (nutrient removal for carrot, onion, lettuce, tomato; symptom diagram; pH availability chart; maize hybrid traits), the world map, product photos | 1.1.1 | Alt text for 64 images, with the text shown in the image (labels and numbers read with OCR and checked by eye). Decorative crop photos keep `alt=""`. | None |
| 5 | Decorative accent graphics in the home banner and team cards missing since the 2025 migration (`url('../accent-*.svg')` → `/_app/immutable/accent-*.svg`, two 404s per page) | (bug) | `url('/accent-left.svg')`, `url('/accent-right.svg')`. They stay CSS backgrounds (not exposed to assistive tech, no layout shift, not the LCP element; 1.2 kB each, hidden on phones in the banner as before). | Light grey globe halves at the banner sides and on the team cards, as designed. `compare/home-banner-*`, `nas-tim-cards-*` |
| 6 | Home carousel auto-advances every 7.5 s with no way to stop it; no keyboard way to change slides | 2.2.2, 2.1.1 | Previous / Zaustavi (Pokreni) / next buttons, 44 px targets; no autoplay with `prefers-reduced-motion`. | Small white button group at the top right of the carousel; on phones the slide title moved down 2.5 rem to sit below it. `compare/home-top-*` |
| 7 | **Carousel slides 2–8 were broken on live**: the perf commit `ff45526` (today) re-rendered the slide `style` attribute when it attached the deferred backgrounds, wiping Glide's slide widths, so slides 2–8 were 10 928 px wide and showed a stretched crop of slide 2 without its text | (bug) | Deferred backgrounds are appended to the inline style instead. | Carousel works again |
| 8 | White carousel titles on light photos: 1.0–2.4:1 (text shadow only) | 1.4.3 | 60 % black backing behind the title | Titles sit on a dark translucent box. `compare/home-top-*` |
| 9 | "Naši savjeti" white text on the photo: down to 4.45:1 | 1.4.3 | 10 % dark tint over the photo | Photo very slightly darker |
| 10 | Partner logo strip moves continuously (60 s loop) with no pause; logos had `alt=""` | 2.2.2, 1.1.1 | Pause button; static, wrapped strip with reduced motion; company names as alt | One small "Zaustavi" button under "Naši partneri". `compare/home-partneri-*` |
| 11 | No way to skip the 8-link menu | 2.4.1 | Skip link "Preskoči na sadržaj" (visible on focus), `<main tabindex="-1">` | None until focused |
| 12 | MENU button did not expose its state; Esc did nothing; focus could move behind the open mobile menu; active page only shown by colour | 4.1.2, 2.4.3, 1.3.1 | `aria-expanded`, `aria-controls`, Esc closes and returns focus, focus-out closes; `aria-current` in the menu; `aria-label` on the main and breadcrumb navs | None |
| 13 | Several `<h1>` per page on home (8 slide titles, banner, partners); member names were `<h1>`; empty `<h2>` on product categories | 1.3.1 | Slide and partner titles `<h2>`, member names `<h3>` (same size), empty headings not rendered | None |
| 14 | Contact form: success was always shown, even when sending failed (the client ignored the HTTP status and the server ignored Resend's error result); status shown only with `alert()`; required fields not explained; button disabled with no reason given; no `autocomplete` | 3.3.1, 3.3.2, 4.1.3, 1.3.5 | Inline status message in a live region, focused after sending, red bar for errors; the endpoint answers 502 when Resend reports an error; note "Sva polja i obje potvrde su obavezni."; button always enabled, the browser's required-field check names the empty field; `autocomplete="name"`/`"email"` | Button is full green from the start (was faded until everything was filled); one note line above the form; status box under the button instead of a browser alert. `compare/kontakt-form-*` |
| 15 | Input boxes: border rgba(32,33,34,.2) = 1.5:1 | 1.4.11 | Border rgba(32,33,34,.55) = 3.7:1 | Field outlines darker grey |
| 16 | Micronutrient table: coloured stars (#a7cf39 = 1.6:1 on #eee) read by screen readers as symbol names | 1.4.3, 1.1.1 | Colours darkened to #007c46 / #5d741c / #d90a18 (4.5:1); stars hidden from screen readers with "visoka/srednja/niska" as text | Stars darker green / olive / red. `compare/potrebe-table-*` |
| 17 | 404 page: empty `<title>` and "Error undefined" (SvelteKit 2 no longer passes `status`/`error` props) | 2.4.2 | Reads `$page`; title and h1 "Stranica nije pronađena", link home | 404 page has a heading and a home link |
| 18 | Privacy page: title only set by JavaScript, nested second `<main>`; Amcolon page had no title | 2.4.2, 1.3.1 | Server-rendered titles; inner `<main>` → `<div>` | None |
| 19 | Search results / "Nema rezultata" not announced | 4.1.3 | Hidden live region "Pronađeno rezultata: N" | None |
| 20 | Long e-mail addresses forced sideways scrolling at 320 px with text spacing; screen-reader-only text in scrolling tables widened the page | 1.4.10, 1.4.12 | `overflow-wrap: anywhere` on mailto links; tables are the positioning context | None |
| 21 | New-tab links gave no warning (product cards open catalogue PDFs) | good practice (3.2.5 is AAA) | Hidden "(otvara se u novoj kartici)" | None |
| 23 | Wide data tables scroll sideways on phones but could not be reached by keyboard (kemijski-sastav-gnojiva) | 2.1.1 | When a table overflows, its box becomes a focusable, labelled region | None |
| 22 | No `prefers-reduced-motion` handling; no focus ring on the video and the transcript toggle | 2.3.3 (AAA), 2.4.7 | Global reduced-motion rule; 2 px outline on video and summary | None |

Checked and fine without changes: `lang="hr"`; unique titles on the other pages; link text ("Pročitaj" links follow
a heading that names the catalogue section); alt text already present on contact, team map, logo and product-card
images (product cards have empty alt next to the visible product name); tables have header cells; target sizes.

## Video captions: how they were made

I cannot listen to audio. The narration was transcribed locally with faster-whisper (model `medium`, Croatian
detected) and corrected by hand for spelling and product names (Novalon, Trazex, Bioplex, Inex) against the
on-screen text, which was read from frames every 5 s. The intro and outro have sound but no speech (marked
"[Glazba]", assumed to be music). The farmer's closing testimonial (4:47–5:03) was transcribed with lower
confidence ("…u kombinaciji s okvašivačem Inex, dala su odlične rezultate"). **Please listen once and correct the
`.vtt` and the transcript if a word is off.** There is no separately recorded audio-described version; the
transcript under the video carries all visual information (1.2.5 relies on it).

## Not fixed or not verified

- **PDFs** (catalogues, leaflets, 110 safety data sheets on /dokumenti) were not checked for accessibility; they are
  supplier documents.
- **Heading levels inside some articles skip** (e.g. h2 → h5 on bobicasto-voce). Not a WCAG failure; left as is to
  avoid changing the look of 40 hand-written pages.
- Product cards link to the 2023 catalogue PDF (with page anchors) although 2025/2026 catalogues exist: a content
  question for the client.
- Not tested with a real screen reader (NVDA, VoiceOver).
- **One test message went out through the live contact form** (17:59 CET): my state-check script, meant for the
  local build, was also run against the live site after deploying. Name "Test", e-mail test@example.com, message
  "Test poruka (lokalni test, ne šalje se)", sent to ivana.ivankovic@agrimatco-eu.com; the server answered 200, so
  Resend accepted it. It also confirms the production key works. The client may want a one-line apology/explanation.

## Lighthouse 12

Median of 3 runs, performance / accessibility / best practices / SEO. "Before" is live; "after, local" is the
production build served by `node build` on this PC (no CDN, no compression), which costs about 9 points of mobile
performance by itself: master built and measured the same way scores **83** on the home page (after: 82), and
the contact page, where nothing performance-related changed, scores 89 locally against 98 live.

| Page | Live before, mobile | Local after, mobile | Live before, desktop | Local after, desktop |
| --- | --- | --- | --- | --- |
| / | 93/95/96/100 | 82/100/100/100 | 96/95/93/100 | 99/100/96/100 |
| /strucni-savjeti/strne-zitarice | 100/95/96/100 * | 97/100/100/100 | 99/95/96/100 * | 98/100/100/100 |
| /kontakt | 98/96/100/100 | 89/100/100/100 | 99/96/100/100 | 100/100/100/100 |

\* Live article scores were measured with all images and the video missing (404), so they are not comparable.

**Live after deploy** (commit `6c10567`, App Hosting rollout `rollout-2026-11-20-003`):

| Page | Live before, mobile | Live after, mobile | Live before, desktop | Live after, desktop |
| --- | --- | --- | --- | --- |
| / | 93/95/96/100 | 93/100/100/100 † | 96/95/93/100 | 96/100/100/100 |
| /strucni-savjeti/strne-zitarice | 100/95/96/100 * | 99/100/100/100 | 99/95/96/100 * | 99/100/100/100 |
| /kontakt | 98/96/100/100 | 98/100/100/100 | 99/96/100/100 | 99/100/100/100 |

† Right after the rollout (cold CDN cache) the home page measured 93/83/83 with two one-off 500s from the CDN edge
on static files (favicon, logo; none in the server logs); re-run 20 minutes later: 94/93/85, median 93.
The article page now loads its header photo, inline images and video poster and still scores 99.

Live axe after deploy: 0 violations on all 82 pages tested (10 main pages, 404 and all 72 article, category and
product pages, desktop and mobile) and in the interactive states listed above. No console errors on home,
kontakt, the video article and /trazi. Footer credit "Made by Jaspero" still links to https://jaspero.co/.
