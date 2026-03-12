"use client";

import { useEffect, useState } from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export default function GooeyLanding() {

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center cursor-pointer bg-linear-to-b from-black via-zinc-700 to-black text-white">

      <GooeyText
        texts={["MY", "FINANCIAL", "LIFE"]}
        morphTime={1}
        cooldownTime={0.29}
        className="font-extrabold"
      />

      {showText && (
        <p className="mt-20 text-2xl text-white">
          Click to continue
        </p>
      )}

    </div>
  );
}