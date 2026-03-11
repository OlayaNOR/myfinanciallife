import { apiClient } from "@/lib/apiClient";

export async function getMyTransactions() {
  return apiClient("/financial-records/my-records");
}