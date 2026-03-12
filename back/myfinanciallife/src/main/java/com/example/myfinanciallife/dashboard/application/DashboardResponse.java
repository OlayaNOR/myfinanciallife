package com.example.myfinanciallife.dashboard.application;

public class DashboardResponse {

    private Double totalIncome;
    private Double totalExpense;
    private Double balance;
    private Integer totalTransactions;

    public DashboardResponse(Double totalIncome, Double totalExpense, Integer totalTransactions) {
        this.totalIncome = totalIncome;
        this.totalExpense = totalExpense;
        this.balance = totalIncome - totalExpense;
        this.totalTransactions = totalTransactions;
    }

    public Double getBalance() {
        return balance;
    }

    public Double getTotalExpense() {
        return totalExpense;
    }

    public Double getTotalIncome() {
        return totalIncome;
    }

    public Integer getTotalTransactions() {
        return totalTransactions;
    }

}
