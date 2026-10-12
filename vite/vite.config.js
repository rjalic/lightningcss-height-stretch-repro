import { defineConfig } from "vite";
import { Features } from "lightningcss";

export default defineConfig({
  css: {
    transformer: "lightningcss",
    lightningcss: {
      // Forcing all vendor prefixes is what surfaces the panic:
      // lightningcss uses VendorPrefix::all(), which includes -ms,
      // then Size::Stretch hits unreachable!() when serializing.
      include: Features.VendorPrefixes,
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
});
