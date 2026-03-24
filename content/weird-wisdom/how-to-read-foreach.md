---
title: How to Read forEach
persona: weird-wisdom
layout: layouts/weird-wisdom.njk
series: how-x-thinks
language: javascript
date: 2026-04-15
tags:
  - javascript
  - functions
  - beginners
description: Your brain reads left to right. forEach doesn't. Here's the bridge.
permalink: /weird-wisdom/how-to-read-foreach/
---

The `forEach` method seems confusing to some folks, and this is normal —
computers evaluate data differently than humans.

Use this color-coded breakdown to read yours so it makes sense to your
inefficient human mind.

**Color order: Green > Red > Grey > Yellow**

- 🟢 **Green** — For Each
- 🔴 **Red** — item
- ⚫ **Grey** — in this array
- 🟡 **Yellow** — do the following

<figure class="post-figure">
  <img
    src="{{ '/assets/images/weird-wisdom/foreach-color-coded.png' | prefix }}"
    alt="forEach color coded: Green = For Each, Red = item, Grey = in this array, Yellow = do the following"
    class="post-image"
  />
</figure>

Read it out loud: *"For each **cardData** in **initialCards**, do the
following..."*

Your brain wants subject-verb-object. `forEach` hands you the verb first.
Once you see the color order, you can't unsee it.

---

*This works for any `forEach` — swap out the variable names and the
pattern holds. Same colors, same order, every time.*
