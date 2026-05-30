import { RuntimeCheck } from "../checks/api/runtimeCheck";
import { Check } from "../types/Check";
import { BrowserCheck } from "../checks/browser/browserCheck";

export async function runChecks() {
  const checks: Check[] = [
    new RuntimeCheck(),
    new BrowserCheck(),
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