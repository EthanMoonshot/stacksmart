import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #020617, #111827 55%, #0f766e)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.8 }}>Distill</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>Find wasted SaaS spend fast.</div>
          <div style={{ marginTop: 20, fontSize: 30, opacity: 0.82, maxWidth: 900 }}>
            AI-powered analysis for overlap, underused tools, and savings opportunities.
          </div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.7 }}>stacksmart.io</div>
      </div>
    ),
    size,
  );
}
