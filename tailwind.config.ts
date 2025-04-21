// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{html,ts}',
    // Add any other paths that contain your templates
  ],
  theme: {
    extend: {
      // Your theme extensions
    },
  },
  plugins: [
    // Any plugins you need
  ],
} satisfies Config