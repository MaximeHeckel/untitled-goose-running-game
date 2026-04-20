import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([
    ".next/**",
    "dist/**",
    "build/**",
    "goose_server/_build/**",
    "goose_server/deps/**",
    "goose_server/priv/static/**",
  ]),
]);

export default eslintConfig;
