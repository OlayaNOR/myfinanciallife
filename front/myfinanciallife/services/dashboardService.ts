import { apiClient } from "@/lib/apiClient";

export async function getDashboardMetrics() {
  return apiClient("/dashboard");
}

export async function getLastTransactions() {
  return apiClient("/dashboard/recent-transactions");
}