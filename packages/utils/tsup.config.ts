import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  format: ["esm"],
  clean: true,
  dts: true,
  minify: true,
  splitting: true,
  treeshake: true,
  ...options,
}));
