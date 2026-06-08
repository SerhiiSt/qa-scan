import fs from "fs";
import { Check } from "../../types/Check";
import { CheckResult } from "../../types/CheckResult";

export class SecurityCheck implements Check {
  name = "Security Check";

  async run(): Promise<CheckResult> {
    const envExampleExists = fs.existsSync(".env.example");
    const envExists = fs.existsSync(".env");

    if (envExists && !envExampleExists) {
      return {
        status: "WARN",
        finding: ".env exists but .env.example is missing",
        severity: "MEDIUM",
        recommendation:
          "Provide .env.example and exclude .env from source control",
      };
    }

    return {
      status: "PASS",
      finding: "Basic configuration security checks passed",
      severity: "INFO",
      recommendation: "No action required",
    };
  }
}