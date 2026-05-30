export interface CheckResult {
    status: "PASS" | "WARN" | "FAIL" | "SKIPPED";
    finding: string;
    severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFO";
    recommendation: string;
  }