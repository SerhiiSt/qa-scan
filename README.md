# QA Scanner Tool

## Overview

## Architecture

## Development Process (Cursor Workflow)

### Screenshot 1 — Requirement Analysis & Planning
![Requirement Analysis](./docs/screenshots/01-requirements-analysis.png)

Before commit:
![Requirement Analysis Before Commit](./docs/screenshots/01-1-requirements-analysis.png)

Initial analysis phase.

Reviewed the assignment requirements and mapped them into four independent quality layers:

* Static repository analysis
* Security analysis
* Runtime API validation
* Browser automation with Playwright

Key architectural decision:
Use a modular execution pipeline so runtime failures become contextual report entries instead of crashing the scanner.

This directly supports the assignment requirement for graceful degradation and independent execution of checks.

The screenshot also shows early Cursor-assisted architecture discussions and planning notes before implementation started.
