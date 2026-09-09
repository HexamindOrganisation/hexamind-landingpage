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
          background: "#E7E5D6",
          color: "#0F1F4A",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 26,
              height: 1,
              background: "#0058bf",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 8,
              color: "#004a9e",
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
            <span style={{ color: "#0058bf" }}>&nbsp;AI work&nbsp;</span>
            <span>&nbsp;for you.</span>
          </div>
          <div style={{ fontSize: 30, color: "#394665", maxWidth: 900 }}>
            Conseil · Développement sur mesure · Modules d&rsquo;IA propriétaires
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#4C5878" }}>hexamind.ai</div>
      </div>
    ),
    { ...size },
  );
}
