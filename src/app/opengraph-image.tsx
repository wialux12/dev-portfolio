import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#121110",
          color: "#F2F0EA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 16,
            backgroundColor: "#D7FF3D",
            color: "#121110",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          КС
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 600, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#9A9488" }}>
            {siteConfig.role} — {siteConfig.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
