import { apiClient } from "@/lib/apiClient";

export async function getCurrentUser() {
  return apiClient("/users/me", {
    method: "GET",
  });
}