"use client";

import { login } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {

      const data = await login(email, password);

      // guardar JWT
      localStorage.setItem("token", data.token);

      // redirigir al dashboard
      router.push("/dashboard");

    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <main className="flex h-screen items-center justify-center bg-linear-to-b from-black via-zinc-700 to-black">
      
      <div className="bg-white  p-8 rounded-xl shadow-md w-96">

        <h1 className="text-black text-4xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="text-black w-full border p-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="text-black w-full border p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </main>
  );
}