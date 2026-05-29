# Architecture Overview

## Goal

Build a modular TypeScript-based quality scanner capable of analyzing local projects across:

* Static repository analysis
* Security validation
* Runtime API validation
* Browser automation using Playwright
* AI-assisted analysis

The scanner must degrade gracefully when runtime services are unavailable.

---

# Core Design Principles

## 1. Modular Execution Pipeline

Each check executes independently and returns a normalized result object.

This prevents:

* tight coupling,
* cascading runtime failures,
* report-generation dependencies.

If one check fails, the scanner continues executing remaining checks.

---

## 2. Graceful Degradation

Runtime checks are optional.

If services are offline:

* runtime checks return `SKIPPED`
* scanner continues normally
* report explains missing runtime context

This behavior aligns with assignment requirements.

---

## 3. Config-Driven Execution

No hardcoded:

* URLs
* ports
* credentials
* paths

All runtime configuration loaded from:

* `.env`
* config files

---

# Planned Project Structure

```text
src/
 ├── checks/
 │    ├── static/
 │    ├── security/
 │    ├── api/
 │    ├── browser/
 │    └── ai/
 │
 ├── reporters/
 ├── config/
 ├── utils/
 ├── types/
 ├── core/
 └── index.ts
```

---

# Check Execution Model

Each check implements a shared interface:

```ts
interface CheckResult {
  status: "PASS" | "WARN" | "FAIL" | "SKIPPED";
  finding: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFO";
  recommendation: string;
}
```

Benefits:

* consistent reporting
* easier extensibility
* simplified report generation
* stack-independent processing

---

# Runtime Detection Strategy

The scanner will:

1. Detect project stack
2. Detect running services
3. Enable runtime checks conditionally
4. Fallback to static analysis if services unavailable

Example:

* API online → execute runtime API checks
* API offline → inspect OpenAPI specs/routes statically

---

# Browser Automation Strategy

Playwright will be used for:

* page load validation
* console error detection
* broken image detection
* accessibility baseline checks
* responsive viewport testing

Browser checks are skipped if frontend unavailable.

---

# AI-Assisted Analysis

AI analysis will focus on:

* suspicious architectural patterns
* risky security smells
* ambiguous anti-patterns

Reasoning:
These are difficult to detect reliably using purely rule-based logic.

Fallback mode required when AI API unavailable.

---

# Reporting Strategy

Initial implementation target:

* Markdown report

Potential future support:

* HTML reports
* JSON export

Each report section will contain:

* status
* finding
* severity
* recommendation

---

# Known Tradeoffs

Initial implementation prioritizes:

* modularity
* graceful failure handling
* clear reporting

Over:

* exhaustive coverage
* advanced UI
* distributed scanning
