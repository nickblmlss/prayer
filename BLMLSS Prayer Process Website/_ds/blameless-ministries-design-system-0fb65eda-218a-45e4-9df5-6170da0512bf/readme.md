# Blameless Ministries (BLMLSS) — Design System

Blameless Ministries Inc. is a prayer, deliverance and discipleship ministry. Its north-star statement, used verbatim as the homepage hero: **"Blameless Ministries is preparing the Bride of Christ for Jesus' return."**

The ministry pursues that mission through three named pillars, and one canonical five-step service offering.

**Three pillars** (exact site headings):
1. Discipleship, Equipping & Activation — flame illustration, warm tan/sand
2. Freedom & Healing through Prayer — crossed swords illustration, deep teal
3. Becoming Catalysts for Freedom & Revival — lily illustration, blush/rose

**The BLMLSS Prayer Process** (five steps, each with its own pastel numeral plate):
1. Connect with our Team — peach
2. Preparation and Pre-Work (Intake Form + Deliverance E-Course) — lavender
3. Renunciation Prayer Session — teal
4. Releasing Prayer Session — blue
5. Post Prayer: Ongoing support and community — green

## Products / surfaces represented

- **blmlss.com** — the public marketing site (Squarespace). Pages: Home, Prayer & FAQ, Giving, Contact, Our Board, Meet our Team, Statement of Beliefs, Prayer Team Only. This is the only surface with rendered content available, and it is the ground truth for this system.
- **blameless.church** — a second property owned by the ministry. **Not readable:** it renders as a JavaScript app and returns no content to automated fetching. Nothing in this design system is derived from it. If you want it folded in, send screenshots or the source.

## Sources used

| Source | Access | What was taken |
|---|---|---|
| https://blmlss.com (Home) | Fetched, rendered text + image URLs | Hero copy, three pillars, Scripture block, prayer CTA, footer, logo, illustrations, photography |
| https://blmlss.com/prayer | Fetched | Full five-step prayer-process copy, numeral plates, FAQ CTA |
| https://blameless.church | **Blocked** — JS app, no content returned | Nothing |
| `COLOR_CODES.pdf` (referenced in brief, not attached) | Not provided as a file | Hex values transcribed from the brief text |
| Webflow build brief (pasted by the founder) | Read | Brand voice rules, palette usage rules, layout/motion direction |

Assets in `assets/` were downloaded directly from the live blmlss.com CDN, so they are the real files, not recreations. They arrived WebP-encoded from the CDN and are stored with `.webp` extensions.

---

## CONTENT FUNDAMENTALS

**Person and posture.** First-person plural for the ministry, second person for the reader: "**We** walk followers of Jesus through the BLMLSS Prayer Process," "Before **your** prayer session, **you** will…". Never "I." Never third-person institutional voice ("Blameless Ministries offers…") except in the single mission statement, where the full name carries weight: "Blameless Ministries is preparing the Bride of Christ for Jesus' return."

**Register.** Reverent but plain. Theological vocabulary is used without apology or explanation — *deliverance, renunciation, strongholds, unclean spirits, Holy Spirit, the Bride of Christ, spiritual authority, blameless before the Lord*. Note the site's usage: "**Holy Spirit**" without a definite article ("by the power of Holy Spirit," "an encounter with Holy Spirit in tangible ways"). Match that.

**Declarative, never hedged.** "Deliverance as demonic strongholds are broken and unclean spirits leave." No "we believe some people experience…", no "may help you." Statements of what God does are made flatly.

**Trauma-aware framing.** Invitations are always opt-in and pressure-free: "you are welcome (but not required) to explore the following opportunities as you feel led." Conditional openings give the reader an exit: "If God has shown you He has more healing, freedom and breakthrough for you, we invite you to connect with us!"

**Section headers are active and ministry-flavored,** not utility labels:
- "Connect with our Team" — not "Contact Us"
- "Want BLMLSS prayer?" — not "Get Started"
- "How we pursue this:" — not "Our Approach"
- "Our prayer process:" — not "Services"
- "Still have questions about prayer?" — not "FAQ"

**Sentence shape.** Body copy runs medium-length with serial detail and ampersands inside noun phrases: "hope, healing & transforming power of Jesus," "Discipleship, Equipping & Activation." The ampersand is a house habit in headings and pillar names; spell out "and" inside running sentences.

**Bolding does the scanning work.** In step lists, the lead term is bold and the explanation follows after a colon: "**Complete our Intake Form**: Examine your generational and personal history to reveal areas out of alignment with the Kingdom of God." Keep that pattern; it is the site's dominant list form.

**Casing.** Sentence case for headings and pillar names. ALL-CAPS is reserved for three things: the wordmark, small utility labels and buttons ("WANT PRAYER?", "CONTACT US"), and Scripture citations ("1 THESSALONIANS 5:23"). Never all-caps a full sentence.

**Scripture.** Quoted in the display serif inside curly quotes, with the citation set beneath in tracked-out small caps. Canonical example:
> "Now may the God of peace himself sanctify you completely, and may your whole spirit and soul and body be kept blameless at the coming of our Lord Jesus Christ."
> **1 THESSALONIANS 5:23**

**Endings.** Sections close with a forward-facing invitation, not a summary: "Our goal is to see you blameless before the Lord, equipped to fulfill His purpose for your life." / "Contact our team to find out more about our prayer process and get started on your journey."

**Emoji: never.** None appear anywhere on the site. The only non-alphabetic mark in use is the ◆ diamond, used as a separator in the running ticker ("2,584 HOURS PRAYED ◆").

**Words to avoid:** "your truth," "the universe," "energy," "community group," "life group," "weekend service," "the ask," and any hedging ("some believe," "might," "can help you").

---

## VISUAL FOUNDATIONS

**Overall vibe.** Warm, quiet, editorial. A cream page with large amounts of empty space, one or two soft pastel blocks per screen, and a high-contrast serif doing all the emotional work. It reads closer to a small-press book jacket than to a church website.

**Color.** One warm neutral carries the page: cream `#F7F3ED` is the background everywhere, with sand `#EEE6DB` and white for card surfaces. Every other colour is a soft dusty pastel used as a *block* — a full-width or half-width panel behind a pillar, a step, or a Scripture quote — not as a tint on text. Saturated members of the palette (apricot `#FFB88F`, dusty rose `#EEADB7`, light violet `#C8B8E4`) are reserved for CTAs, Scripture callouts and hover states. Each pillar and each prayer step owns one colour, so the palette carries meaning rather than decoration. Text is near-black `#1E1B16`; several pastels are too light to carry white text, so always test against cream instead of assuming.

**Type.** Display is **Prata** — a high-contrast Didone-adjacent serif that matches the character of the BLMLSS wordmark. Set large (44–88px), regular weight only, line-height 1.12–1.22, slight negative tracking. Body is **Source Sans 3**, a humanist sans, 17px at 1.65 line-height, quiet and unstyled. Utility text (eyebrows, Scripture citations, button labels) is Source Sans 3 uppercase at 12px with 0.18em tracking. Serif for statements, sans for everything else — never a serif paragraph.

**Layout.** Generous vertical rhythm: sections are 72–160px tall in padding alone. Full-width editorial blocks are the default; two-column splits appear only for imagery or a Scripture pull-quote. Heroes are asymmetric — image offset to one side, statement crossing into the negative space — rather than centred text over a photo. Maximum content width 1240px; prose measures cap at ~64ch. Avoid card grids of more than three items.

**Backgrounds.** Three kinds only: flat cream, a flat pastel panel, or full-bleed photography. No gradients, no repeating patterns, no textures, no noise overlays.

**Imagery.** Cool, muted, low-saturation. Two families: soft nature photography (overcast skies, clouds, crescent moon, pink-grey light) and documentary moments of prayer and conversation, shot warm and slightly desaturated with shallow depth of field. Never bright, never high-contrast, never corporate stock-smiling. Full-bleed treatment preferred over inset thumbnails.

**Illustration.** The ownable asset: flat single-colour silhouettes (flame, crossed swords, lily) on a solid pastel square, drawn tone-on-tone — a saturated ground with a lighter figure of the same family. No outlines, no strokes, no shading. Numerals for the prayer process follow the same rule: an oversized numeral in a lighter tone on a saturated plate of the same hue.

**Corner radii.** Near-square. Buttons and cards use 4–6px; pills (999px) only for small utility chips. Images and pastel panels are square-cornered, radius 0.

**Cards.** White or sand on cream, radius 6px, one hairline border `rgba(30,27,22,.15)` or a very soft shadow — never both heavy. Shadows are wide and faint (`0 8px 28px rgba(30,27,22,.06)`); there is no elevation ladder beyond card and raised.

**Borders and dividers.** Hairline rules at 1px in ink-15 or tan; full-width horizontal rules separate editorial sections. No colored left-border accent cards.

**Motion.** Slow fade-and-rise on scroll: 16px translate, 640ms, `cubic-bezier(.16,.84,.44,1)`. Hovers are 160ms. No parallax, no bounce, no spring, no confetti. One exception on the live site: a slow horizontal marquee ticker ("2,584 HOURS PRAYED ◆"), constant speed, no easing. Reduced-motion is respected globally.

**Hover states.** Ink buttons darken slightly (`#332E26`); apricot buttons darken to `#F5A87C`; text links move from slate blue to ink and the underline picks up currentColor. Images do not zoom. Never use opacity fades for hover on interactive controls.

**Press states.** Colour shift only — one further step darker. No scale, no shrink, no shadow change.

**Focus.** 2px `#C8B8E4` (light violet) ring at 3px offset, always visible; never removed.

**Transparency and blur.** Effectively unused. Text over photography sits on the photograph directly, chosen for a calm area of the frame, or over a solid pastel block. If a scrim is unavoidable use a flat `rgba(30,27,22,.28)` wash — never a gradient scrim, never a frosted-glass capsule.

**Fixed elements.** The header is the only fixed/sticky element: cream, hairline bottom rule, wordmark left or centred, four to five uppercase links. No sticky CTAs, no floating buttons, no cookie-style bars.

---

## ICONOGRAPHY

**There is no icon font and there are no icon SVGs on the source site.** BLMLSS's icon language is its illustration set: flat PNG silhouettes exported from Illustrator, one per concept, each on its own pastel plate. Those real files are in `assets/`:

- `illus-flame.webp` — Discipleship, Equipping & Activation (sand figure on tan)
- `illus-swords.webp` — Freedom & Healing through Prayer (dusty blue figure on deep teal)
- `illus-lily.webp` — Becoming Catalysts for Freedom & Revival (rose on blush)
- `num-1-peach.webp` … `num-5-green.webp` — the five prayer-process numeral plates

Use these as-is. **Do not redraw them**, do not trace them into SVG, do not add outline versions.

**For interface icons** (chevrons, close, menu, arrows) the source site provides none. Use **Lucide** from CDN at 1.5px stroke, `currentColor`, 20px — the closest match to the brand's thin, geometric, unfussy line quality. This is a **flagged substitution**: it is not a BLMLSS asset. If the ministry has an official UI icon set, replace it.

**Unicode as icon:** the ◆ diamond (U+25C6) is a genuine brand mark, used as the separator in the hours-prayed ticker. It is the only character used decoratively.

**Emoji: never.**

**Logo.** `assets/logo-cream.webp` is the real BLMLSS wordmark — a high-contrast serif with overlapping ligature-like letterforms, supplied in cream. It therefore needs a dark or mid-tone ground (ink, deep teal, or a photograph). `assets/icon-circle.webp` is the circular mark used as the favicon/social image. **No ink-on-cream version of the wordmark was available for download** — where the mark must sit on the cream background, either place it on an ink block or set the word "BLAMELESS" in Prata, tracked out. Ask the ministry for the full logo lockup pack.

---

## Index

**Root**
- `styles.css` — the entry point; `@import` list only. Consumers link this one file.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper.
- `thumbnail.html` — the system's tile.

**Tokens** (`tokens/`): `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`

**Assets** (`assets/`): wordmark, circle mark, three pillar illustrations, five numeral plates, six photographs, three woff2 webfonts under `assets/fonts/`

**Components** (`components/core/`): `Button`, `Eyebrow`, `SectionHeading`, `PillarCard`, `ProcessStep`, `ScriptureQuote`, `Field`, `PrayerRequestForm`, `SiteHeader`, `SiteFooter`, `Ticker`
Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; the group's specimen is `components/core/core.card.html`.

**Guidelines** (`guidelines/`): the foundation specimen cards rendered in the Design System tab — colour, type, spacing, motion, illustration.

**UI kit** (`ui_kits/website/`): a click-through recreation of blmlss.com — Home and the Prayer & FAQ page. Entry: `ui_kits/website/index.html`.

### Intentional additions
- **Ticker** — the running "2,584 HOURS PRAYED ◆" marquee exists on the live homepage but had no name; it is componentised so it can be reused.
- **Field / PrayerRequestForm** — the live "Want Prayer" form is a Squarespace block with no exposed markup. The component reproduces its visible fields and label style only.
