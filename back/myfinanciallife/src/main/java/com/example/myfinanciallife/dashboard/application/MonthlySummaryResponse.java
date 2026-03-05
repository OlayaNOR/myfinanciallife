package com.example.myfinanciallife.dashboard.application;

public class MonthlySummaryResponse {

    private String month;
    private Double income;
    private Double expense;
    private Double balance;

    public MonthlySummaryResponse(String month, Double income, Double expense, Double balance) {
        this.month = month;
        this.income = income;
        this.expense = expense;
        this.balance = balance;
    }

    public String getMonth() {
        return month;
    }

    public Double getIncome() {
        return income;
    }

    public Double getExpense() {
        return expense;
    }

    public Double getBalance() {
        return balance;
    }
}
