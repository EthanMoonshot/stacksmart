import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site";
import CheckoutSuccessCard from "@/components/pricing/CheckoutSuccessCard";

export const metadata: Metadata = buildMetadata({
  title: "Checkout Success",
  description: "Your StackSmart checkout completed successfully.",
  path: "/success",
});

export default async function SuccessPage({
  searchParams,
}: {
  searchParams?: Promise<{ session_id?: string }>;
}) {
  const params = (await searchParams) || {};
  return <CheckoutSuccessCard sessionId={params.session_id} />;
}
