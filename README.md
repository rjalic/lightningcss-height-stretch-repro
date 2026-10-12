# lightningcss `height: stretch` panic

Lightning CSS serializes `stretch` only for unprefixed, `-webkit-fill-available`, and `-moz-available`. When vendor prefixes are forced (`include: Features.VendorPrefixes`), it uses `VendorPrefix::all()`, which also includes `-ms` and `-o`. Emitting `Size::Stretch(VendorPrefix::Ms)` then hits `unreachable!()` in `properties/size.rs` and aborts the build.

Bundlers only forward the `include.vendorPrefixes` option.

## Reproductions

Each folder has its own `package.json` and dependencies.

- [`rspack/`](./rspack) — Rspack `builtin:lightningcss-loader` with `include.vendorPrefixes: true`
- [`vite/`](./vite) — Vite 8.3.4 + lightningcss 1.33.0, `css.transformer: "lightningcss"` with `include: Features.VendorPrefixes`

```bash
cd rspack && npm install && npm run build
cd vite && npm install && npm run build
```

## Workaround

Do not force all prefixes. Omit `include` vendor prefixes and rely on browser targets, or set `exclude` for `VendorPrefixes`. In this case `-webkit-fill-available` is also a possible workaround.
