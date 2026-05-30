import { RuntimeCheck } from "../checks/api/runtimeCheck";
import { Check } from "../types/Check";

export async function runChecks() {
  const checks: Check[] = [
    new RuntimeCheck(),
  ];

  const results = [];

  for (const check of checks) {
    try {
      const result = await check.run();
      results.push(result);
    } catch (error) {
      console.error(`Check failed: ${check.name}`);
    }
  }

  return results;
}

//Future checks:
// - StaticCheck
// - SecurityCheck
// - BrowserCheck
// - AiCheck