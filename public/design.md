# Farming Labs Design System

Agent-readable design direction for `farming-labs.dev`.

Last updated: 2026-06-18

This file is the public design contract for Farming Labs. It is written for AI coding agents, design agents, and contributors who need to generate or refine UI for the Farming Labs ecosystem without guessing the product tone, component grammar, or interaction standards.

The file is based on the local Farming Labs `design-engineer` skill bundle and the current `farming-labs.dev` Next.js app. Treat it as a practical source of truth for visual design, component behavior, copy rhythm, and verification.

## Product Role

Farming Labs is a small technical product lab for JavaScript tools. The public site should feel like a sharp, experimental workshop: compact, developer-native, a little glitchy, but still readable and useful.

Primary job:

- Introduce the Farming Labs ecosystem.
- Point developers to active projects and docs.
- Make packages, docs, GitHub links, and install paths easy to discover.
- Carry a recognizable visual identity across docs, package pages, showcases, and community surfaces.

The homepage is allowed to feel more atmospheric than a normal docs app, but product proof must stay visible. The strongest Farming Labs UI pattern is: brand signal first, then package list, docs link, GitHub link, and concrete technical affordances.

## Ecosystem Map

Use these as the current public product surfaces unless the codebase changes.

| Product | Role | Primary URL |
| --- | --- | --- |
| `@farmjs/core` | Meta-framework with performance-oriented DX and intuitive APIs. | `https://farmjs.dev` |
| `@farming-labs/docs` | Docs framework and AI-native documentation surface. | `https://docs.farming-labs.dev` |
| `@farming-labs/orm` | Unified DSL schema, typed runtime, and generator-first ORM tooling. | `https://orm.farming-labs.dev` |
| `@farming-labs/mini-dev` | Lightweight dev server experiment. | `https://github.com/farming-labs/mini-dev` |
| `farm-ui` | UI library and component registry surface. | `https://farmui.com` |
| `@farming-labs/befter` | Lightweight before/after hook package for server and client workflows. | `https://github.com/farming-labs/befter` |

When creating new pages, avoid treating Farming Labs as a single package. It is an ecosystem. Use package names, URLs, GitHub links, install commands, API examples, or docs paths as proof.

## Design-Engineer Skill Contract

Farming Labs uses the `design-engineer` skill as its design-engineering baseline. The skill is an end-to-end frontend workflow for React, Next.js, Vite, docs sites, dashboards, product websites, component libraries, and design systems.

For the reusable `design-engineer` skill, use the public repo at `https://github.com/farming-labs/design-eng-skills`.

Install from the GitHub repo:

```bash
npx skills add farming-labs/design-eng-skills --skill design-engineer
```

Codex-targeted install:

```bash
npx skills add farming-labs/design-eng-skills --skill design-engineer --agent codex --yes
```

Full GitHub URL form:

```bash
npx skills add https://github.com/farming-labs/design-eng-skills --skill design-engineer
```

Or install directly in Codex with:

```text
$skill-installer install https://github.com/farming-labs/design-eng-skills/tree/main/design-engineer
```

Restart Codex after installing so the `design-engineer` skill is discovered.

Distilled rules from the skill:

- Inspect the app first. Preserve local stack choices, primitives, and tokens.
- Structure first: use borders, rails, grids, gutters, separators, corner ticks, dotted underlines, and inset markers to create layout logic.
- Primitives first: compose from reusable buttons, inputs, dialogs, command/search, copy controls, tabs, docs components, and cards before writing one-off markup.
- Dense but calm: docs and dashboards should feel immediately useful without becoming crowded.
- Proof over decoration: show install commands, snippets, package names, routes, API examples, docs links, GitHub links, terminal output, or live status.
- Mono as utility: use monospace for commands, package names, paths, shortcuts, labels, status, and technical metadata.
- Motion with purpose: hover, press, focus, copy confirmation, loading, status, and restrained ambient motion are acceptable; decorative motion should not slow expert workflows.
- Verify in browser at desktop and mobile sizes after meaningful UI work.

## Current Stack

Design work should fit this app, not an imagined rewrite.

- Framework: Next.js 15 App Router.
- UI: React 19, Tailwind CSS, Radix primitives, shadcn-style local primitives.
- Styling helpers: `cn(...)`, `clsx`, `tailwind-merge`, `class-variance-authority`.
- Icons: `lucide-react` for normal UI actions.
- Motion: CSS/Tailwind keyframes and `motion`.
- Fonts: Space Grotesk as the main sans via `--font-geist-sans`, Geist Mono via `--font-geist-mono`, VT323 pixel font via `--font-pixel`.
- Docs: MDX content under `contents/docs`, custom markdown components, route config, sidebar/search.
- Analytics: Vercel Analytics and Databuddy.

Important local files:

- `app/_components/home-gradient.tsx`: homepage visual scene.
- `app/_components/hero-typewriter.tsx`: homepage product list and tone.
- `components/header.tsx`: sticky nav, mobile menu, search, social links, theme.
- `components/search.tsx`: docs command/search dialog.
- `components/ui/button.tsx`: button variants and sizing.
- `components/bordered-container.tsx`: rail/corner container pattern.
- `components/markdown/pre.tsx`: code block frame and copy affordance.
- `components/markdown/copy.tsx`: copy confirmation pattern.
- `lib/routes-config.ts`: docs navigation structure.
- `styles/globals.css`: semantic tokens and prose/code defaults.
- `tailwind.config.ts`: theme mapping, fonts, radius, animation names.

## Visual Theme

Farming Labs should feel technical, compact, monochrome, and slightly raw.

Core feeling:

- Dark workshop energy.
- High-contrast type.
- Pixel/glitch identity used sparingly.
- Package names and commands as design material.
- Structured docs surfaces with rails, borders, and copyable code.
- Yellow as a JavaScript/Farming accent, not a full palette.

Avoid generic SaaS polish. The site should not become a soft blue startup page, a gradient card stack, or a generic AI landing page. It should feel like a developer lab with working tools.

## Color

Use semantic Tailwind tokens first:

- `background`: page canvas.
- `foreground`: primary text.
- `muted` / `muted-foreground`: secondary panels and copy.
- `border`: structural lines.
- `primary` / `primary-foreground`: primary contrast actions.
- `secondary` / `accent`: quiet controls and hover states.
- `destructive`: destructive states.

Current CSS token anchors:

- Light background: `hsl(0 0% 100%)`.
- Light foreground: `hsl(20 14.3% 4.1%)`.
- Dark background: `hsl(240 10% 3.9%)`.
- Dark foreground: `hsl(60 9.1% 97.8%)`.
- Light border: `hsl(20 5.9% 90%)`.
- Dark border: `hsl(12 6.5% 15.1%)`.
- Primary dark ink: `hsl(24 9.8% 10%)`.

Useful raw accents already present:

- JavaScript yellow: `#f0db4f`.
- Homepage gray: `#7C7C7C`.
- Deep black: `#000000`, `#0A0A0A`.
- Zinc/stone grays through Tailwind.

Color rules:

- Keep the foundation neutral and high contrast.
- Use `#f0db4f` for package emphasis, JS signal, or a single word in a heading.
- Do not create a rainbow UI unless the content genuinely needs categories.
- Do not add another dominant purple/blue gradient language. Current experiments already include enough ambient color.
- State must not rely on color alone. Pair status color with text, icon, border, or structure.

## Typography

Font roles:

- Main UI and body: `font-regular` using `--font-geist-sans` mapped to Space Grotesk.
- Technical text: `font-code` using Geist Mono.
- Brand/glitch/pixel headings: `font-pixel` using VT323.

Type rules:

- Use `font-pixel` for strong brand moments such as "Farming Labs", showcase headlines, and special community moments.
- Use `font-code` for package names, commands, URLs, shortcuts, labels, metadata, and status.
- Use normal sans for longer explanations.
- Keep hero-scale text reserved for real hero surfaces.
- Compact panels, nav, dialogs, cards, and docs controls should use tighter sizes.
- Avoid negative letter spacing. Current app often uses tracking-wide; keep labels readable.
- Never shrink text to hide layout problems. Reflow before reducing font size.

## Geometry, Borders, And Texture

Geometry should be mostly squared or lightly rounded.

Current radius:

- Base token: `--radius: 0.5rem`.
- `rounded-md` is common for controls.
- `rounded-none` is used for sharper framed surfaces.
- `rounded-full` is reserved for dots, avatars, and circular marks.

Structural language:

- 1px borders.
- Border rails on the x-axis.
- Corner ticks.
- Dotted/dashed underlines.
- Thin separators.
- Grid or pixel texture behind content.
- Hard contained surfaces instead of soft floating cards.

Cards are allowed for repeated packages, docs features, widgets, and modals. Avoid cards inside cards. Use separators or internal headers instead.

## Layout Rules

Homepage:

- First viewport must clearly say "Farming Labs".
- Show the ecosystem list early.
- Keep package names clickable.
- Keep the GitHub path visible.
- Use atmospheric background only behind content. Content remains the priority.

Docs:

- Keep the sidebar, current page, search, code examples, and next/previous flow easy to scan.
- Put real examples close to the top.
- Code blocks need visible boundaries, copy buttons, and horizontal overflow safety.
- Search results need titles and paths that match the docs structure.

Showcase/community:

- Use stronger art direction here than in docs.
- Still include concrete project names, descriptions, GitHub links, and docs links.
- Make visual effects support discovery rather than hide it.

Responsive:

- Mobile should reflow, not merely shrink.
- Header/search/menu actions must remain reachable.
- Long package names and URLs may wrap, but should not clip.
- Use stable dimensions for toolbars, buttons, counters, and repeated cards.

## Component Guidance

### Buttons

Use the local `Button` primitive from `components/ui/button.tsx` when possible.

Current variants:

- `default`
- `destructive`
- `outline`
- `secondary`
- `ghost`
- `link`

Current sizes:

- `default`
- `sm`
- `lg`
- `icon`
- `xs`

Button rules:

- Primary actions use solid contrast or the established bordered/star treatment.
- Secondary actions are bordered or quiet.
- Icon buttons need accessible labels when the icon is the only visible content.
- Preserve button width during loading.
- Use lucide icons for search, copy, check, close, menu, GitHub/social-adjacent actions when appropriate.

### Navigation

Header language:

- Sticky top nav.
- Compact brand on the left.
- Docs, showcase, search, GitHub, social, and theme controls on desktop.
- Search and menu on mobile.
- Structural marker through borders, background blur, and corner ticks.

Navigation rules:

- Active route needs a visible marker, not color alone.
- Mobile menu must close after navigation.
- Search should remain accessible on mobile.
- External links need `target="_blank"` and `rel="noopener noreferrer"` where used.

### Search And Command

The docs search behaves like a lightweight command dialog.

Rules:

- Trigger with visible search input.
- Support keyboard open with `Ctrl+K` as currently implemented. If adding Mac-style text, write it as `Cmd+K` only if the handler supports it.
- Focus input on open.
- Show no-results state.
- Use route titles and docs hierarchy.
- Close on selection.

### Code And Copy

Code and copy are core Farming Labs affordances.

Rules:

- Code blocks use framed boundaries and corner ticks.
- Copy button uses lucide `CopyIcon` and `CheckIcon`.
- Copied state lasts about 2 seconds.
- Code remains selectable and horizontally scrollable.
- Install commands should be real, for example:

```bash
npm install @farming-labs/befter
```

### Cards And Package Lists

Package cards or list rows should include:

- Package/project name.
- Short concrete description.
- GitHub or docs link.
- Optional package manager install command.
- Optional status badge if the state is meaningful.

Good descriptions:

- "Lightweight before/after hooks for server and client workflows."
- "Unified schema DSL with typed runtime and generators."
- "Docs framework for AI-native technical documentation."

Weak descriptions:

- "Powerful toolkit."
- "Seamless solution."
- "Next-gen experience."

### Docs Callouts

Callouts should be concise and operational.

Use callouts for:

- Installation gotchas.
- API constraints.
- Version notes.
- Security warnings.
- Migration notes.
- Cross-package links.

Do not use callouts as decoration.

## Interaction Rules

Every interactive element needs:

- Hover state where pointer hover exists.
- Focus-visible state.
- Pressed/active feedback where relevant.
- Disabled state when unavailable.
- Loading state for async actions.

Copy interactions:

- Confirm near the copied control.
- Do not replace the copied value with confirmation text if it causes layout shift.

Forms:

- Use labels, not placeholder-only fields.
- Show errors near fields.
- Prevent duplicate submission while pending.

Dialogs:

- Use Radix primitives.
- Trap focus.
- Restore focus on close.
- Close on escape unless closing would lose destructive work.

Empty/error states:

- Empty: name what is missing and provide the next useful action.
- Error: say what failed and offer retry or recovery.
- Success: confirm near the action.

## Motion And Effects

Existing identity includes:

- Animated grain/gradient homepage scene.
- Glitch text bursts.
- Typewriter intro.
- Flickering grid and pixel trail on showcase.
- Accordion animations.

Motion rules:

- Hover/focus transitions: 120-180ms.
- Press/tap feedback: 80-140ms.
- Dialog/menu entrance: 140-220ms.
- Avoid `transition-all` for new work. Prefer explicit `transform`, `opacity`, `background-color`, or `border-color`.
- Do not slow command/search, row actions, or repeated expert interactions with decorative animation.
- Gate hover-only motion for touch devices when adding custom CSS.
- Add `prefers-reduced-motion` handling when introducing new ambient or continuous motion. The current audit found no reduced-motion handling, so new motion should improve that baseline.

Effects rules:

- Existing ambient scenes are enough for the brand surface.
- Do not add more decorative blur/orb layers unless replacing an existing effect.
- Use grid, grain, pixel, rail, and corner language before glow.
- Animated backgrounds must sit behind content and never block pointer interaction.

## Icon Rules

Default icon set: `lucide-react`.

Use lucide for:

- Search
- Copy
- Check
- Menu
- External link
- Arrow
- Terminal
- Command
- File
- Theme
- Warning/info/status

Rules:

- Import named icons directly from `lucide-react`.
- Keep one icon size scale per toolbar or row.
- Align icons optically with text baselines.
- Use official brand SVGs or existing brand icons for logos.
- Use custom pixel icons only when the surface intentionally leans into the pixel identity.

## Content Voice

Voice:

- Technical.
- Direct.
- Slightly playful.
- Developer-native.
- Concrete over polished.

Good Farming Labs copy:

- "JS needs a dopamine boost. So we started fixing it."
- "Fixing & shipping."
- "A lightweight hook on your server and client."
- "Unified DSL schema. Many outputs."

Copy rules:

- Prefer package names, APIs, and commands over abstract benefits.
- Keep headings short.
- Keep labels in mono where they behave like metadata.
- Avoid generic words such as "seamless", "powerful", "beautiful", and "revolutionary" unless backed by a concrete feature.
- Preserve the lab tone, but keep docs clearer than the homepage.

## Accessibility

Required:

- Semantic landmarks for page structure.
- Keyboard access for nav, search, dialogs, copy buttons, and menus.
- Visible focus-visible states.
- Sufficient contrast in light and dark modes.
- `aria-label` for icon-only controls.
- `sr-only` text for animated or visual-only headings when needed.
- No text hidden behind effects.
- No clipped package names or buttons on mobile.

Motion accessibility:

- Respect reduced motion for new continuous animations.
- Do not rely on motion alone to communicate state.

## Implementation Workflow For Agents

Before a UI change:

1. Read this file.
2. Inspect the route/component being changed.
3. Inspect local primitives before making new ones.
4. If available, run the design audit:

```bash
python3 /Users/mac/oss/design-eng-skills/design-engineer/scripts/design_audit.py /Users/mac/oss/web
```

5. Choose the smallest complete design pass that improves the real workflow.

During implementation:

- Use existing Tailwind tokens and `cn(...)`.
- Use local primitives from `components/ui/*`.
- Add a reusable primitive only when it removes real duplication or establishes a missing behavior.
- Keep changes scoped to the affected route or shared primitive.
- Prefer real package/docs content over placeholder copy.

After implementation:

- Run the standard checks:

```bash
pnpm build
```

- If editing interactive UI, start the dev server and visually check the changed routes at desktop and mobile widths:

```bash
pnpm dev
```

- Check for overlaps, clipped text, broken scroll, missing focus, console errors, blank effects, and unreadable contrast.

## Design Acceptance Checklist

A Farming Labs UI pass is complete when:

- The first screen communicates the product or package clearly.
- Package names, docs paths, GitHub links, commands, or examples are present where useful.
- Layout uses Farming Labs structure: rails, borders, corner ticks, grids, mono labels, or code frames.
- Components use local primitives and tokens.
- Search, copy, nav, and links have clear hover/focus states.
- Loading, empty, error, disabled, and success states are covered when the flow needs them.
- Mobile keeps the same essential actions.
- Motion has a purpose and does not slow repeated workflows.
- New animation respects reduced-motion expectations.
- Light and dark mode contrast still works.
- Build passes before shipping.
