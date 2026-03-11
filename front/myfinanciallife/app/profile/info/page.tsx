"use client";

import { useEffect, useState } from "react";
import { getCurrentUser } from "@/services/userService";

export default function ProfileInfoPage() {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const data = await getCurrentUser();
      setUser(data);
    }

    loadUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-md border rounded-xl p-6">

      <div className="flex items-center gap-4 mb-4">

        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold">
          {user.name[0]}
        </div>

        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
          <p className="text-sm text-muted-foreground">Member sice: {user.signDate}</p>
        </div>

      </div>

    </div>
  );
}