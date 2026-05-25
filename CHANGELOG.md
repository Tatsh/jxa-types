<!-- markdownlint-configure-file {"MD024": { "siblings_only": true } } -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `Track` is now an `interface` extending `Item` and exposes the iTunes/Music Track Suite accessor
  methods (`artist`, `album`, `albumArtist`, `composer`, `genre`, `duration`, `rating`, `year`,
  and so on). Previously it was `type Track = Item`, which only exposed the seven common `Item`
  fields and forced consumers to cast for even the simplest "now playing" queries.

### Fixed

- Re-ordered the `Application` overload set so the specialized signatures (`'Finder'`,
  `'iTunes' | 'Music'`, `'System Events'`) appear before the generic
  `Application(x: string | number): Application`. TypeScript picks the first matching overload in
  source order, so the generic was previously winning even for literal string arguments, leaving
  `Application('Music').playerState()` reporting "Property 'playerState' does not exist on type
  'Application'".

## [0.0.11] - 2026-05-06

### Fixed

- `NSString.stringByAppendingPathComponent` was incorrectly relocated to the `$.NSString`
  namespace as a static function in v0.0.6 ("Fixed location of NSString static methods"). In
  Cocoa, `-[NSString stringByAppendingPathComponent:]` is an instance method, so the move broke
  every consumer chaining the call on an `NSString` instance (TypeScript reported TS2339
  "Property 'stringByAppendingPathComponent' does not exist on type 'NSString'"). The method has
  been restored to the `NSString` interface in `types/foundation.d.ts`.

### Deprecated

- v0.0.6 through v0.0.10 are effectively unusable for any code that calls
  `stringByAppendingPathComponent` on an `NSString` instance. Upgrade to v0.0.11 or later. These
  versions will be marked deprecated on npm.

## [0.0.10] - 2026-05-02

### Changed

- Added NPM Version and NPM Downloads badges to the README.

## [0.0.9] - 2026-05-02

### Changed

- Internal dependency and tooling updates with no changes to published types.

## [0.0.8] - 2025-12-18

### Fixed

- Argument name for Deno slow type detection.

## [0.0.7] - 2025-12-18

### Changed

- Now publishing on JSR.

## [0.0.6] - 2025-07-08

### Added

- `FileTrack.()`
- `FileTrack.rating`
- `NSString.lastPathComponent`

### Fixed

- Fixed location of `NSString` static methods.

## [0.0.4] - 2025-07-07

### Added

- `$.NSWorkspaceLaunchAndHide`
- `$.NSWorkspaceLaunchAsync`

### Removed

- Unnecessary `ObjC.unwrap(x: NSString)` signature.
- `ObjC.unwrap(x: NSDate): Date` for now (returns `any`).

## [0.0.3] - 2025-07-07

### Added

- `$.NSAppleEventDescriptor.nullDescriptor`
- `$.NSString.stringWithContentsOfFileUsedEncodingError()`
- `$.NSWorkspace.launchAppWithBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifier()`
- `Entries<T>`
- `FinderApplication.home()`
- `FinderFolderContentName`
- `FinderFolderItem`
- `FinderItem`
- `MenuBarItem`
- `MenuBar`
- `MenuItem`
- `Menu`
- `SystemEventsProcess`

### Changed

- Changed generic `ObjC.unwrap()` to return the correct value if unwrapping a value of type
  `NSArray<V>`.

## [0.0.1] - 2025-07-06

First release.

[unreleased]: https://github.com/Tatsh/jxa-types/compare/v0.0.11...HEAD
[0.0.11]: https://github.com/Tatsh/jxa-types/compare/v0.0.10...v0.0.11
[0.0.10]: https://github.com/Tatsh/jxa-types/compare/v0.0.9...v0.0.10
[0.0.9]: https://github.com/Tatsh/jxa-types/compare/v0.0.8...v0.0.9
[0.0.8]: https://github.com/Tatsh/jxa-types/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/Tatsh/jxa-types/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/Tatsh/jxa-types/compare/v0.0.5...v0.0.6
[0.0.4]: https://github.com/Tatsh/jxa-types/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/Tatsh/jxa-types/compare/v0.0.2...v0.0.3
[0.0.1]: https://github.com/Tatsh/jxa-types/releases/tag/v0.0.1
