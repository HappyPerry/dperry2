import StudioClient from "./StudioClient";
import type { Metadata, Viewport } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "D'Sean Perry Foundation CMS",
  robots: {
    index: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function AdminPage() {
  return <StudioClient />;
}
