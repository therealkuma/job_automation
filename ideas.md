# Design Direction: Apply — Join Our Team

## Three Initial Directions

### Theme Name: Paper Trail
Very Brief Intro: A warm editorial application experience inspired by tactile paper, annotated margins, and careful typography. It should feel calm, credible, and human without looking corporate.
Probability: 0.07

### Theme Name: Quiet Signal
Very Brief Intro: A restrained monochrome interface with a single vivid signal color and a narrow, almost architectural layout. It should make the application feel focused, direct, and easy to complete.
Probability: 0.03

### Theme Name: Soft Utility
Very Brief Intro: A light, functional system built around quiet color blocks, generous whitespace, and crisp form controls. It should feel approachable and contemporary while keeping the task frictionless.
Probability: 0.09

## Chosen Direction: Paper Trail

### Design Movement
Contemporary editorial minimalism with references to Swiss print systems, uncoated stationery, and independent studio portfolios. The experience is intentionally composed rather than dashboard-like: an open page, a clear handoff, and one confident next step.

### Core Principles
1. **Make the next action unmistakable.** Every section should point toward the application handoff without competing with it.
2. **Let typography do the organizing.** Strong typographic hierarchy replaces decorative UI chrome and keeps the page legible at a glance.
3. **Use warmth as trust.** Cream paper, graphite ink, and a precise vermilion accent make the process feel personal and deliberate.
4. **Keep utility visible.** File type guidance, expected completion time, and a clear Google Form handoff reduce uncertainty before the click.

### Color Philosophy
The base is a warm paper tone rather than stark white, making the page feel considered and approachable. Graphite provides the editorial ink and keeps long copy soft but readable. A vermilion-orange accent functions like a hand-marked editorial note: it appears only where attention or action is required, so the call to apply feels like a deliberate signal rather than a generic button.

### Layout Paradigm
Use a left-anchored reading rail with an offset application card that enters from the right on larger screens. The page should feel like a single sheet with a margin system: a small running header, an oversized headline, a concise explanation, then a structured checklist and one handoff card. On mobile, the rail collapses into a linear reading order with the card immediately after the action statement.

### Signature Elements
- A thin vermilion vertical rule that marks the application journey and repeats as a small accent in the form card.
- A running header with a compact mark, section label, and a quiet “2–3 min” completion cue.
- Paper-like surfaces with subtle grain, hairline borders, and offset shadow rather than rounded dashboard cards.

### Interaction Philosophy
Interactions should feel like handling a well-made form: buttons respond with a small press and a shift in weight, focus states are visible as vermilion underlines, and the resume drop zone becomes slightly warmer when active. The Google Form handoff should open in a new tab so the applicant never loses the context of the application page.

### Animation
Entrance motion is a restrained paper reveal: the main rail fades in and translates upward 12px, then the application card follows with a 60ms delay. Hover transitions stay under 220ms and move only opacity, color, border, or transform. The accent rule can extend a few pixels on hover, but no element should bounce or loop. Respect `prefers-reduced-motion` by removing entrance transforms and keeping only essential state transitions.

### Typography System
Use **DM Serif Display** for the main headline to give the page a memorable editorial voice, paired with **DM Sans** for body copy, labels, and action text. Headline scale is large and tightly set on desktop, with a readable 1.15 line-height; body copy stays around 1rem with generous line-height; uppercase metadata uses small tracking and a slightly heavier weight. Avoid Inter and default browser typography.

### Brand Essence
Apply — Join Our Team is a focused application doorway for thoughtful candidates who want a clear, respectful first step; it is different because it treats the application like a considered editorial invitation rather than a generic recruiting portal.

Personality adjectives: **considered, warm, direct**.

### Brand Voice
Headlines are concise and quietly confident. CTAs are verbs with a clear destination. Microcopy anticipates practical questions without sounding apologetic or over-explaining.

Example lines:
- “Bring your point of view.”
- “A short form. A clear next step.”

### Wordmark & Logo
The mark is a compact open-square symbol with one missing corner, suggesting an unfinished page that becomes complete when a candidate enters it. It should be drawn as a bold, text-free graphic symbol and used beside the wordmark, never replaced by a generic text logo.

### Signature Brand Color
**Vermilion note — `#E65336`**. It is warm enough to feel human, saturated enough to guide attention, and distinctive against the paper-and-graphite system.

### File-Level Design Reminder
Keep this direction visible while editing: contemporary editorial minimalism; warm paper background; graphite ink; vermilion note accent; left reading rail plus offset form card; DM Serif Display + DM Sans; hairline borders and restrained motion; no excessive rounded cards, gradients, or centered dashboard layouts.
