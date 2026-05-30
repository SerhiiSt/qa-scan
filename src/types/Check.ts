import { CheckResult } from "./CheckResult";

export interface Check {
  name: string;
  run(): Promise<CheckResult>;
}