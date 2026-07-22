import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "The D'Sean Perry Foundation",
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description (SEO)",
      type: "text",
      rows: 2,
      initialValue:
        "Honoring the life and legacy of D'Sean Perry (#41) — UVA Cavalier, artist, and beloved leader — by empowering youth through athletics, education, and community.",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      initialValue: "info@dseanperryfoundation.org",
    }),
    defineField({
      name: "venmoHandle",
      title: "Venmo Handle",
      type: "string",
      initialValue: "@Happy-Perry-2",
    }),
    defineField({
      name: "donationUrl",
      title: "Donation URL (Venmo/PayPal)",
      type: "url",
      initialValue: "https://account.venmo.com/u/dep_0920",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Miami, Florida",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter / X URL",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
