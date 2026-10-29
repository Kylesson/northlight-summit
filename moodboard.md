# Moodboard: Northlight Summit (concept project)

## Assumptions (brief gives sections, not brand details)
- **Name:** "Northlight Summit" is too close to two real events: Northern Light Summit (Helsinki, invite-only business convention since 2002) and Northlight Theatre's Speak Up Summit. I proposed Crossfade Summit. **Decided 2026-10-29: keep "Northlight Summit"** (user's call). The visual idea stays "crossfade": the Design and Code tracks overlap. Brand name stays in Latin in RU, as is normal for tech brands. The footer disclaimer makes clear it is fictional and not related to any real event.
- **Date and place:** Saturday 17 April 2027, 09:30-19:00, Riga. A real city with a large EN and RU tech audience, so the bilingual page makes sense. Venue is fictional ("Depot 7, Old Rail Yard") and labelled fictional in the footer.
- **Prices (concept only):** Early €89 · Standard €149 · VIP €290. A "Selling fast" tag on Standard is styling only, with no counter and no number.
- **Speakers:** 6 invented names, own-made initial avatars (SVG), no photos.
- **Footer** carries "Concept project. Fictional event, fictional people. Form does not submit."
- No `offer.md`. This is a portfolio piece with a fixed section list, so I skipped `/sell-page`. The page story below comes from the brief.

## Strategy
- **Offer:** no offer.md. Main action: Register (ticket form on the page).
- **Business / library category:** 1-day design-and-tech conference → `events`.
- **Visitors (who, device, mood):** two audiences. (1) In the story: designers and front-end devs, 24-40, who tap a Telegram or Instagram link on a phone. In about 20 seconds they want to know when, where, how much and "will this be worth a Saturday", and they may need to convince a boss. (2) In reality: Fiverr buyers scanning a portfolio thumbnail and then the live page on a laptop. They judge whether this seller can make their event page. So the page must look like a real event brand at thumbnail size, and every functional part (countdown, tabs, form, toggle, FAQ) must visibly work.
- **Actions:** 1) Register (form) · 2) Switch EN/RU · 3) Pick a ticket tier (pre-fills the form).
- **Style directions:**
  - **A. Poster block (recommended):** a full saturated colour field, giant fitted section words, colour-blocked panels. *Why:* it reads as a design conference at thumbnail size, and the bold system shows design range to Fiverr buyers.
  - **B. Quiet editorial:** paper background, huge light-weight titles in a left column, content right, hairline rules. *Why:* premium and calm, and very readable for long RU strings. But it looks like many SaaS pages and is weaker as a thumbnail.
  - **C. Dark tech night:** near-black page, one neon accent, a dense timeline and price cards. *Why:* familiar to developers. But dark plus neon is the most common conference look, and it plays to code more than design.
  - **Recommended: A.** It has a distinct idea and layout from B and C, and it carries the "Crossfade" idea: the two track colours meet in the hero.
- **Translating vague wishes:** "design and tech, premium portfolio piece" means display text up to 6rem with tracking at -0.02em, low density (one idea per screen on mobile), motion limited to one load moment plus feedback states, and a nav that is just a top bar with the language toggle and a Register button.
- **Theme from use scene:** daytime phone and office laptop, so a bright saturated field. The whole page is one cobalt theme with paper-coloured panels, so there's no light/dark switching between sections.
- **Library coverage:** 6 `events` sites (after today's study). No cross-category borrowing.

**Brief:** bilingual (EN/RU) registration page for a fictional 1-day design-and-code conference · **Mood:** bold, playful, editorial · **Sources (3):** designmatters.io, 2027.uxlondon.com, reactsummit.com. Design Matters gives the poster system, UX London the friendly day/track cards and value-led ticket pitch, React Summit the functional price and speaker card structure. All three are colour-confident conference pages, so the parts sit together.

## Palette
| Role | Hex | Note |
|---|---|---|
| Field (page background) | `#2433D6` | cobalt, the "Code" colour; the whole page sits on it |
| Paper (panels, text on field) | `#F3EFE6` | warm off-white; on cobalt about 7.5:1 |
| Ink (text on paper, outlines) | `#17151F` | violet-tinted near-black, never pure #000 |
| Accent (CTA, Design track, focus) | `#E4FF3A` | acid yellow, the "Design" colour, the only accent; ink text on it |
| Muted (secondary text on paper) | `#4A4766` | tinted from ink; 8:1 on paper |

The crossfade idea: yellow (Design) and cobalt (Code) meet in the hero title. The two tracks use these two colours in the schedule. This is neither source's palette (DM is green/cream/navy, UXL is indigo/white/yellow; this is cobalt/paper/acid with a different role split).

## Fonts
- **Display:** Unbounded (Google, variable 200-900, has Cyrillic). A wide geometric face, so it's a remix of DM's condensed Anton, which has no Cyrillic anyway.
- **Text:** Onest (Google, has Cyrillic, designed for Latin and Cyrillic). Body 17px / 1.55.
- **zh-Hant:** n/a. Page languages are EN and RU per the brief.
- Both get self-hosted subset WOFF2 (Latin + Cyrillic only). Preload Unbounded. Weights: Unbounded 500/800, Onest 400/600.
- ui-ux-pro-max typography returned Barlow Condensed + Barlow and Space Grotesk + DM Sans. None of those has Cyrillic (checked against Google Fonts subsets), so I rejected them. Its colour and design-system queries returned a generic violet/orange SaaS palette and "Vibrant & Block-based": it agrees with direction A's style, but I didn't use its colours.

## Conversion anchor
- **Primary action:** Register, which jumps to the form; picking a ticket tier pre-selects it in the form.
- **Phone:** a sticky top bar (logo, EN/RU, yellow "Register"), plus a slim bottom bar "Register · from €89" that appears after the hero and hides when the form is on screen. ui-ux-pro-max UX check: keep the main CTA in the thumb zone and pad content so sticky bars don't cover it. The form section gets bottom padding equal to the bar's height.
- **Desktop:** Register in the top bar on every screen, plus a CTA in the hero and one in tickets. One label per intent: EN "Register", RU "Зарегистрироваться". The ticket buttons say "Choose Early" etc., which is a different intent.

## Sections
### 1. Top bar + Hero
- **Job:** answer what, when, where in 3 seconds and offer Register.
- **Element:** full-bleed hero with stacked display caps (what / city / date) and a full-width ticket bar.
- **Source:** designmatters.io, `designmatters.io/section-03-the-conference-about-digital-d.png`
- **Picked for:** the whole first screen reads like a poster, and the ticket bar is impossible to miss.
- **Breakdown:** (1) three stacked text lines of falling importance (title 2 lines, city, date) in one condensed face, so the eye drops straight down to the CTA; (2) the CTA spans the full width at the bottom of the viewport, so it's the floor of the composition; (3) the photo is atmosphere only, and all information is type.
- **Remix:** no photo. The field is cobalt, with a large yellow shape that crossfades into it (a CSS gradient mask, Design meeting Code). "NORTHLIGHT" is set in Unbounded 800, fitted to width, with "SUMMIT" smaller. Below it, a one-line promise (at most 12 words), then date and city as two small blocks, then a yellow Register bar. The top bar has the wordmark, an EN/RU segmented toggle and Register.
- **Motion:** the page's one authored moment. On load the yellow shape slides across the cobalt and the title is revealed with a `clip-path` wipe (0.9s, expo ease-out). CSS only. Reduced motion shows the final state.
- **Upgrade:** clarity: date, city and price-from all sit on the first screen at 390x650 (DM hides the date under the photo). Conversion: the Register bar stays above the fold at 390x650. Speed: no hero photo, so LCP is the text.

### 2. Countdown
- **Job:** make the date feel close; a second chance to register.
- **Element:** original, no reference (the libraries have no countdown pattern worth borrowing).
- **Breakdown:** n/a, original.
- **Remix:** 4 paper tiles (days / hours / minutes / seconds), big Unbounded numbers with `tabular-nums`, labels in Onest. After the event date it switches to "This edition has ended" instead of showing negative numbers. Vanilla JS, one `setInterval`.
- **Motion:** only the seconds digit changes, with no flip animation (motion must mean something, and a ticking flip is noise).
- **Upgrade:** accessibility: the visible ticker is `aria-hidden`, and a polite live region announces only the days, not every second. RU plural forms are handled properly (1 день, 2 дня, 5 дней), which shows real localization skill.

### 3. Why attend (3 outcomes)
- **Job:** answer "is it worth my Saturday" with results, not features.
- **Element:** a giant fitted section word followed by content.
- **Source:** designmatters.io, `designmatters.io/section-05-themes.png`
- **Picked for:** one huge word per section makes a long page easy to scan, and it's the poster system's signature.
- **Breakdown:** (1) the word fills the full width at one size (fitted), so it works as a divider and a heading at once; (2) high contrast, single colour, no decoration; (3) content starts right below it, so the word frames the section.
- **Remix:** the words are WHY / SCHEDULE / SPEAKERS / TICKETS / VENUE (RU: ЗАЧЕМ / ПРОГРАММА / СПИКЕРЫ / БИЛЕТЫ / МЕСТО), fitted in JS with a CSS clamp fallback, in paper on cobalt. The outcomes are 3 paper panels, numbered visually by a large outline numeral, not "01 /" labels. Each is a result sentence (for example "Leave with a design-to-code handoff your team can use on Monday").
- **Motion:** none.
- **Upgrade:** RU words are long ("ПРОГРАММА" is 9 letters), so fitting is per language and re-run when the toggle switches. Section words are real `h2`s for a11y.

### 4. Schedule (2 tracks)
- **Job:** show what happens and when; let people pick a track.
- **Element:** day/track cards with a calendar-tile header.
- **Source:** 2027.uxlondon.com, `2027.uxlondon.com/el-hero-day-cards.png`
- **Picked for:** the clearest "what happens when" pattern in the library: theme name, a one-line purpose and a time tile per card.
- **Breakdown:** (1) each card leads with a theme name plus a one-line purpose ("Building the right thing"), so people pick by intent; (2) the date tile is a separate small block in the corner, scannable without reading; (3) white cards on a saturated field make each card read as an object.
- **Remix:** two track headers ("Design: from idea to interface" in a yellow tile, "Code: from interface to production" in a paper tile) followed by 9 slots. Each slot shows the time in a small tile, the talk title, the speaker and the track colour edge as a full background tint, not a border-left. Shared slots (keynote, lunch, closing) span both tracks. **Desktop:** two columns on a shared time axis. **Phone:** tabs (Design / Code / All), keyboard accessible (arrow keys, `role="tablist"`).
- **Motion:** the tab panel crossfades at 200ms (state change).
- **Upgrade:** clarity: shared slots spanning both columns show at a glance when the tracks split and rejoin, which UXL's day cards can't show. Accessibility: the ARIA tabs pattern works with arrow keys.

### 5. Speakers (6)
- **Job:** prove the day has real substance (here, believable fictional people).
- **Element:** speaker cards: image, caps name, company and country, clamped bio.
- **Source:** reactsummit.com, `reactsummit.com/section-06-first-speakers-trainers-2027.png`
- **Picked for:** a tight info order (face, name, where from, what about) that works in a 3x2 grid or a single column.
- **Breakdown:** (1) a square image on top, so the grid stays even; (2) the name in heavy caps is the second-strongest element; (3) bio clamped to 3 lines keeps cards the same height.
- **Remix:** own-made SVG avatars: initials in Unbounded over two overlapping circles in yellow and paper, cropped differently per person (not plain initials in a circle). No social icons, since these people are fictional. Each card adds the talk title and track chip, and the bio is a single line. Grid 3x2 on desktop, 2x3 at 768, 1 column at 390.
- **Motion:** none.
- **Upgrade:** no fake socials or fake companies (made-up studio names, marked fictional). Bio text uses Muted on paper at 8:1, unlike React Summit's grey-on-black bios.

### 6. Tickets (Early / Standard / VIP)
- **Job:** make the choice easy and send people to the form with the tier picked.
- **Element:** 3 price cards (tier name, big price, bullet list) with a value-led pitch line.
- **Source:** reactsummit.com, `reactsummit.com/section-12-prices.png` (card structure) + 2027.uxlondon.com, `2027.uxlondon.com/section-01-join-us-for-all-three-days-and.png` (value pitch, boss link)
- **Picked for:** RS's huge price and short list makes comparison instant; UXL's one-line "convince your boss" handles the real objection.
- **Breakdown:** (1) the price is the biggest element on the card, and the tier name sits small above it; (2) a short include list of 5-7 bullets; (3) UXL: one sentence of value plus a link answering the boss objection, in normal body size.
- **Remix:** 3 paper panels. Standard is raised and inverted (ink panel, paper text) with a yellow "Selling fast" tag (styling only, no number). Each card has its own button ("Choose Early" and so on) that scrolls to the form and pre-selects the tier. Under the cards, one line: "Need approval? Download a one-paragraph note for your manager" (a mailto-free copy-to-clipboard text, so no external contact).
- **Motion:** button press feedback only.
- **Upgrade:** conversion: the tier button pre-fills the form, so there's one less choice. Prices use `tabular-nums`. No strike-through fake discounts.

### 7. Registration form
- **Job:** complete the action with zero confusion.
- **Element:** original, no reference (the library's forms are newsletter sign-ups).
- **Breakdown:** n/a, original.
- **Remix:** one paper panel, single column even on desktop (max 560px), next to a summary card (the chosen tier and price, updates live). Fields: full name, email, ticket type (3 radio cards, not a select), dietary need (select: None / Vegetarian / Vegan / Gluten-free / Other, and "Other" reveals a text field), consent checkbox. Validation runs on blur and on submit, with messages under each field in both languages, `aria-invalid` and `aria-describedby`, and focus moves to the first error. On success the panel swaps to a confirmation with name, tier and a fake reference code made client-side, labelled "Demo: nothing was sent".
- **Motion:** the success state reveals with a `clip-path` wipe (state change).
- **Upgrade:** RU error messages are written, not machine-translated. Tap targets are 48px. `autocomplete` attributes are set. Nothing is stored or sent.

### 8. Venue
- **Job:** show where it is and how to get there.
- **Element:** original, no reference (no static map pattern in the library).
- **Breakdown:** n/a, original.
- **Remix:** a hand-made SVG map: a stylised river, rail lines and street grid in paper strokes on cobalt, and a yellow venue pin. Beside it: address (fictional), 3 lines on getting there (tram, rail, parking), opening time.
- **Motion:** none.
- **Upgrade:** no Google embed means no third-party cookies and about 600 KB saved. The map is decorative (`aria-hidden`), and the address is real text.

### 9. FAQ + footer
- **Job:** answer the last doubts (refunds, transfer, language of talks, accessibility, recordings, invoices).
- **Element:** original, no reference. Stripe Sessions has a good ruled FAQ, but it would make a 4th source. Built on native `<details>`/`<summary>`, so it's keyboard accessible for free. Thin paper rules, and the circular plus icon rotates to a cross.
- **Breakdown:** n/a, original pattern.
- **Remix:** 6 questions. The footer has the wordmark, date, city and the concept disclaimer.
- **Motion:** the icon rotates on open (state).
- **Upgrade:** "Are talks in English or Russian?" is answered directly, since that's the real question for this audience.

## Motion & performance
- **Decided 2026-10-29: no Lenis, no GSAP** (user approved breaking the long-page house rule for this page). The page has one load moment and a few state changes, all doable in CSS/WAAPI. Lenis gets in the way of form scrolling and focus-on-error. Dropping both saves about 70 KB of JS toward the Lighthouse 90+ mobile target. Say if you want the house rule instead.
- **Phones:** the same as desktop (nothing heavy to remove). Fitted words are computed once per resize and per language switch.
- **Reduced motion:** no hero wipe, no tab crossfade; all states are instant.
- **Weight budget:** at most 250 KB total on first load (HTML+CSS+JS under 60 KB, 2 subset WOFF2 fonts about 90 KB, SVGs inline). No raster images.

## Language toggle
- EN/RU segmented control in the top bar (the remixed idea from DM's visible theme dots). Sets `<html lang>`, saved to localStorage in try/catch, defaults to the browser language when nothing is saved. All copy lives in one `i18n` object `{en:{…}, ru:{…}}`, and elements carry `data-i18n="key"`. All RU strings get listed in NOTES.md as "needs native proofread".
