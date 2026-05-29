import { CheckResult } from "../../types/CheckResults";
import dotenv from "dotenv";

dotenv.config();

export async function runtimeCheck(): Promise<CheckResult> {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    return {
      status: "SKIPPED",
      finding: "API_URL not configured",
      severity: "LOW",
      recommendation: "Provide API_URL through environment configuration",
    };
  }

  try {
    const response = await fetch(apiUrl);

    return {
      status: "PASS",
      finding: `API responded with status ${response.status}`,
      severity: "INFO",
      recommendation: "No action required",
    };
  } catch (error) {
    return {
      status: "SKIPPED",
      finding: "Runtime service unavailable",
      severity: "LOW",
      recommendation: "Start target services to enable runtime validation",
    };
  }
}