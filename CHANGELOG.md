<!-- markdownlint-configure-file {"MD024": { "siblings_only": true } } -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[unreleased]: https://github.com/Tatsh/jxa-types/compare/v0.0.7...HEAD
[0.0.7]: https://github.com/Tatsh/jxa-types/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/Tatsh/jxa-types/compare/v0.0.5...v0.0.6
[0.0.4]: https://github.com/Tatsh/jxa-types/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/Tatsh/jxa-types/compare/v0.0.2...v0.0.3
[0.0.1]: https://github.com/Tatsh/jxa-types/releases/tag/v0.0.1
