# Fatih Library

Static site hosted on GitHub Pages: `bilalajadi.github.io/Overstimulated`  
Repo: `bilalajadi/Overstimulated`  
Stack: Pure HTML/CSS/JS. No build system, no dependencies, no bundler.

---

## File Structure

```
index.html                  — Launchpad homepage
overstimulated/index.html   — Overstimulation guide
gratitude/index.html        — Gratitude guide (11 June 2025)
actions/index.html          — Actions Library (standalone page)
assets/theme.js             — Shared theme logic (all pages import this)
assets/logo-app-icon.png    — Logo for Dark / Medieval / Fatih themes
assets/logo-concept.png     — Logo for Light theme
```

---

## Themes

Four themes toggled by user, stored in `localStorage` key `'fatih-lib-theme'`.  
Applied as `data-theme` attribute on `<html>`. Default: `light`.

| Key | Name | Fonts | Colours |
|-----|------|-------|---------|
| `light` | Light | Playfair Display + DM Sans | Cream `#f9f8f4`, orange accent `#E8854A` |
| `dark` | Dark | Playfair Display + DM Sans | Dark `#0E0F0D`, gold accent `#C9A84C` |
| `medieval` | Medieval | Cormorant Garamond + Inter | Dark `#0E0F0D`, gold accent `#C9A84C`, small radii |
| `fatih` | Fatih | Josefin Sans + DM Sans | Navy `#0B1120`, cyan accent `#3BBFCC` |

Dark = Light fonts + Light structure + dark colour palette.  
Medieval = editorial dark (Cormorant Garamond, tight radii 4/6/8/10px).

**Flash prevention** — every page must have this inline `<script>` before the first paint:
```html
<script>(function(){var t=localStorage.getItem('fatih-lib-theme');document.documentElement.setAttribute('data-theme',['light','dark','medieval','fatih'].includes(t)?t:'light');})();</script>
```

**Logo swap** — every page must swap the logo image based on theme:
```css
.logo-light { display: none; }
[data-theme="light"] .logo-dark { display: none; }
[data-theme="light"] .logo-light { display: block; }
```

---

## Content Rules (non-negotiable)

1. **Quran** — Never write or paraphrase verses yourself. Always quote directly from The Clear Quran translation, word for word. If the exact wording cannot be verified, do not include it.
2. **British spelling** — Always. colour, recognise, organisation, honour, centre, etc.
3. **No em dashes or hyphens in prose** — Never use `—` or `-` in copy. Restructure the sentence. Use a colon, comma, or full stop instead.
4. **No full names of real people** — Do not identify individuals by name in page content.
5. **No emoji in UI** — Never.
6. **No comments praising changes** — Write no inline comments describing what was added or why for a task.

---

## Page Structure (guide pages)

Every guide page follows this three-part flow:

1. **Context / Problem** — set the stage, explain why this matters
2. **Solution / Actions** — what can be done
3. **Interactive element** — something the user does (checklist, quiz, input, etc.)

---

## Actions Library

Lives at `/actions/index.html`. Rules for every action card:

- Title = the action itself, written as an imperative ("Give £1 in charity today")
- Each card has a Lucide-style SVG icon (inline, stroke, 20px, 1.75px weight)
- Tags: `faith`, `mind`, `daily`, or `onetime`
- Source guide label shown on card
- JS filtering by tag and search — no page reload

---

## Workflow

- All work goes on a feature branch: `feat/<name>`
- Open PR with `gh pr create`, user merges
- Never push directly to `main`

---

## Adding a New Guide Page

Checklist before considering any guide page complete:

- [ ] Follows the three-part flow (Context, Solution, Interactive)
- [ ] All Quran quotes sourced and verbatim from The Clear Quran
- [ ] No em dashes or hyphens in prose
- [ ] British spelling throughout
- [ ] All four themes tested visually
- [ ] Flash prevention script present (with all four theme keys)
- [ ] Back-to-Library nav link with logo swap
- [ ] Four-button theme toggle (Light, Dark, Medieval, Fatih)
- [ ] Card added to `index.html` launchpad (Live once page exists)
- [ ] Actions from the guide added to `actions/index.html`
- [ ] Mobile tested at 375px (no horizontal overflow, readable text)

---

## CSS Conventions

- Use CSS custom properties (`--var`) for all colours, fonts, radii, shadows
- Never hardcode hex values in component CSS — always reference a token
- Three surface levels: `--bg` (page) → `--bg-card` (cards) → `--bg-raised` (inputs, tooltips)
- Transitions: `150ms ease` (micro), `220ms ease` (standard), `350ms ease` (modal)
- No gradients as backgrounds — flat dark/light surfaces only
- No `backdrop-filter` blur except on fixed nav

---

## Design System Reference

Full Fatih Design System lives at:  
`C:\Users\Bilal\Downloads\Fatih Design System\`

Key files:
- `README.md` — brand overview, colour tokens, typography rules
- `colors_and_type.css` — all CSS custom property definitions
