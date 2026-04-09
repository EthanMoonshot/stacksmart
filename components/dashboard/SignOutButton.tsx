"use client";

import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/login");
        router.refresh();
      }}
      className="w-full rounded-xl border border-dark-700 px-4 py-3 text-center text-sm font-medium text-dark-300 transition hover:border-dark-600 hover:text-white"
    >
      Sign out
    </button>
  );
}
