import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.ts',
  outputPath: './schema.ts',
  prettierResolveConfigPath: './.prettierrc',
};

export default config;
