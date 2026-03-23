# Uncle Tallest Productions — Blog

> "Build it clean and learn from it."

Static blog for **uncletallest.productions** — home of two content formats:

| Format | Persona | Frequency | Voice |
|--------|---------|-----------|-------|
| **Weird Wisdom** | Uncle Tallest | ~5x | Irreverent, punchy, visual |
| **Off the Rails** | Pliny, the Moderately Informed | ~1x | Considered, honest, personal |

## Stack

- **[Eleventy](https://11ty.dev)** — static site generator
- **Nunjucks** — templating
- **Markdown** — content (write here, ship anywhere)
- **Python/FastAPI** — lightweight API for subscribers & webhooks (`/api`)
- **SQLite** → Postgres when the time comes
- **DigitalOcean App Platform** — hosting

## Design System

Extends the [continuity-bridge](https://continuity-bridge.github.io) palette:

**Purple system (tech/instance side)**
- Interactive: `#7864ff`
- Decorative: `#b565d8`

**Fire palette (human/creator side)**
- Gold: `#FF9201` — streaming frame, brand accent
- Orange: `#D43600` — primary logo color
- Sienna: `#890201` — depth/shadow
- Deep: `#400000` — darkest anchor

**Themes**
- Dark: Matrix Noir (`#0a0a0a`)
- Light: Inverted Zim (`#f5f5f0`)

## Getting Started

```bash
npm install
npm start        # dev server at localhost:8080
npm run build    # production build to _site/
```

## Writing a Post

**Weird Wisdom** → `content/weird-wisdom/your-post.md`
```yaml
---
title: How to Read X
persona: weird-wisdom
layout: layouts/weird-wisdom.njk
series: how-x-thinks   # optional
language: javascript   # optional
date: 2026-04-15
tags: [javascript, beginners]
draft: true
---
```

**Off the Rails** → `content/off-the-rails/your-post.md`
```yaml
---
title: Your Post Title
persona: off-the-rails
layout: layouts/off-the-rails.njk
date: 2026-04-22
tags: [neurodivergence, process]
linkedin: true
draft: true
---
```

## Status

- [x] Project scaffolded
- [x] Homepage (`index.njk`)
- [x] About page (`about.njk`) — Committee of Lunatics framing, voice from 2010 source
- [x] Base layout (`base.njk`)
- [x] Weird Wisdom post layout
- [x] Off the Rails post layout
- [x] Full design system CSS — fire palette + purple system
- [x] Theme toggle JS (Matrix Noir / Inverted Zim)
- [x] Sample posts (both formats, draft: true)
- [ ] Per-format listing pages (`/weird-wisdom/` and `/off-the-rails/`)
- [ ] Python API (`/api`) — subscribers + deploy webhook
- [ ] RSS feed verification
- [ ] Brand images copied to `/public/assets/images/`
- [ ] Brand sigil — original UTP crest (replaces Irken emblem)
- [ ] Codeberg remote URL update
- [ ] Deploy to DigitalOcean App Platform (April 2026, post domain purchase)

## Repository

GitHub: https://github.com/uncletallest-infra/uncletallest-blog
Org: uncletallest-infra

## License

MIT — © 2026 Jerry Jackson (Uncle Tallest)
