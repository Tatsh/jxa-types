local utils = import 'utils.libjsonnet';

{
  project_type: 'typescript',
  stubs_only: true,
  want_tests: false,
  project_name: 'jxa-types',
  version: '0.0.7',
  description: 'TypeScript types for AppleScript (JXA).',
  keywords: ['applescript', 'jxa', 'macos', 'types'],
  want_main: false,
  copilot+: {
    intro: 'jxa-types is a JXA type library for TypeScript.',
  },
  // TypeScript only
  package_json+: {
    files+: ['types/'],
    types: './types/',
  },
  eslint+: [
    {
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  tsconfig+: {
    compilerOptions+: {
      declaration: true,
      emitDecoratorMetadata: true,
      lib: ['esnext'],
      module: 'esnext',
      newLine: 'LF',
      noEmit: true,
      noEmitOnError: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      outDir: './dist/',
      strict: true,
      strictBindCallApply: true,
      strictFunctionTypes: false,
      strictNullChecks: true,
      strictPropertyInitialization: true,
      target: 'es2018',
    },
    include: ['types'],
  },
}
