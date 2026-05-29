import { runtimeCheck } from "./checks/api/runtimeCheck";

async function main() {
  const result = await runtimeCheck();

  console.log(result);
}

main();