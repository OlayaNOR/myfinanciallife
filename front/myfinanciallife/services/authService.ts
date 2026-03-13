import { apiClient } from "@/lib/apiClient";


const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export async function login(email: string, password: string) {

  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  const data = await response.json();

  return data;
}

export async function registerUser(data: any) {

  return apiClient("/auth/register", {
    method: "POST",
    body: JSON.stringify(data)
  })

}