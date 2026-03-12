"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { registerUser } from "@/services/authService"

export default function RegisterForm() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmation, setConfirmation] = useState("")

  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()

    try {

      setLoading(true)

      await registerUser({
        name,
        email,
        password,
        confirmation
      })

      router.push("/login")

    } catch (error) {

      console.error(error)

    } finally {
      setLoading(false)
    }
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        type="text"
        placeholder="Name"
        className="w-full border rounded-md px-3 py-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded-md px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-md px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Confirm you password"
        className="w-full border rounded-md px-3 py-2"
        value={confirmation}
        onChange={(e) => setConfirmation(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white rounded-md py-2"
      >
        {loading ? "Creating account..." : "Register"}
      </button>

    </form>

  )
}