export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

const rawDataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || "").trim();
export const dataset = /^[a-z0-9~][a-z0-9_-]{0,63}$/.test(rawDataset) ? rawDataset : "production";

const rawProjectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "").trim();
export const projectId = /^[a-z0-9-]+$/.test(rawProjectId) ? rawProjectId : "placeholder";
