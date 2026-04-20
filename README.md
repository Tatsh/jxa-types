# Typings for JXA

<!-- WISWA-GENERATED-README:START -->

[![GitHub tag (with filter)](https://img.shields.io/github/v/tag/Tatsh/jxa-types)](https://github.com/Tatsh/jxa-types/tags)
[![License](https://img.shields.io/github/license/Tatsh/jxa-types)](https://github.com/Tatsh/jxa-types/blob/master/LICENSE.txt)
[![GitHub commits since latest release (by SemVer including pre-releases)](https://img.shields.io/github/commits-since/Tatsh/jxa-types/v0.0.8/master)](https://github.com/Tatsh/jxa-types/compare/v0.0.8...master)
[![QA](https://github.com/Tatsh/jxa-types/actions/workflows/qa.yml/badge.svg)](https://github.com/Tatsh/jxa-types/actions/workflows/qa.yml)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-blue?logo=dependabot)](https://github.com/dependabot)
[![GitHub Pages](https://github.com/Tatsh/jxa-types/actions/workflows/pages.yml/badge.svg)](https://tatsh.github.io/jxa-types/)
[![Stargazers](https://img.shields.io/github/stars/Tatsh/jxa-types?logo=github&style=flat)](https://github.com/Tatsh/jxa-types/stargazers)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)
[![Prettier](https://img.shields.io/badge/Prettier-black?logo=prettier)](https://prettier.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-black?logo=typescript)](https://www.typescriptlang.org/)
[![Yarn](https://img.shields.io/badge/Yarn-4c335c?logo=yarn)](https://yarnpkg.com/)
[![eslint](https://img.shields.io/badge/eslint-black?logo=eslint)](https://www.npmjs.com/package/eslint)

[![@Tatsh](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fpublic.api.bsky.app%2Fxrpc%2Fapp.bsky.actor.getProfile%2F%3Factor=did%3Aplc%3Auq42idtvuccnmtl57nsucz72&query=%24.followersCount&label=Follow+%40Tatsh&logo=bluesky&style=social)](https://bsky.app/profile/Tatsh.bsky.social)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Tatsh-black?logo=buymeacoffee)](https://buymeacoffee.com/Tatsh)
[![Libera.Chat](https://img.shields.io/badge/Libera.Chat-Tatsh-black?logo=liberadotchat)](irc://irc.libera.chat/Tatsh)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109370961877277568?domain=hostux.social&style=social)](https://hostux.social/@Tatsh)
[![Patreon](https://img.shields.io/badge/Patreon-Tatsh2-F96854?logo=patreon)](https://www.patreon.com/Tatsh2)

<!-- WISWA-GENERATED-README:STOP -->

This is a set of typings for AppleScript in JavaScript that works on macOS 10.10 and above.

To use this, add `jxa-types` to your project. You also need to add `jxa-types` to `tsconfig.json`
under `compilerOptions.types`.

If you need to use dependencies from NPM you must use a method such as with Webpack to bundle your
code into a single file.

## Library

All types are exported globally to match Objective-C. Some are representations of types from
AppleScript. Most are Objective-C Foundation types. In the `$` namespace, many library functions
are exported. These require calling `ObjC.import` with the appropriate libraries before calling
them.
