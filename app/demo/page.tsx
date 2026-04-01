import { redirect } from "next/navigation";

// Pre-generated demo analysis - no client-side JS needed
const DEMO_ANALYSIS_ID = "analysis_1775030250155_w7zjo1bf";

export default function DemoPage() {
  redirect(`/report?id=${DEMO_ANALYSIS_ID}&demo=1`);
}
