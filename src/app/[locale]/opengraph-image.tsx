import { ImageResponse } from "next/og";

export const alt = "Hexamind — We make AI work for you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default social share image for every page.
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
          background: "#f7f9fc",
          color: "#0e1626",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 26,
              height: 1,
              background: "#2563eb",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 8,
              color: "#1d4ed8",
              fontWeight: 600,
            }}
          >
            HEXAMIND
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            <span>We make&nbsp;</span>
            <span style={{ color: "#2563eb" }}>&nbsp;AI work&nbsp;</span>
            <span>&nbsp;for you.</span>
          </div>
          <div style={{ fontSize: 30, color: "#5a6576", maxWidth: 900 }}>
            Conseil · Développement sur mesure · Modules d&rsquo;IA propriétaires
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#7a8496" }}>hexamind.ai</div>
      </div>
    ),
    { ...size },
  );
}
