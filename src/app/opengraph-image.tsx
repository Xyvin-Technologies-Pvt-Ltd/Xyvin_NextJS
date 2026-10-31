import { ImageResponse } from "next/og";

export const alt = "Xyvin Technologies: web platforms, apps and AI tools for businesses worldwide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default share image for links posted on LinkedIn, WhatsApp, X, etc.
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
          background: "#031331",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 18, height: 18, background: "#F2A93B", borderRadius: 4 }} />
          Xyvin Technologies
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 960 }}>
            Web platforms, apps and AI tools for businesses worldwide
          </div>
          <div style={{ fontSize: 30, color: "#c9cfdb" }}>Software development · Clients in 8+ countries</div>
        </div>
        <div style={{ fontSize: 28, color: "#F2A93B" }}>www.xyvin.com</div>
      </div>
    ),
    size
  );
}
