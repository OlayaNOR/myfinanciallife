const API_URL = "http://localhost:8080";
import { apiClient } from "@/lib/apiClient";

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