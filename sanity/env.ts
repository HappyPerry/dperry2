const rawApiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION || "").trim();
export const apiVersion = /^(1|\d{4}-\d{2}-\d{2})$/.test(rawApiVersion) ? rawApiVersion : "2024-01-01";

const rawDataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || "").trim();
export const dataset = /^[a-z0-9~][a-z0-9_-]{0,63}$/.test(rawDataset) ? rawDataset : "production";

const rawProjectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "").trim();
export const projectId = /^[a-z0-9-]+$/.test(rawProjectId) ? rawProjectId : "placeholder";
