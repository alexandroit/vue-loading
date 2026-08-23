# Changelog

All notable changes to `@stackline/vue-loading` are documented here.

## [Unreleased]

- Moved exact-version dependency records to `package.fixture.json`, repaired
  their validators, and added an offline catalog contract to keep historical
  metadata out of active dependency alerts.
- Replaced the removed `@stackline/loading` dependency with the maintained
  `@stackline/loading-core` package without changing the Vue wrapper API.
- Refreshed vulnerable build dependencies and forced tsup's nested esbuild onto
  the patched release line.
- Upgraded the maintained Vue documentation apps to the current Vite 7
  toolchain and rebuilt the checked-in static documentation.
- Retained the historical Vue 2 demo despite two low-severity advisories in the
  end-of-life Vue 2 compiler chain; the package and Vue 3 demo audit cleanly.
- Added a package-specific security policy and confidential reporting path.
- Added reproducible CI packaging and a manual npm provenance release workflow.
- Included release and security documentation in the published package.

## [3.0.1] - 2026-04-07

- Published the maintained Vue 3 loading wrapper.
- Added versioned demos and compatibility guidance for Vue 2 and Vue 3.
- Preserved the framework-agnostic behavior of the Stackline loading core.

[Unreleased]: https://github.com/alexandroit/vue-loading/commits/main
[3.0.1]: https://www.npmjs.com/package/@stackline/vue-loading/v/3.0.1
