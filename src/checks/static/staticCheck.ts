import fs from "fs";
import { Check } from "../../types/Check";
import { CheckResult } from "../../types/CheckResult";

export class StaticCheck implements Check {
  name = "Static Repository Check";

  async run(): Promise<CheckResult> {
    const hasReadme = fs.existsSync("README.md");

    if (!hasReadme) {
      return {
        status: "FAIL",
        finding: "README.md is missing",
        severity: "MEDIUM",
        recommendation: "Add project documentation",
      };
    }

    return {
      status: "PASS",
      finding: "README.md found",
      severity: "INFO",
      recommendation: "No action required",
    };
  }
}