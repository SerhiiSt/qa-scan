import { RuntimeCheck } from "../checks/api/runtimeCheck";
import { Check } from "../types/Check";
import { BrowserCheck } from "../checks/browser/browserCheck";
import { AiCheck } from "../checks/ai/aiCheck";
import { detectProjectType } from "./projectDetector";
import { StaticCheck } from "../checks/static/staticCheck";
import { SecurityCheck } from "../checks/security/securityCheck";

export async function runChecks() {
  const projectType = detectProjectType();

  console.log(`Detected Project Type: ${projectType}`);

  let checks: Check[] = [];

  switch (projectType) {
    case "node":
      checks = [
        new RuntimeCheck(),
        new BrowserCheck(),
        new AiCheck(),
        new StaticCheck(),
        new SecurityCheck(),
      ];
      break;

    case "python":
      checks = [
        new AiCheck(),
      ];
      break;

    default:
      checks = [
        new AiCheck(),
      ];
  }

  const results = [];

  for (const check of checks) {
    console.log(`Running: ${check.name}`)
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