# Architecture Plan

## Quality Layers

* Static repository analysis
* Security analysis
* Runtime API validation
* Browser automation with Playwright

## Core Design Decisions

* Modular execution pipeline
* Shared Result interface
* Config-driven execution
* Graceful fallback when services unavailable

## Initial Modules

src/
checks/
static/
security/
api/
browser/
ai/
reporters/
config/
utils/

## Questions

* Markdown or HTML report?
* Plugin system needed?
* How should stack auto-detection work?