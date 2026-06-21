import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helios Stress Test · Pavitra Kushwaha",
  description:
    "Session Stability Under Static and Rotating Prompt Conditions — a technical report from two 20-minute Reactor Helios sessions.",
};

export default function HeliosStressPage() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", margin: 0, padding: 0 }}>
      <iframe
        src="/helios_stress_report.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        title="Helios Stress Test Report"
      />
    </div>
  );
}
