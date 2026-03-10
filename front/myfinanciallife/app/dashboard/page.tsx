"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <p className="text-lg">
        You are logged in 🎉
      </p>

      <div className="mt-6 p-4 bg-zinc-900 rounded w-125 wrap-break-word">

        <p className="text-sm text-gray-400 mb-2">
          JWT Token:
        </p>

        <p className="text-xs text-green-400">
          {token}
        </p>

      </div>

    </main>
  );
}