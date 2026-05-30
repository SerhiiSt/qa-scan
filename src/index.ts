import { runChecks } from "./core/runChecks";
import { generateMarkdownReport } from "./reporters/markdownReporter";

async function main() {
  const results = await runChecks();

  generateMarkdownReport(results);

  console.log("Report generated: reports/report.md");
}

main();