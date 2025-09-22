local utils = import 'utils.libjsonnet';

(import 'defaults.libjsonnet') + {
  local top = self,
  // General settings
  project_type: 'typescript',
  stubs_only: true,
  want_tests: false,

  // Shared
  github_username: 'Tatsh',
  security_policy_supported_versions: { '0.0.x': ':white_check_mark:' },
  authors: [
    {
      'family-names': 'Udvare',
      'given-names': 'Andrew',
      email: 'audvare@gmail.com',
      name: '%s %s' % [self['given-names'], self['family-names']],
    },
  ],
  project_name: 'jxa-types',
  version: '0.0.6',
  description: 'TypeScript types for AppleScript (JXA).',
  keywords: ['applescript', 'jxa', 'macos', 'types'],
  want_main: false,
  copilot: {
    intro: 'jxa-types is a JXA type library for TypeScript.',
  },
  social+: {
    mastodon+: { id: '109370961877277568' },
  },

  // GitHub
  github+: {
    funding+: {
      ko_fi: 'tatsh2',
      liberapay: 'tatsh2',
      patreon: 'tatsh2',
    },
  },

  // TypeScript only
  package_json+: {
    devDependencies+: {
      typedoc: utils.latestNpmPackageVersionCaret('typedoc'),
    },
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
