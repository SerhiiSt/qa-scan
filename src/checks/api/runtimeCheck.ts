import { Check } from "../../types/Check";
import { CheckResult } from "../../types/CheckResult";

export class RuntimeCheck implements Check {
  name = "Runtime API Check";

  async run(): Promise<CheckResult> {
    return {
      status: "SKIPPED",
      finding: "Runtime service unavailable",
      severity: "LOW",
      recommendation: "Start runtime services",
    };
  }
}