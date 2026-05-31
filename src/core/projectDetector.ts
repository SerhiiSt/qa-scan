import fs from "fs";

export type ProjectType =
  | "node"
  | "python"
  | "java"
  | "go"
  | "unknown";

export function detectProjectType(): ProjectType {
  if (fs.existsSync("package.json")) return "node";

  if (fs.existsSync("requirements.txt") ||
      fs.existsSync("pyproject.toml"))
    return "python";

  if (fs.existsSync("pom.xml") ||
      fs.existsSync("build.gradle"))
    return "java";

  if (fs.existsSync("go.mod"))
    return "go";

  return "unknown";
}