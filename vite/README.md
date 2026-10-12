# Vite reproduction

Minimal reproduction of a compile crash when Vite uses Lightning CSS with **vendor prefixes forced on**, and the CSS contains `height: stretch`.

## Reproduce

```bash
npm install
npm run build
```

Expected: CSS compiles (prefixed `height` values).

Actual (Vite 8.3.4 + lightningcss 1.33.0):

```
thread '<unnamed>' panicked at …/lightningcss/src/properties/size.rs:122:14:
internal error: entered unreachable code
```
