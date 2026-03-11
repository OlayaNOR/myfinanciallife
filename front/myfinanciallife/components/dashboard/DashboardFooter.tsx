"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DashboardFooter() {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logo = theme === "dark"
    ? "/logonordark.png"
    : "/logonorlight.png";

  return (
    <footer className="mt-16 border-t p-6 flex justify-center items-center gap-3">

      <span className="text-sm text-muted-foreground">
        Powered by
      </span>

      <img
        src={logo}
        alt="My brand"
        className="h-6"
      />

    </footer>
  );
}