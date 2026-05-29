import process from "process";

const targetUrl = process.env.TARGET_URL || "";
const apiUrl = process.env.API_URL || "";
const reportFormat = process.env.REPORT_FORMAT || "markdown";

export const config = {
  targetUrl,
  apiUrl,
  reportFormat,
};