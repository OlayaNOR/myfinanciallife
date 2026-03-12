"use client"

import UpdateInfoForm from "@/components/profile/update-info-form"
import { getCurrentUser } from "@/services/userService"
import { useEffect, useState } from "react"

export default function UpdateProfilePage() {

  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getCurrentUser()
        setUser(data)
      } catch (error) {
        console.error("Error loading user", error)
      }
    }

    loadUser()
  }, [])

  if (!user) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="p-6">
      <UpdateInfoForm user={user} />
    </div>
  )
}