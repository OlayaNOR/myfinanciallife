import { apiClient } from "@/lib/apiClient";

export async function getMyTransactions() {
  return apiClient(`/financial-records/my-records`)
}

export async function getIncomes() {
  return apiClient(`/financial-records/by-type?type=INCOME`)
}

export async function getExpenses() {
  return apiClient(`/financial-records/by-type?type=EXPENSE`)
}

export async function getDebts() {
  return apiClient(`/financial-records/by-type?type=DEBT`)
}

export async function getInvestments() {
  return apiClient(`/financial-records/by-type?type=INVESTMENT`)
}

export async function createFinancialRecord(data: any) {
  return apiClient("/financial-records/new", {
    method: "POST",
    body: JSON.stringify(data)
  })
}
