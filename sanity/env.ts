export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const rawProjectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "").trim();
export const projectId = /^[a-z0-9-]+$/.test(rawProjectId) ? rawProjectId : "placeholder";
