import fs from "fs";

export function generateMarkdownReport(results: any[]) {
  const report = `
# QA Scan Report

## Summary

Generated findings from static, runtime, browser and AI checks.

${results
  .map(
    (r) => `
### ${r.status}

**Finding**

${r.finding}

**Recommendation**

${r.recommendation}
`
  )
  .join("\n")}
`;

  fs.writeFileSync("reports/report.md", report);
}