import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  legacyOutput: true,
  keepNames: true,
  treeshake: true,
  splitting: true,
  sourcemap: true,
  metafile: true,
  clean: true
})
