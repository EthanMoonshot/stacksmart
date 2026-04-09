import LoginForm from "@/components/auth/LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ next?: string; email?: string; code?: string }>;
}) {
  const params = (await searchParams) || {};

  return (
    <LoginForm
      next={params.next || "/dashboard"}
      initialEmail={params.email || ""}
      initialCode={params.code || ""}
    />
  );
}
