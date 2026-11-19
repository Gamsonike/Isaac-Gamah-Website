import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const alt = `${site.name} | ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0B2E33",
          color: "#FFFFFF",
          backgroundImage:
            "linear-gradient(to right, rgba(147,177,181,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(147,177,181,0.10) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="88" height="88" viewBox="0 0 64 64" fill="none">
            <rect x="1.5" y="1.5" width="61" height="61" rx="14" fill="#0B2E33" stroke="#4F7C82" strokeWidth="1.5" />
            <path d="M15 18h12M21 18v28M15 46h12" stroke="#B8E3E9" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M49.9 22.1A14 14 0 1 0 54 32H42" stroke="#B8E3E9" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ fontSize: 34, letterSpacing: 8, fontWeight: 600 }}>{site.brand}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, display: "flex", flexDirection: "column" }}>
            <span>Building Digital Solutions.</span>
            <span style={{ color: "#B8E3E9" }}>Securing Digital Futures.</span>
          </div>
          <div style={{ fontSize: 28, color: "#93B1B5" }}>{site.title}</div>
        </div>
        <div style={{ fontSize: 26, letterSpacing: 6, color: "#B8E3E9" }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
