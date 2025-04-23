# Typewriter Component

A flexible React component that creates a typewriter text animation effect with customizable typing and cursor animations.

## Features

- Type and delete text with customizable speeds
- Support for multiple text strings in sequence
- Configurable delays between typing and deleting
- Custom cursor styling and animations
- Responsive and accessible
- Works with Tailwind CSS
- **New!** Handwritten font support

## Installation

The component uses the following dependencies:
- framer-motion
- clsx
- tailwind-merge

Make sure these are installed in your project:

```bash
npm install framer-motion clsx tailwind-merge
# or
yarn add framer-motion clsx tailwind-merge
```

## Font Setup

To use the handwritten font, add the Caveat font from Google Fonts to your layout:

```tsx
// app/layout.tsx
import { Inter, Caveat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const caveat = Caveat({ subsets: ["latin"], variable: '--font-caveat' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      {/* ... */}
    </html>
  );
}
```

Then add the following to your CSS:

```css
/* globals.css */
:root {
  --font-handwritten: var(--font-caveat, cursive);
}

.font-handwritten {
  font-family: var(--font-handwritten);
  font-weight: 500;
}
```

## Usage

```tsx
import { Typewriter } from "@/components/ui/typewriter";

function MyComponent() {
  return (
    <div>
      <h1>
        <span>We create </span>
        <Typewriter
          text={["beautiful", "meaningful", "lasting"]}
          speed={70}
          className="font-handwritten text-blue-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar="_"
        />
        <span> memories</span>
      </h1>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string \| string[] | (required) | The text to type. Can be a single string or an array of strings. |
| speed | number | 50 | The typing speed in milliseconds per character. |
| initialDelay | number | 0 | Delay before typing begins. |
| waitTime | number | 2000 | Time to wait before deleting text. |
| deleteSpeed | number | 30 | The deleting speed in milliseconds per character. |
| loop | boolean | true | Whether to loop through the array of texts. |
| className | string | undefined | Additional CSS classes for the component. |
| showCursor | boolean | true | Whether to show the cursor. |
| hideCursorOnType | boolean | false | Whether to hide the cursor during typing. |
| cursorChar | string \| React.ReactNode | "\|" | The cursor character or element. |
| cursorClassName | string | "ml-1" | CSS classes for the cursor. |
| cursorAnimationVariants | object | {...} | Framer Motion animation variants for the cursor. |

## Examples

### With Handwritten Font

```tsx
<Typewriter 
  text={["memories", "stories", "moments"]}
  className="font-handwritten text-blue-600 text-2xl"
  speed={70}
  waitTime={1800}
  deleteSpeed={50}
  cursorChar="|"
/>
```

### Simple Typewriter

```tsx
<Typewriter text="Hello, world!" />
```

### Multiple Texts with Custom Styling

```tsx
<Typewriter 
  text={["Hello", "Bonjour", "Hola", "Konnichiwa"]} 
  speed={80}
  className="font-bold text-gradient"
  waitTime={1000}
  deleteSpeed={50}
  cursorChar="▌"
  cursorClassName="text-blue-500"
/>
```

### Custom Cursor Animation

```tsx
<Typewriter 
  text="Custom cursor animation"
  cursorAnimationVariants={{
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }}
/>
``` 