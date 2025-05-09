import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config: Config = {
      darkMode: "class",
      content: [
            './pages/**/*.{ts,tsx}',
            './components/**/*.{ts,tsx}',
            './app/**/*.{ts,tsx}',
            './src/**/*.{ts,tsx}',
      ],
      prefix: "",
      theme: {
            container: {
                  center: true,
                  padding: "2rem",
                  screens: {
                        "2xl": "1400px",
                  },
            },
            extend: {
                  colors: {
                        border: "hsl(var(--border))",
                        input: "hsl(var(--input))",
                        ring: "hsl(var(--ring))",
                        background: "hsl(var(--background))",
                        foreground: "hsl(var(--foreground))",
                        primary: {
                              DEFAULT: "hsl(var(--primary))",
                              foreground: "hsl(var(--primary-foreground))",
                        },
                        secondary: {
                              DEFAULT: "hsl(var(--secondary))",
                              foreground: "hsl(var(--secondary-foreground))",
                        },
                        destructive: {
                              DEFAULT: "hsl(var(--destructive))",
                              foreground: "hsl(var(--destructive-foreground))",
                        },
                        muted: {
                              DEFAULT: "hsl(var(--muted))",
                              foreground: "hsl(var(--muted-foreground))",
                        },
                        accent: {
                              DEFAULT: "hsl(var(--accent))",
                              foreground: "hsl(var(--accent-foreground))",
                        },
                        popover: {
                              DEFAULT: "hsl(var(--popover))",
                              foreground: "hsl(var(--popover-foreground))",
                        },
                        card: {
                              DEFAULT: "hsl(var(--card))",
                              foreground: "hsl(var(--card-foreground))",
                        },
                        gray: {
                              DEFAULT: "hsl(var(--muted-foreground))",
                              light: "hsl(var(--muted))",
                        },
                  },
                  borderRadius: {
                        lg: "var(--radius)",
                        md: "calc(var(--radius) - 2px)",
                        sm: "calc(var(--radius) - 4px)",
                        'blob': '71% 29% 65% 35% / 43% 56% 44% 57%',
                  },
                  keyframes: {
                        "accordion-down": {
                              from: { height: '0' },
                              to: { height: "var(--radix-accordion-content-height)" },
                        },
                        "accordion-up": {
                              from: { height: "var(--radix-accordion-content-height)" },
                              to: { height: '0' },
                        },
                        float: {
                              '0%, 100%': { transform: 'translateY(0)' },
                              '50%': { transform: 'translateY(-20px)' },
                        },
                        'float-slow': {
                              '0%, 100%': { transform: 'translateY(0)' },
                              '50%': { transform: 'translateY(-10px)' },
                        },
                        'float-reverse': {
                              '0%, 100%': { transform: 'translateY(0)' },
                              '50%': { transform: 'translateY(20px)' },
                        },
                        'float-slow-reverse': {
                              '0%, 100%': { transform: 'translateY(0)' },
                              '50%': { transform: 'translateY(10px)' },
                        },
                        blob: {
                              '0%, 100%': { borderRadius: '71% 29% 65% 35% / 43% 56% 44% 57%' },
                              '25%': { borderRadius: '37% 63% 45% 55% / 31% 46% 54% 69%' },
                              '50%': { borderRadius: '63% 37% 54% 46% / 46% 32% 68% 54%' },
                              '75%': { borderRadius: '28% 72% 35% 65% / 58% 31% 69% 42%' },
                        },
                        'blob-pulse': {
                              '0%, 100%': { transform: 'scale(1)', opacity: '0.1' },
                              '50%': { transform: 'scale(1.05)', opacity: '0.15' },
                        },
                  },
                  animation: {
                        "accordion-down": "accordion-down 0.2s ease-out",
                        "accordion-up": "accordion-up 0.2s ease-out",
                        "float": "float 6s ease-in-out infinite",
                        "float-slow": "float-slow 8s ease-in-out infinite",
                        "float-reverse": "float-reverse 7s ease-in-out infinite",
                        "float-slow-reverse": "float-slow-reverse 9s ease-in-out infinite",
                        "blob": "blob 10s ease-in-out infinite alternate",
                        "blob-slow": "blob 15s ease-in-out infinite alternate-reverse",
                        "blob-pulse": "blob-pulse 12s ease-in-out infinite",
                  },
                  screens: {
                        'xs': '480px',
                  },
                  backgroundImage: {
                        'grid': 'linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                  },
                  backgroundSize: {
                        'grid': '40px 40px',
                  },
            },
      },
      plugins: [tailwindcssAnimate],
}

export default config 