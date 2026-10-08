---
version: alpha
name: Sman8yogya
description: |
  The design system for SMA Negeri 8 Yogyakarta (The Inspiring School of Jogja)
  combines institutional authority with youthful energy. The visual identity
  balances professional education messaging with playful, anime-inspired
  character illustrations and vibrant colour-blocking. The hero banner features
  a bold, sky-blue background with cheerful cartoon students, while core brand
  elements use deep navy and bright yellow to signal confidence and
  approachability. The overall effect is modern yet friendly—aspiring to inspire
  confidence in students and parents while remaining distinctly contemporary.
  Generous whitespace, clean typography, and strategic colour accents create a
  calm, organized learning environment on-screen.
source:
  url: "http://sman8yogya.sch.id/"
  pagesAnalyzed: 1
  extractedAt: 2026-10-08
  tokensMeasured: true
colors:
  primary: "#4F6ACA"
  canvas: "#FFFFFF"
  surface-alt: "#F7F7F7"
  on-primary: "#000000"
  ink: "#333333"
  hairline: "#222222"
  accent-1: "#001188"
  accent-2: "#FFCC33"
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 50px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0px
  display-md:
    fontFamily: Poppins
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0px
  display-sm:
    fontFamily: Poppins
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0px
  display-sm-tight:
    fontFamily: Poppins
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0px
  heading-md:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0px
  heading-sm:
    fontFamily: Poppins
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0px
  body-xl:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
    textTransform: capitalize
  body-lg:
    fontFamily: Poppins
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  body-md:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  body-sm:
    fontFamily: -apple-system
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.24
    letterSpacing: 0px
  body-xs:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 400
    lineHeight: 7.14
    letterSpacing: 0px
  body-xs-tight:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  nav:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: 400
    lineHeight: 6.25
    letterSpacing: 0px
rounded:
  none: 0px
  full: 9999px
spacing:
  xxs: 8px
  xs: 12px
  sm: 20px
  md: 24px
  lg: 32px
  xl: 40px
  xxl: 52px
  xxxl: 60px
  section: 68px
  band: 92px
borderWidths:
  thin: 1px
shadows:
  sm: "rgba(0, 0, 0, 0.2) 5px 10px 20px 0px"
elevationStrategy: single-tier
themes:
  derived: dark # the other theme is the site's measured palette
  light:
    bg: "#FFFFFF"
    surface: "#F7F7F7"
    surfaceRaised: "#EFEFEF"
    text: "#333333"
    textMuted: "#7A7A7A"
    border: "#222222"
    accent: "#4F6ACA"
    accentFg: "#FFFFFF"
    focusRing: "#4F6ACA"
    elevation: shadow
  dark:
    bg: "#0C0E13"
    surface: "#1B1C21"
    surfaceRaised: "#27292D"
    text: "#F8F9FD"
    textMuted: "#9EA0A4"
    border: "#333539"
    accent: "#5F77CF"
    accentFg: "#000000"
    focusRing: "#4F6ACA"
    elevation: "border+surface"
  contrastFailures:
    - "light: muted on bg = 4.29:1 (needs 4.5:1)"
components:
  button-outline:
    textColor: "{colors.hairline}"
    border: "2px solid {colors.accent-1}"
    height: 22.3906px
    padding: "15px 30px 15px 30px"
    fontSize: 16px
    fontFamily: Poppins
    fontWeight: 600
    lineHeight: 1.4
    rounded: 50px
  button-outline-2:
    textColor: "{colors.hairline}"
    border: "2px solid {colors.accent-1}"
    height: 22.3906px
    padding: "15px 30px 15px 30px"
    fontSize: 16px
    fontFamily: Poppins
    fontWeight: 700
    lineHeight: 1.4
    rounded: 50px
  button-icon:
    textColor: "{colors.on-primary}"
    border: "1px solid {colors.hairline}"
    height: 38px
    fontSize: 13px
    fontFamily: Poppins
    fontWeight: 400
  footer:
    textColor: "{colors.accent-1}"
    fontSize: 13px
    fontFamily: Poppins
    fontWeight: 400
    lineHeight: 1.4
    backgroundColor: "rgb(255, 204, 0)"
  link:
    typography: "{typography.body-md}"
    textColor: "{colors.canvas}"
    padding: "30px 70px 30px 30px"
  link-2:
    typography: "{typography.body-xl}"
    textColor: "{colors.hairline}"
states:
  other-focus:
    target: other
    state: focus
    textColor: "rgb(68, 68, 68)"
    textDecoration: none
    backgroundColor: "rgb(221, 221, 221)"
  link-hover:
    target: link
    state: hover
    boxShadow: none
    textDecoration: none
  other-hover:
    target: other
    state: hover
    transform: "scale(1.3, 1.3)"
  nav-hover:
    target: nav
    state: hover
    textColor: "{colors.canvas}"
    textDecoration: none
    backgroundColor: "rgb(134, 151, 145)"
  other-disabled:
    target: other
    state: disabled
    opacity: 0.3
  other-focus-visible:
    target: other
    state: focus-visible
    outline: "rgb(0, 187, 255) solid 3px"
    outlineColor: "rgb(0, 187, 255)"
    outlineWidth: 3px
  button-hover:
    target: button
    state: hover
    boxShadow: none
    borderColor: currentcolor
    borderWidth: medium
    textDecoration: none
  input-focus:
    target: input
    state: focus
    textColor: "rgb(17, 27, 33)"
    boxShadow: none
    borderColor: currentcolor
    borderWidth: medium
  input-hover:
    target: input
    state: hover
    borderColor: transparent
    backgroundColor: transparent
breakpoints:
  - width: 375
    containerWidth: 335
    gridColumns: 2
    navLinksVisible: 31
    menuToggleVisible: false
    headingPx: 0
    bodyPx: 13
    sectionPaddingX: 0
  - width: 768
    containerWidth: 728
    gridColumns: 2
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 0
    bodyPx: 13
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 800
    gridColumns: 8
    navLinksVisible: 31
    menuToggleVisible: false
    headingPx: 0
    bodyPx: 13
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 1240
    gridColumns: 8
    navLinksVisible: 8
    menuToggleVisible: false
    headingPx: 0
    bodyPx: 13
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 1240
    gridColumns: 8
    navLinksVisible: 8
    menuToggleVisible: false
    headingPx: 0
    bodyPx: 13
    sectionPaddingX: 0
coverage:
  statesFound: 60
  gradientsFound: 0
  rolesUnassigned: 2
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by SMA Negeri 8 Yogyakarta

```yaml
tokens:
  colors:
    primary: "#4F6ACA"
    accent-1: "#001188"
    accent-2: "#FFCC33"
    canvas: "#FFFFFF"
    surface-alt: "#F7F7F7"
    ink: "#333333"
    on-primary: "#000000"
    hairline: "#222222"
  typography:
    body-sm:
      {
        size: "17px",
        weight: 400,
        lineHeight: 1.24,
        letterSpacing: "0px",
        family: "-apple-system",
      }
    body-lg:
      {
        size: "22px",
        weight: 700,
        lineHeight: 1.2,
        letterSpacing: "0px",
        family: "Poppins",
      }
    body-xs:
      {
        size: "14px",
        weight: 400,
        lineHeight: 7.14,
        letterSpacing: "0px",
        family: "Poppins",
      }
    nav:
      {
        size: "16px",
        weight: 400,
        lineHeight: 6.25,
        letterSpacing: "0px",
        family: "Poppins",
      }
    heading-md:
      {
        size: "32px",
        weight: 400,
        lineHeight: 1.3,
        letterSpacing: "0px",
        family: "Poppins",
      }
    display-sm:
      {
        size: "40px",
        weight: 700,
        lineHeight: 1.4,
        letterSpacing: "0px",
        family: "Poppins",
      }
    display-sm-tight:
      {
        size: "40px",
        weight: 700,
        lineHeight: 1.15,
        letterSpacing: "0px",
        family: "Poppins",
      }
    body-xs-tight:
      {
        size: "14px",
        weight: 400,
        lineHeight: 1.4,
        letterSpacing: "0px",
        family: "Poppins",
      }
    body-md:
      {
        size: "18px",
        weight: 700,
        lineHeight: 1.2,
        letterSpacing: "0px",
        family: "Poppins",
      }
    body-xl:
      {
        size: "24px",
        weight: 700,
        lineHeight: 1.2,
        letterSpacing: "0px",
        family: "Poppins",
        textTransform: "capitalize",
      }
    display-lg:
      {
        size: "50px",
        weight: 700,
        lineHeight: 1.1,
        letterSpacing: "0px",
        family: "Poppins",
      }
    display-md:
      {
        size: "42px",
        weight: 700,
        lineHeight: 1,
        letterSpacing: "0px",
        family: "Poppins",
      }
    heading-sm:
      {
        size: "30px",
        weight: 700,
        lineHeight: 1,
        letterSpacing: "0px",
        family: "Poppins",
      }
  spacing:
    xxs: "8px"
    xs: "12px"
    sm: "20px"
    md: "24px"
    lg: "32px"
    xl: "40px"
    xxl: "52px"
    xxxl: "60px"
    section: "68px"
    band: "92px"
  rounded:
    none: "0px"
    full: "9999px"
  shadows:
    sm: "rgba(0, 0, 0, 0.2) 5px 10px 20px 0px"
  borderWidths:
    thin: "1px"
  opacity:
    - 0.02
    - 0.30
    - 0.60
    - 0.80
    - 0.90
    - 0.98
  zIndex:
    base: [1, 2, 3]
    sticky: [100, 997, 999]
    modal: [1000, 1099]
```

## 1. Visual Theme & Atmosphere

The design system for SMA Negeri 8 Yogyakarta (The Inspiring School of Jogja) combines institutional authority with youthful energy. The visual identity balances professional education messaging with playful, anime-inspired character illustrations and vibrant colour-blocking. The hero banner features a bold, sky-blue background with cheerful cartoon students, while core brand elements use deep navy and bright yellow to signal confidence and approachability. The overall effect is modern yet friendly—aspiring to inspire confidence in students and parents while remaining distinctly contemporary. Generous whitespace, clean typography, and strategic colour accents create a calm, organized learning environment on-screen.

**Key Characteristics**

- Deep navy (`{colors.primary}` and `{colors.accent-1}`) anchors institutional credibility
- Bright yellow (`{colors.accent-2}`) provides cheerful contrast and draws attention to key CTAs
- Character-driven hero sections with anime-style illustrations humanize the brand
- Clean, flat aesthetic with no gradients or decorative depth effects
- Sharp corners (radius `{rounded.none}`) on most components except pill-shaped buttons
- High-contrast text ensures readability across all sections
- Colour-blocking elevation strategy: depth comes from surface changes, not shadows
- Strong emphasis on typography hierarchy with display sizes up to 50px

## 2. Color Palette & Roles

### Primary

- **Primary / Brand** (`{colors.primary}` — `#4F6ACA`): Primary CTA fills, brand accent color, active state indicator for navigation and interactive elements. Used sparingly for emphasis.

### Accent Colors

- **Decorative Dark Navy** (`{colors.accent-1}` — `#001188`): No measured usage role; observed on borders, overlays, and decorative surfaces. Treat as a secondary decorative navy distinct from the primary brand blue.
- **Decorative Bright Yellow** (`{colors.accent-2}` — `#FFCC33`): No measured usage role; observed in footer backgrounds and highlight bands. Used for energy and visual distinction without functional meaning.

### Interactive

- **Link / CTA Text on Dark** (`#FFFFFF`): White text on dark backgrounds (hero, footers, overlays). Observed on hero navigation links and footer content; opacity varies with state.
- **Link Text Default** (`{colors.ink}` — `#333333`): Dark text for standard inline links and body copy links on light backgrounds.

### Neutral Scale

- **Canvas** (`{colors.canvas}` — `#FFFFFF`): Default page background and card surfaces. Primary working surface for all content.
- **Surface Alt** (`{colors.surface-alt}` — `#F7F7F7`): Alternating section backgrounds and subtle container fills to create visual rhythm without harsh contrast.
- **Ink** (`{colors.ink}` — `#333333`): Primary heading and body text color; high contrast for readability.
- **On Primary** (`{colors.on-primary}` — `#000000`): Label and badge text on brand surfaces and overlays.

### Surface & Borders

- **Hairline** (`{colors.hairline}` — `#222222`): 1px borders, dividers, and fine-line accents.

## 3. Typography Rules

### Font Family

**Primary:** Poppins — a modern, friendly geometric sans-serif used across headings, body, navigation, and display text. Fallback stack: `Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

**Secondary:** -apple-system — system fonts for body text in specific contexts, ensuring fast rendering and native feel. Fallback: `BlinkMacSystemFont, 'Segoe UI', sans-serif`.

### Hierarchy

| Role               | Font          | Size | Weight | Line Height | Letter Spacing | Notes                                                      |
| ------------------ | ------------- | ---- | ------ | ----------- | -------------- | ---------------------------------------------------------- |
| **Display Large**  | Poppins       | 50px | 700    | 1.1         | 0px            | Hero headlines; maximum visual impact                      |
| **Display Medium** | Poppins       | 42px | 700    | 1           | 0px            | Section titles and hero subtitles                          |
| **Display Small**  | Poppins       | 40px | 700    | 1.4 or 1.15 | 0px            | Large section headers; tight and loose variants            |
| **Heading Small**  | Poppins       | 30px | 700    | 1           | 0px            | Subsection titles and card headers                         |
| **Heading Medium** | Poppins       | 32px | 400    | 1.3         | 0px            | Medium-weight section headers                              |
| **Body XL**        | Poppins       | 24px | 700    | 1.2         | 0px            | Large emphatic body text; capitalized in some contexts     |
| **Body Large**     | Poppins       | 22px | 700    | 1.2         | 0px            | Links and featured body text                               |
| **Body Medium**    | Poppins       | 18px | 700    | 1.2         | 0px            | Body text emphasis; labels                                 |
| **Body Small**     | -apple-system | 17px | 400    | 1.24        | 0px            | Default body paragraph text                                |
| **Body XS**        | Poppins       | 14px | 400    | 7.14 or 1.4 | 0px            | Small text, captions, list items; loose and tight variants |
| **Navigation**     | Poppins       | 16px | 400    | 6.25        | 0px            | Main and secondary navigation links                        |

### Principles

- **Hierarchy through weight and size:** Bold (700) weights signal interactive and primary content; regular (400) supports secondary or body text.
- **Generous line height on display:** 1.1–1.4 allows large headlines to breathe and remain readable.
- **Consistent letter spacing:** 0px tracking throughout; no negative spacing applied.
- **System fonts for body:** -apple-system provides fast, native rendering for paragraph text while Poppins handles all design-forward sizes.
- **Capitalization as emphasis:** `text-transform: capitalize` applied selectively to body-xl for visual distinction.

## 4. Component Stylings

### Buttons

**Outline Button (Primary Variant)**

- Font: Poppins, 16px, weight 600
- Padding: `{spacing.md}` (24px) horizontal, 15px vertical → `15px 30px 15px 30px`
- Border: `{rounded.full}` (9999px border-radius, pill shape)
- Border stroke: `{colors.accent-1}` (`#001188`), `{spacing.xs}` width (2px)
- Text color: `{colors.ink}` (`#333333`)
- Background: transparent (`rgba(0, 0, 0, 0)`)
- Line height: 22.4px
- Box shadow: none
- **Hover:** background becomes `#869795`, text becomes white (`#FFFFFF`)
- **Focus:** outline `#00BBFF` solid 3px

**Outline Button Variant 2**

- Font: Poppins, 16px, weight 700
- Padding: `15px 30px 15px 30px`
- Border: `{rounded.full}` (9999px), stroke 2px `{colors.accent-1}` (`#001188`)
- Text color: `{colors.ink}` (`#333333`)
- Background: transparent
- Line height: 22.4px
- **Hover:** background `#869795`, text white

**Icon Button**

- Font: Poppins, 13px, weight 400
- Width & height: 38px
- Padding: 0px (icon-only)
- Border: `{rounded.none}` (0px), stroke 1px `{colors.ink}` (`#222222`)
- Text color: `{colors.on-primary}` (`#000000`)
- Background: transparent
- **Hover:** opacity increases, slight scale effect

### Navigation

**Nav Links (Header)**

- Font: `{typography.nav}` (Poppins, 16px, weight 400)
- Text color: white (`#FFFFFF`)
- Line height: 6.25
- Padding: variable
- Background: transparent
- **Hover:** background becomes `#869795` or `#FFCC33` depending on context; text may invert to `#001188`; opacity and perspective transforms applied
- **Focus visible:** outline `#00BBFF` 3px solid

**Footer Links**

- Font: Poppins, 13px, weight 400
- Text color: `{colors.accent-1}` (`#001188`)
- Background: `{colors.accent-2}` (`#FFCC33`)
- Padding: full footer band
- Line height: 18.2px
- Border radius: `{rounded.none}` (0px)
- **Hover:** color remains `#001188`, background shifts slightly

### Cards & Containers

**Card (Information Block)**

- Background: `{colors.canvas}` (`#FFFFFF`)
- Border: none
- Border radius: `{rounded.none}` (0px)
- Padding: `{spacing.lg}` (32px) or variable
- Shadow: `{shadows.sm}` (`rgba(0, 0, 0, 0.2) 5px 10px 20px 0px`) on select cards for subtle lift
- Typography: headings use `{typography.heading-md}` or `{typography.body-xl}`, body text `{typography.body-sm}`

**Section Container (Alternating Background)**

- Background: alternates between `{colors.canvas}` and `{colors.surface-alt}` (`#F7F7F7`)
- Padding: `{spacing.section}` (68px) vertical, `{spacing.md}` (24px) horizontal
- Border radius: `{rounded.none}` (0px)
- Full width to viewport

### Inputs & Forms

**Text Input (Default)**

- Font: Poppins
- Border: 1px solid `{colors.hairline}` (`#222222`)
- Border radius: `{rounded.none}` (0px)
- Background: `{colors.canvas}` (`#FFFFFF`)
- Padding: `{spacing.xs}` (12px)
- Text color: `{colors.ink}` (`#333333`)
- **Focus:** border color becomes `#00BBFF` (3px), background remains white, outline removed
- **Hover:** border color transparent, background transparent (becomes subtle)
- **Disabled:** opacity `0.3`

**Input Label (Implicit)**

- Font: Poppins, weight 700, size varies (typically `{typography.body-md}`)
- Text color: `{colors.ink}` (`#333333`)

### Links (Inline & Featured)

**Inline Link (Body)**

- Font: Poppins or inherited
- Text color: white (`#FFFFFF`) on dark backgrounds; `{colors.accent-1}` (`#001188`) or `{colors.ink}` on light backgrounds
- Padding: 0px (inline)
- Background: transparent
- **Hover:** color shifts (context-dependent), text-decoration none, scale 1.1
- **Focus:** outline `#00BBFF` 3px solid

**Featured Link (Hero / Large)**

- Font: `{typography.body-lg}` (Poppins, 22px, weight 700)
- Text color: `{colors.ink}` (`#333333`)
- Padding: 0px
- Background: transparent
- **Hover:** color `{colors.accent-1}` (`#001188`), background `{colors.accent-2}` (`#FFCC33`)

## 5. Layout Principles

### Spacing System

**Base Unit:** 4px (smallest increment)

**Scale (all values defined in tokens):**

- `{spacing.xxs}` = 8px — micro spacing, icon margins
- `{spacing.xs}` = 12px — tight padding, button padding, input spacing
- `{spacing.sm}` = 20px — small component gaps
- `{spacing.md}` = 24px — default padding, button padding horizontal
- `{spacing.lg}` = 32px — card padding, section padding
- `{spacing.xl}` = 40px — large gaps between major elements
- `{spacing.xxl}` = 52px — extra-large spacing for dramatic separation
- `{spacing.xxxl}` = 60px — hero and major section breaks
- `{spacing.section}` = 68px — vertical spacing between full-width sections
- `{spacing.band}` = 92px — extra spacing for hero bands and major transitions

**Usage Context:**

- Form fields: `{spacing.xs}` between label and input
- Card interiors: `{spacing.lg}` padding all sides
- Section breaks: `{spacing.section}` to `{spacing.band}` vertical space
- Component clusters: `{spacing.sm}` to `{spacing.md}` between items

### Grid & Container

**Max Width:** 1240px (observed at viewport 1280px and above)

**Content Column Widths by Viewport:**

- 375px: 335px (mobile full-width with gutters)
- 768px: 728px (tablet, slightly narrower than viewport)
- 1024px: 800px (transitional; wider content but not full width)
- 1280px+: 1240px (desktop; maximum fixed width)

**Grid Columns:**

- 375px & 768px: 2-column grid for multi-item layouts
- 1024px & 1280px+: 8-column grid for detailed layout control
- Full-width bands: stretch edge to edge regardless of grid

**Section Patterns:**

- Hero band: full-width, `{spacing.band}` (`92px`) internal padding
- Content sections: center-aligned within max-width container, alternating background colors
- Card grids: 2 columns on mobile, 4–8 on desktop depending on card size

### Whitespace Philosophy

The design prioritizes breathing room and visual clarity. Section vertical spacing uses `{spacing.section}` (`68px`) as the default, escalating to `{spacing.band}` (`92px`) for hero transitions. Horizontal gutters remain consistent (`{spacing.md}` on mobile, scaling with viewport). Alternating section backgrounds (`{colors.canvas}` and `{colors.surface-alt}`) create visual rhythm without dense borders or shadows, allowing whitespace itself to define structure.

### Border Radius Scale

- **`{rounded.none}` (0px):** Applied to buttons, cards, images, and overlays. Sharp corners define the system's modern, institutional aesthetic.
- **`{rounded.full}` (9999px):** Pill-shaped buttons and icon buttons; creates approachability and softness for interactive elements.

All other components use 0px unless explicitly styled (e.g., button hover states may reference rounded values but are measured as 0px by default).

### Border Widths

- **Thin (`1px`):** Applied to button outlines, input fields, and fine-line dividers. Used on `{colors.hairline}` and `{colors.accent-1}` borders.
- **Medium (`2px`):** Button outline strokes for primary outline buttons, creating clear visual separation.

## 6. Depth & Elevation

| Level           | Treatment                                               | Use                                               |
| --------------- | ------------------------------------------------------- | ------------------------------------------------- |
| **Flat**        | No shadow; background color only                        | Base cards, buttons, sections with color-blocking |
| **Raised (sm)** | `{shadows.sm}` — `rgba(0, 0, 0, 0.2) 5px 10px 20px 0px` | Dropdown menus, floating panels, emphasized cards |

**Shadow Philosophy:**

The design employs a **single-tier, color-blocking elevation strategy**. Depth is primarily communicated through surface colour changes (alternating `{colors.canvas}` and `{colors.surface-alt}`) rather than shadow accumulation. Where shadows are needed—primarily on dropdown menus and floating overlays—a single, subtle shadow (`{shadows.sm}`) is applied. This approach keeps the interface flat and modern while providing just enough dimensionality for interactive feedback.

### Opacity Levels

The system defines opacity stops for various visual states:

- **0.02** — Nearly invisible; used for very subtle overlays or disabled states
- **0.30** — Disabled button and interactive element state
- **0.60** — Semi-transparent hover overlays
- **0.80** — Slightly transparent text or secondary surfaces
- **0.90** — Nearly opaque; text or surfaces with minimal transparency
- **0.98** — Nearly full opacity; slight transparency for refined edges

**Usage:** Disabled buttons use `opacity: 0.3`; hover states often shift opacity to `0.9` or `1` for feedback. Overlays and backdrop elements layer at `0.60–0.80` for visual hierarchy.

### Z-index / Layering

The site declares a multi-tier z-index strategy:

| Layer      | Z-index Range | Purpose                                                  |
| ---------- | ------------- | -------------------------------------------------------- |
| **Base**   | 1–3           | Default document flow; cards, text, background elements  |
| **Sticky** | 100, 997, 999 | Fixed headers, persistent navigation, top-layer UI       |
| **Modal**  | 1000, 1099    | Dialogs, overlays, absolutely positioned floating panels |

Use the lowest available z-index for each layer type to keep stacking predictable. Sticky navigation uses z-index 997–999 to remain above base but below critical modals. Modals occupy 1000+ to ensure they float above all other content.

## 7. Do's and Don'ts

### Do

- **Maintain high contrast:** Pair `{colors.ink}` (`#333333`) headings with `{colors.canvas}` (`#FFFFFF`) backgrounds for 100% readability.
- **Use colour-blocking for depth:** Alternate `{colors.canvas}` and `{colors.surface-alt}` backgrounds to define sections without relying on shadows.
- **Apply `{rounded.full}` (9999px) to all interactive buttons:** Pill-shaped buttons are a core visual signature; maintain consistency.
- **Respect the typography hierarchy:** Use display sizes (`50px–40px`) only for hero and section titles; body text should default to `{typography.body-sm}` (17px).
- **Leverage the spacing scale:** Always choose from the defined scale (`{spacing.xxs}` through `{spacing.band}`); never estimate intermediate values.
- **Focus states:** Always provide `#00BBFF` 3px outline on keyboard navigation for accessibility.
- **Test on the defined breakpoints:** 375px, 768px, 1024px, 1280px, and 1440px to ensure consistent responsive behavior.

### Don't

- **Don't invent shadow depths:** The system uses only one shadow (`{shadows.sm}`); do not add additional layered or drop-shadow effects.
- **Don't use rounded corners on cards, images, or containers:** These components use `{rounded.none}` (0px); softness is reserved for buttons.
- **Don't mix serif fonts:** All typography is sans-serif (Poppins or -apple-system); do not introduce Georgia, Times New Roman, or other serifs.
- **Don't apply text-transform to all text:** `capitalize` is reserved for `{typography.body-xl}` in specific contexts; avoid universally capitalizing text.
- **Don't overuse `{colors.accent-2}` (`#FFCC33`):** Bright yellow is a highlight accent; use sparingly on CTAs and footer backgrounds, not on large surfaces or body text.
- **Don't skip focus states:** All interactive elements must support `:focus` with `#00BBFF` outline; do not remove or hide focus indicators.
- **Don't change button border-radius:** Buttons are always `{rounded.full}` (9999px); do not apply `{rounded.none}` or intermediate radii.
- **Don't exceed the max-width of 1240px:** Content sections should center-align within this boundary; full-width bands are the exception.
- **Don't apply gradients or mesh overlays:** The brand uses flat, solid colours only; do not introduce gradual colour transitions.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint        | Viewport Width | Content Width | Grid Columns | Key Layout Change                                                          |
| ----------------- | -------------- | ------------- | ------------ | -------------------------------------------------------------------------- |
| **Mobile**        | 375px          | 335px         | 2            | Single-column hero; 2-column card grids; navigation stacked                |
| **Tablet**        | 768px          | 728px         | 2            | Wider content; navigation may remain stacked; 2-column grids               |
| **Small Desktop** | 1024px         | 800px         | 8            | 8-column grid available; layout options expand; content remains centered   |
| **Desktop**       | 1280px         | 1240px        | 8            | Full max-width; multi-column layouts fully realized; all features visible  |
| **Large Desktop** | 1440px         | 1240px        | 8            | Same as 1280px; max-width remains capped; whitespace expands symmetrically |

### Touch Targets

- **Minimum interactive size:** 44px × 44px (iOS Human Interface Guidelines)
- **Buttons:** Minimum 38px height with `{spacing.md}` (24px) horizontal padding
- **Icon buttons:** Exactly 38px × 38px
- **Links:** At least 18px font size with adequate line-height (minimum 1.2)
- **Form inputs:** 38px+ height with `{spacing.xs}` (12px) padding

### Collapsing Strategy

**Navigation Collapse:**

- At 375px: Main navigation links not visible inline; assume menu toggle (hamburger) off-canvas navigation if implemented
- At 768px: Navigation still hidden; menu toggle assumed
- At 1024px+: Full horizontal navigation visible in header

**Card Grids:**

- 375px–768px: 2-column grid; 1 card per row on very narrow viewports if needed
- 1024px+: 4–8 column layout; cards expand to fill grid rows

**Hero Banner:**

- 375px: Character illustrations may be scaled or hidden; heading compressed to fit viewport
- 768px+: Full hero visual revealed; characters visible at original scale

**Padding & Margins:**

- Mobile: `{spacing.md}` (24px) horizontal padding on sections
- Tablet & desktop: Padding scales with viewport; centered container maintains consistent margins

**Typography Sizing:**

- Display sizes remain fixed across breakpoints; heading size does not scale responsively based on token data
- Body text (`{typography.body-sm}` 17px) remains constant
- Navigation and footer text use their defined sizes across all viewpoints

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA / Brand Accent:** Primary (`#4F6ACA`) — use for emphasis, active states, and primary interactive elements
- **Secondary Navy (Decorative):** Accent-1 (`#001188`) — apply to borders, text on light backgrounds, overlay accents
- **Highlight / Accent Yellow (Decorative):** Accent-2 (`#FFCC33`) — use on footer backgrounds and high-energy callouts
- **Default Background:** Canvas (`#FFFFFF`) — page and card backgrounds
- **Alternating Section Background:** Surface Alt (`#F7F7F7`) — subtle background bands for rhythm
- **Heading / Body Text:** Ink (`#333333`) — primary text colour for headings and body
- **Borders & Dividers:** Hairline (`#222222`) — 1px strokes and fine lines
- **Text on Dark / Primary Surfaces:** On Primary (`#000000`) — labels and badges on brand-colored backgrounds

### Iteration Guide

1. **Always start with the typography hierarchy.** Choose the correct size (`display-lg`, `heading-md`, `body-sm`, etc.) before applying colour or spacing.

2. **Apply `{rounded.full}` to all buttons;** cards and containers use `{rounded.none}` (sharp corners).

3. **Colour-block sections using `{colors.canvas}` and `{colors.surface-alt}`** rather than shadows for elevation; apply `{shadows.sm}` only to dropdowns and floating panels.

4. **Use the defined spacing scale** (`{spacing.xxs}` through `{spacing.band}`) exclusively; do not estimate intermediate values.

5. **Ensure all interactive elements have `:focus` states** with `#00BBFF` 3px outline; `:hover` states should shift color or opacity per component spec.

6. **Maintain the max-width of 1240px** for centered content; full-width sections should extend edge-to-edge with internal padding.

7. **Test responsive breakpoints** at 375px, 768px, 1024px, and 1280px+ to confirm layout adaptation; grid columns scale from 2 (mobile/tablet) to 8 (desktop).

8. **Never invent semantic colour roles.** The site does not expose error/success/warning states; use only the 8 defined colours (primary, accent-1, accent-2, canvas, surface-alt, ink, on-primary, hairline).

9. **Apply opacity values from the defined scale** (`0.02`, `0.30`, `0.60`, `0.80`, `0.90`, `0.98`) for disabled, hover, and overlay states.

10. **Use z-index ranges strategically:** base (1–3), sticky (100, 997–999), modal (1000+) to keep stacking predictable and maintainable.

## 10. Known Gaps

- **Interaction states not fully measured:** The extraction captured `:hover` and `:focus` CSS from the site's stylesheets, but not all possible states (`:active`, `:visited`, `:disabled` on all element types) may have been observable. States listed in this document are those explicitly present in measured CSS; others should be inferred from component context.

- **No semantic colour ramp:** The site does not declare or use error (`red`), success (`green`), or warning (`orange`) semantic colours. Do not invent these; use only the 8 extracted neutrals and accents.

- **No gradients or decorative effects:** The extraction found no gradients, meshes, or layered opacity effects. The brand uses flat, solid-colour surfaces only; if visual effects beyond those documented are needed, clarify with the design team.

- **Two colours lack assigned roles:** `{colors.accent-1}` (`#001188`) and `{colors.accent-2}` (`#FFCC33`) appear throughout the site but were not tied to a single functional role in the markup. They are used decoratively and contextually; treat them as secondary accents rather than hard-coded functional colours.

- **Single page analysed:** This extraction covers only the public homepage of SMA Negeri 8 Yogyakarta. Surfaces behind authentication (student portals, admin dashboards) were not visited and may employ additional or different design patterns.

- **Cross-origin stylesheets unreadable:** Some CSS may have been loaded from external domains or obfuscated; complete rule sets for all components may not have been captured. Where a component's full styling is unclear, refer to the measured CSS values provided and infer remaining properties from the documented principles (e.g., if a button's base styles are known, apply the hover and focus rules as specified).

- **Border-radius consistency not universally confirmed:** While the extracted data shows buttons use `{rounded.full}` and most others use `{rounded.none}`, all interactive element types may not have been independently verified. Assume the documented radius values apply; report exceptions during implementation.

- **Responsive behaviour at extreme widths:** Viewports below 375px and above 1440px were not explicitly tested. The system is optimized for the documented breakpoints; extrapolation beyond these ranges is outside the current scope.
