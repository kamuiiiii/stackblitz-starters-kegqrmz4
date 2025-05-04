import { spawnSync } from "child_process";
import { join } from "node:path";

async function runInShell() {
  const result = spawnSync("bun", [join(process.cwd(), "code-execution.ts")], {
    stdio: ["inherit", "pipe", "pipe"],
    env: process.env
  });
  console.log(result.stdout.toString());
}

runInShell();
