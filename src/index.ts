import { RuntimeCheck } from "./checks/api/runtimeCheck";

async function main() {
  const result = new RuntimeCheck();

  console.log(result);
}

main();