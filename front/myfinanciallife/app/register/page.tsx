"use client"

import RegisterForm from "@/components/auth/register-form"

export default function RegisterPage() {

  return (
    <main className="flex h-screen items-center justify-center bg-linear-to-b from-black via-zinc-700 to-black">
    <div className="bg-white  p-8 rounded-xl shadow-md w-96">

      <div className="w-full max-w-md border rounded-xl p-6">

        <h1 className="text-2xl font-semibold mb-6 text-center text-black">
          Create an account
        </h1>

        <RegisterForm />

      </div>

    </div>
    </main>
  )
}