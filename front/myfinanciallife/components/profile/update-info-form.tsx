"use client"

import { useState } from "react"
import { updateUserInfo } from "@/services/userService"

export default function UpdateInfoForm({ user }: any) {
  const [name, setName] = useState(user?.name || "")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password && password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    const payload: any = { name }

    if (password) {
      payload.password = password
    }

    try {

      await updateUserInfo(payload)

      alert("Profile updated successfully")

    } catch (error) {

      console.error(error)
      alert("Error updating profile")

    }
  }

  return (
    <div className="max-w-lg mx-auto bg-card border rounded-xl p-6 shadow-sm">

      <h2 className="text-xl font-semibold mb-6">
        Update My Info
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full mt-1 border rounded-md px-3 py-2 bg-background"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium">
            New Password (optional)
          </label>
          <input
            type="password"
            className="w-full mt-1 border rounded-md px-3 py-2 bg-background"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full mt-1 border rounded-md px-3 py-2 bg-background"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90 transition"
        >
          Save Changes
        </button>

      </form>
    </div>
  )
}