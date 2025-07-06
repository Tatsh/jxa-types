# Typings for JXA

[![GitHub tag (with filter)](https://img.shields.io/github/v/tag/Tatsh/jxa-types)](https://github.com/Tatsh/jxa-types/tags)
[![License](https://img.shields.io/github/license/Tatsh/jxa-types)](https://github.com/Tatsh/jxa-types/blob/master/LICENSE.txt)
[![GitHub commits since latest release (by SemVer including pre-releases)](https://img.shields.io/github/commits-since/Tatsh/jxa-types/v0.0.1/master)](https://github.com/Tatsh/jxa-types/compare/v0.0.1...master)
[![CodeQL](https://github.com/Tatsh/jxa-types/actions/workflows/codeql.yml/badge.svg)](https://github.com/Tatsh/jxa-types/actions/workflows/codeql.yml)
[![QA](https://github.com/Tatsh/jxa-types/actions/workflows/qa.yml/badge.svg)](https://github.com/Tatsh/jxa-types/actions/workflows/qa.yml)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![GitHub Pages](https://github.com/Tatsh/jxa-types/actions/workflows/pages/pages-build-deployment/badge.svg)](https://tatsh.github.io/jxa-types/)
[![Stargazers](https://img.shields.io/github/stars/Tatsh/jxa-types?logo=github&style=flat)](https://github.com/Tatsh/jxa-types/stargazers)

[![@Tatsh](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fpublic.api.bsky.app%2Fxrpc%2Fapp.bsky.actor.getProfile%2F%3Factor%3Ddid%3Aplc%3Auq42idtvuccnmtl57nsucz72%26query%3D%24.followersCount%26style%3Dsocial%26logo%3Dbluesky%26label%3DFollow%2520%40Tatsh&query=%24.followersCount&style=social&logo=bluesky&label=Follow%20%40Tatsh)](https://bsky.app/profile/Tatsh.bsky.social)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109370961877277568?domain=hostux.social&style=social)](https://hostux.social/@Tatsh)

![VS Code auto-completion](screenshot.png)

This is a set of typings for AppleScript in JavaScript that works on macOS 10.10 and above.

To use this, add `@types/jxa` to your project.

If you need to use dependencies from NPM you must use a method such as with Webpack to bundle your
code into a single file.

## Library

All types are exported globally to match Objective-C. Some are representations of types from
AppleScript. Most are Objective-C Foundation types. In the `$` namespace, many library functions
are exported. These require calling `ObjC.import` with the appropriate libraries before calling
them.

## Example

```typescript
ObjC.import('Foundation');

const fm = $.NSFileManager.defaultManager;
const exists = fm.fileExistsAtPath(`${$.NSHomeDirectory()}/.bash_history`);

Application('Finder').displayDialog(`Bash history ${exists ? 'exists' : 'does not exist'}.`, {
  buttons: ['OK'],
  defaultButton: 'OK',
  withTitle: 'Greeting',
  withIcon: 'note',
});
```
