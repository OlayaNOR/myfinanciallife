import { apiClient } from "@/lib/apiClient";

export async function getCurrentUser() {
  return apiClient("/users/me", {
    method: "GET",
  });
}

export async function updateUserInfo(data: any) {
  return apiClient("/users/me", {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export async function deleteAccount() {
  return apiClient("/users/me", {
    method: "DELETE",
  });
}