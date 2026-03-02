# Agente Me Brand Colors

## Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Neon Green** | `#3DDC97` | Highlights, accents, glow effects |
| **Primary Green (Buttons)** | `#22C55E` | Buttons, CTAs, active states |

## Accent Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Accent Purple** | `#8B5CF6` | Chat highlights, secondary accents |
| **Accent Blue** | `#3B82F6` | Links, info states |
| **Accent Cyan** | `#06B6D4` | Gradients, tech accents |

## Dark UI Tones

| Color | Hex | Usage |
|-------|-----|-------|
| **Background** | `#0B0F17` | Main background |
| **Panel** | `#121A29` | Side panels, sections |
| **Card/Surface** | `#0E1421` | Cards, elevated surfaces |
| **Border** | `#2F3F61` | Borders, dividers |
| **Primary Text** | `#E6EDF7` | Headings, primary text |
| **Muted Text** | `#9AA6B2` | Secondary text, descriptions |

## CSS Variables

```css
:root {
  --neon-green: #3DDC97;
  --primary-green: #22C55E;
  --accent-purple: #8B5CF6;
  --accent-blue: #3B82F6;
  --accent-cyan: #06B6D4;
  --bg-primary: #0B0F17;
  --bg-panel: #121A29;
  --bg-card: #0E1421;
  --border-color: #2F3F61;
  --text-primary: #E6EDF7;
  --text-muted: #9AA6B2;
}
```

## Glow Effects

```css
--glow-green: 0 0 40px rgba(61, 220, 151, 0.3);
--glow-purple: 0 0 40px rgba(139, 92, 246, 0.25);
--glow-blue: 0 0 40px rgba(59, 130, 246, 0.25);
```

## Typography

- **Primary Font**: Inter (weights: 400, 500, 600, 700, 800, 900)
- **Code Font**: JetBrains Mono (weights: 400, 500, 600)

## Usage Guidelines

1. **Hero Sections**: Use gradient text with neon green to cyan to blue
2. **Cards**: Use glass-morphism with backdrop blur
3. **Buttons**: Primary actions use green gradient, secondary use border style
4. **Accents**: Purple for secondary highlights, cyan for tech elements
5. **Backgrounds**: Keep dark with subtle grid patterns and floating orbs
