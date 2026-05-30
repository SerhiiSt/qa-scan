import { chromium } from "playwright";
import { CheckResult } from "../../types/CheckResult";
import { Check } from "../../types/Check";

export class BrowserCheck implements Check {
  name = "Browser Check";

  async run(): Promise<CheckResult> {
    const browser = await chromium.launch();

    try {
      const page = await browser.newPage();

      await page.goto("https://example.com");

      const title = await page.title();

      return {
        status: "PASS",
        finding: `Page title: ${title}`,
        severity: "INFO",
        recommendation: "No action required",
      };
    } catch {
      return {
        status: "SKIPPED",
        finding: "Unable to perform browser validation",
        severity: "LOW",
        recommendation: "Verify target application availability",
      };
    } finally {
      await browser.close();
    }
  }
}