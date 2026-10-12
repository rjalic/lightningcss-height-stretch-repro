import { defineConfig } from "@rspack/cli";

export default defineConfig({
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        type: "css",
        use: [
          {
            loader: "builtin:lightningcss-loader",
            options: {
              // Forcing all vendor prefixes is what surfaces the panic:
              // lightningcss uses VendorPrefix::all(), which includes -ms,
              // then Size::Stretch hits unreachable!() when serializing.
              include: {
                vendorPrefixes: true,
              },
            },
          },
        ],
      },
    ],
  },
});
