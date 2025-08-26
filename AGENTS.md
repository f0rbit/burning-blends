# Agent Guidelines for Burning Blends

## Commands
- **Build**: `cd website && npm run build`
- **Dev**: `cd website && npm run dev`
- **Lint**: `cd website && npm run lint`
- **Test**: No tests configured

## Code Style
- **TypeScript**: Strict mode enabled, use inline type annotations for component props
- **Imports**: Named imports preferred, use `type` keyword for type imports
- **Styling**: Tailwind CSS with `clsx` + `tailwind-merge` for conditional classes
- **Components**: Radix UI for primitives, Lucide React for icons
- **Paths**: Use `~/*` alias for src directory imports
- **Types**: Use const assertions and template literal types for type safety
- **Formatting**: Prettier with default settings
- **Linting**: ESLint with Next.js core web vitals rules

## Project Structure
- Next.js 14 with App Router
- Static site generation for blog content
- MDX for content processing
- Mapbox integration for cafe reviews