# Rspack reproduction

Minimal reproduction of a compile crash when Rspack's `builtin:lightningcss-loader` is configured with **vendor prefixes forced on**, and the CSS contains `height: stretch`.

## Reproduce

```bash
npm install
npm run build
```

Expected: CSS compiles (prefixed `height` values).

Actual (Rspack 2.2.8, which uses lightningcss `^1.0.0-alpha.71`):

```
thread 'tokio-…' panicked at …:
internal error: entered unreachable code
```

The process then aborts (Windows exit code `-1073740791`).
