# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - Modernization Update

### Added
- **TypeScript Support**: Added comprehensive TypeScript declaration file (`index.d.ts`) with full type coverage for all classes, functions, constants, and color presets
- **ESM Distribution**: Added modern ES module version (`dist/color-prism.esm.mjs`) with:
  - ES6+ syntax (const, let, arrow functions, class syntax)
  - Named exports for tree-shaking support
  - Default export for convenience
  - Full backward compatibility
- **Enhanced Documentation**: 
  - Completely rewrote README.md with detailed examples and better organization
  - Added comprehensive EXAMPLES.md file with practical use cases
  - Added usage guides for CommonJS, ESM, Browser, and TypeScript
  - Added API reference with detailed descriptions
- **Package Improvements**:
  - Added `module` field for ESM entry point
  - Added `types` field for TypeScript declarations
  - Added `exports` map for proper module resolution
  - Added `files` field to specify distribution files
  - Updated build scripts to generate both ESM and minified versions

### Changed
- Improved README.md with badges, better structure, and comprehensive examples
- Updated JSDoc comments for grammatical accuracy
- Enhanced build process to generate both CommonJS and ESM distributions

### Fixed
- Fixed JSDoc grammar: changed "radian" to "radians" for consistency

### Maintained
- **Full Backward Compatibility**: All existing APIs remain unchanged
- All 18 existing tests continue to pass
- CommonJS version remains the default for Node.js
- Minified version for legacy browsers remains fully supported
- No breaking changes to existing functionality

### Technical Details
- TypeScript declarations follow official TypeScript style guide
- ESM version uses modern JavaScript while maintaining browser compatibility
- Build process ensures consistency between source and distribution files
- Package now provides multiple entry points via conditional exports

## [1.1.3] - Previous Release

See git history for changes in previous releases.
