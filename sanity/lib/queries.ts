import { groq } from "next-sanity";

// Hero Section
export const heroQuery = groq`*[_type == "hero"][0]{
  eyebrow,
  headlineLine1,
  headlineLine2,
  headlineLine3,
  subtitle,
  ctaPrimaryText,
  ctaPrimaryLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  sideQuote,
  heroImage
}`;

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteName,
  siteDescription,
  contactEmail,
  venmoHandle,
  donationUrl,
  jerseyUrl,
  jerseyTitle,
  jerseyDescription,
  location,
  instagramUrl,
  facebookUrl,
  twitterUrl
}`;

// About Section
export const aboutSectionQuery = groq`*[_type == "aboutSection"][0]{
  eyebrow,
  headline,
  headlineAccent,
  paragraph1,
  paragraph2,
  essayQuote,
  essayQuoteSource,
  parentsTribute,
  coachTribute
}`;

// Mission Section
export const missionSectionQuery = groq`*[_type == "missionSection"][0]{
  eyebrow,
  headlineLine1,
  headlineLine2,
  missionQuote,
  pillars
}`;

// Scholarship Section
export const scholarshipSectionQuery = groq`*[_type == "scholarshipSection"][0]{
  eyebrow,
  headlineLine1,
  headlineLine2,
  bikeDriveBadge,
  bikeDriveTitle,
  bikeDriveDescription,
  scholarshipBadge,
  scholarshipTitle,
  scholarshipDescription,
  criteriaList
}`;

// Donation Section
export const donationSectionQuery = groq`*[_type == "donationSection"][0]{
  eyebrow,
  headlineLine1,
  headlineLine2,
  description,
  backgroundImage
}`;

// Events (repeatable, ordered)
export const eventsQuery = groq`*[_type == "event"] | order(order asc){
  _id,
  title,
  date,
  location,
  description,
  type,
  order
}`;

// Impact Metrics (repeatable, ordered)
export const impactMetricsQuery = groq`*[_type == "impactMetric"] | order(order asc){
  _id,
  label,
  value,
  suffix,
  description,
  order
}`;

// Legacy Wall Tributes (repeatable, ordered)
export const legacyWallQuery = groq`*[_type == "legacyWallTribute"] | order(order asc){
  _id,
  quote,
  author,
  role,
  order
}`;
