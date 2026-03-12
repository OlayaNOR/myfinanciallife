"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const GooeyLanding = dynamic(
  () => import("@/components/ui/gooey-landing"),
  { ssr: false }
);

export default function Home() {

  const router = useRouter();

  return (
    <div onClick={() => router.push("/login")}>
      <GooeyLanding />
    </div>
  );
}