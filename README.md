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
- Dark: Matrix Noir (`#0a0a0a`)
- Light: Inverted Zim (`#f5f5f0`)
- Interactive: `#7864ff`
- Decorative: `#b565d8`
- Green: `#4db84d`

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
series: how-x-thinks   # optional — ties to /data/series.json
language: javascript   # optional
date: 2026-04-15
tags: [javascript, beginners]
draft: true            # remove to publish
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
linkedin: true   # flag for cross-posting
draft: true
---
```

## Pending

- [ ] Homepage index template
- [ ] Per-format listing pages
- [ ] Python API (`/api`) — subscribers + deploy webhook
- [ ] RSS feed verification
- [ ] Local folder rename from `continuity-bridge/uncletallest-blog` → `uncletallest-infra/uncletallest-blog`

## Repository

GitHub: https://github.com/uncletallest-infra/uncletallest-blog
Org: uncletallest-infra

## License

MIT — © 2026 Jerry Jackson (Uncle Tallest)
