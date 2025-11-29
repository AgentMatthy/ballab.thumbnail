# Agent Guidelines for ballab.thumbnail

This is a website for a thumbnail creator.

## Build & Commands
- **Build**: `npm run build` - Bundles all src/*.js files to dist/ using esbuild
- **Test**: No test suite configured (exits with error)
- **Dev**: Open index.html in browser after building

## Code Style

### JavaScript
- **Imports**: Use ES6 imports (`import Lenis from 'lenis'`, `import { onScroll, animate } from 'animejs'`)
- **Variables**: Use `const` by default, avoid global variables (except when needed for window resize)
- **Functions**: Arrow functions preferred (`const createTile = index => { ... }`)
- **Naming**: camelCase for functions/variables (`createGrid`, `get_element_pos` uses snake_case inconsistently)
- **Selectors**: Use `document.querySelector()` for single elements, `document.getElementById()` for IDs
- **Error Handling**: Console.log for debugging (`console.log('SUCCESS!')`, `console.log('FAILED...', error)`)

### Structure
- **File Organization**: Separate concerns into src/main.js (UI/EmailJS), src/anim.js (animations), src/lenis.js (smooth scroll)
- **Styles**: SCSS in styles.scss, compiled to styles.css
- **Assets**: Images in assets/row[1-3]/, fonts in fonts/
- **Output**: Built JS files loaded from dist/ in HTML

## Notes
- EmailJS public key hardcoded in main.js (consider env vars for production)
- Grid system uses CSS custom properties (--columns, --rows)
