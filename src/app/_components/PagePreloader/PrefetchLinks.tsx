// components/PrefetchTester.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PrefetchTester() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/about");
    router.prefetch("/career");
    router.prefetch("/contact");
  }, [router]);

  return null;
}
