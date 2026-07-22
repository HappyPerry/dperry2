import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { icons } from "@sanity/icons";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const singletonTypes = new Set([
  "siteSettings",
  "hero",
  "aboutSection",
  "missionSection",
  "scholarshipSection",
  "donationSection",
]);

export default defineConfig({
  name: "dsean-perry-foundation",
  title: "D'Sean Perry Foundation CMS",

  projectId,
  dataset,
  basePath: "/admin",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content Portal")
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .icon(icons.cog)
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),

            // Page Sections Header
            S.listItem()
              .title("Hero Section")
              .id("hero")
              .icon(icons.star)
              .child(S.document().schemaType("hero").documentId("hero")),

            S.listItem()
              .title("About Section")
              .id("aboutSection")
              .icon(icons.document)
              .child(
                S.document()
                  .schemaType("aboutSection")
                  .documentId("aboutSection")
              ),

            S.listItem()
              .title("Mission Section")
              .id("missionSection")
              .icon(icons.component)
              .child(
                S.document()
                  .schemaType("missionSection")
                  .documentId("missionSection")
              ),

            S.listItem()
              .title("Scholarship & Initiatives")
              .id("scholarshipSection")
              .icon(icons.book)
              .child(
                S.document()
                  .schemaType("scholarshipSection")
                  .documentId("scholarshipSection")
              ),

            S.listItem()
              .title("Donation Section")
              .id("donationSection")
              .icon(icons["heart-filled"])
              .child(
                S.document()
                  .schemaType("donationSection")
                  .documentId("donationSection")
              ),

            S.divider(),

            // Dynamic Content Lists
            S.listItem()
              .title("Events")
              .id("event")
              .icon(icons.calendar)
              .child(S.documentTypeList("event").title("Events")),

            S.listItem()
              .title("Impact Metrics")
              .id("impactMetric")
              .icon(icons["bar-chart"])
              .child(S.documentTypeList("impactMetric").title("Impact Metrics")),

            S.listItem()
              .title("Legacy Wall Tributes")
              .id("legacyWallTribute")
              .icon(icons.comment)
              .child(
                S.documentTypeList("legacyWallTribute").title(
                  "Legacy Wall Tributes"
                )
              ),

            S.divider(),

            // Remaining document types
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !singletonTypes.has(listItem.getId()!) &&
                !["event", "impactMetric", "legacyWallTribute"].includes(
                  listItem.getId()!
                )
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],

  schema: {
    types: schemaTypes,
  },
});
