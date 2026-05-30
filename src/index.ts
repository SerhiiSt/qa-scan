import { runChecks } from "./core/runChecks";

async function main() {
  const results = await runChecks();

  console.table(results);
}

main();