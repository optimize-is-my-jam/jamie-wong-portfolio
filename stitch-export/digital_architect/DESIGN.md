# Design System Document: Technical Elegance for the Digital Architect

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Blueprint Ledger."** 

As a Solutions Architect, the interface must mirror the precision of a technical schematic while maintaining the prestige of a high-end editorial publication. We are moving away from the "Dashboard-as-a-Service" aesthetic—characterized by cluttered sidebars and card-heavy grids—and moving toward a focused, single-column narrative. 

The goal is to create an environment that feels structured, intentional, and authoritative. By utilizing extreme typographic contrast and atmospheric depth, we transform a professional portfolio into a premium digital experience. The layout rejects redundant navigation in favor of a "Top-Nav" architecture, allowing the content to breathe and the architecture of the information to take center stage.

---

## 2. Colors: Tonal Depth & The Electric Pulse
The palette is rooted in deep, nocturnal slates and charcoals, punctuated by high-energy electric blue accents.

### The Palette Logic
*   **Primary (`#a7c8ff` / `#3291ff`):** Used as a surgical strike. These electric blues represent "active data" or "logic paths."
*   **Surface Hierarchy:** Our backgrounds are not flat. We use `surface` (`#0b1326`) for the base and `surface-container` tiers to define the architectural layers.
*   **Neutrals:** Tertiary and Surface variants provide the "ink" for our ledger, ranging from crisp whites to muted slates.

### The "No-Line" Rule
Standard UI relies on borders to separate ideas. This design system prohibits the use of 1px solid borders for sectioning. Boundaries must be defined solely through:
1.  **Tonal Shifts:** A `surface-container-low` section sitting against a `surface` background.
2.  **Negative Space:** Using our spacing scale to create "islands" of information.

### The Glass & Gradient Rule
To prevent the dark theme from feeling "heavy," we employ Glassmorphism. Floating elements (like the top navigation or modals) should use semi-transparent surface colors with a `backdrop-blur` of 12px–20px. 
*   **Signature Texture:** Use a subtle linear gradient for primary CTAs, transitioning from `primary` to `primary_container`. This adds a "lithographic glow" that flat color lacks.

---

## 3. Typography: The Manrope Scale
We use **Manrope** exclusively. It is a modern, geometric sans-serif that balances technical precision with high readability.

*   **Display (Large/Medium):** These are your "Architectural Statements." Use `display-lg` (3.5rem) for hero sections with tight letter-spacing (-0.02em).
*   **Headline & Title:** These guide the reader through technical hierarchies. They should always be high-contrast against the background (`on_surface`).
*   **Body (Large/Medium):** Set at `1rem` or `0.875rem`. This is the "Ledger Text." Ensure line-height is generous (1.6) to maintain readability against the dark slate backgrounds.
*   **Labels:** Use `label-md` (0.75rem) in uppercase with increased letter-spacing (+0.05em) for metadata or technical tags to evoke a "blueprinted" feel.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, depth is a function of light and tone, not shadows and lines.

*   **The Layering Principle:** 
    *   **Level 0 (Base):** `surface`
    *   **Level 1 (Section):** `surface-container-low`
    *   **Level 2 (Card/Element):** `surface-container-highest`
    *   By stacking these, you create a natural lift. An inner container should always be slightly lighter than its parent to suggest it is closer to the light source.

*   **Ambient Shadows:** When an element must float (e.g., a dropdown), use a shadow with a 32px blur at 6% opacity, using the `on_surface` color as the shadow tint. This mimics natural ambient occlusion rather than a "drop shadow."

*   **The "Ghost Border" Fallback:** If a container requires a boundary for accessibility, use the `outline_variant` token at **15% opacity**. This creates a "Ghost Border"—a suggestion of a line that disappears into the background.

---

## 5. Components

### Buttons
*   **Primary:** Filled with `primary_container`. Text in `on_primary_container`. No border. Slight glow effect on hover using a 4px blur shadow of the same color.
*   **Secondary:** Ghost style. No background, `outline_variant` (at 20% opacity) border. On hover, the background transitions to `surface_container_high`.
*   **Tertiary:** Text only in `primary`. Used for low-priority actions within a narrative flow.

### Chips (Technical Tags)
*   Used for "Tech Stack" or "Architecture Components."
*   Styling: Small `radius-sm` (0.125rem), background `surface_container_high`, text `on_surface_variant`. Avoid rounded "pill" shapes; use the `sm` scale for a more technical, "blocky" aesthetic.

### Input Fields
*   **Text Inputs:** No bottom line or full box. Use a subtle `surface_container_low` fill with a `sm` corner radius.
*   **Focus State:** The background remains the same, but a "Ghost Border" of `primary` at 40% opacity appears.

### Cards & Lists
*   **Strict Rule:** No dividers. 
*   **Lists:** Use vertical white space (`1.5rem` to `2rem`) between items. Use a small electric blue dot (`primary`) as a bullet point for high-priority list items.
*   **Cards:** Define cards through a background shift to `surface_container`. If cards are adjacent, separate them with `2rem` of space rather than a line.

### System Suggestion: The "Code Block" Container
For a Solutions Architect, code and diagrams are first-class citizens. Code blocks should use `surface_container_lowest` (the darkest tier) to create a "recessed" look, making the code appear as if it’s etched into the interface.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. For example, a `headline-lg` left-aligned with `body-md` text restricted to a 60% width column on the right.
*   **Do** use `primary` (Electric Blue) for interactive elements only. 
*   **Do** lean into large areas of empty `surface` to create a feeling of "Digital Luxury."

### Don't:
*   **Don't** use a sidebar. Sidebars create a "tool" feel; a top-nav creates an "experience" feel.
*   **Don't** use 100% white (`#FFFFFF`) for long-form body text. Use `on_surface_variant` to reduce eye strain.
*   **Don't** use "Standard" shadows. If it looks like a default CSS shadow, it is too heavy.
*   **Don't** use rounded "pill" buttons. Stick to the `DEFAULT` (0.25rem) or `sm` (0.125rem) scale to keep the "Architectural" feel.