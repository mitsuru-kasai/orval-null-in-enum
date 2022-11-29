import { defineConfig } from "orval";

export default defineConfig({
  foo: {
    input: "./openapi.yml",
    output: { target: "./orval/foo.ts", mode: "split" },
  },
});
