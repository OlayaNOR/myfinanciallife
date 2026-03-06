package com.example.myfinanciallife.dashboard.application;

public class DebtResponse {
    
    private final String description;
    private final Double amount;
    private Integer paymentPeriod;
    private final Double monthlyPayment;
    private final Double totalPayment;
    private final Double interestRate;

    public DebtResponse(String description, Double amount, Integer paymentPeriod, Double monthlyPayment, Double totalPayment, Double interestRate) {
        this.description = description;
        this.amount = amount;
        this.paymentPeriod = paymentPeriod;
        this.monthlyPayment = monthlyPayment;
        this.totalPayment = totalPayment;
        this.interestRate = interestRate;
    }

    public String getDescription() {
        return description;
    }

    public Double getAmount() {
        return amount;
    }

    public Integer getPaymentPeriod() {
        return paymentPeriod;
    }

    public Double getMonthlyPayment() {
        return monthlyPayment;
    }

    public Double getTotalPayment() {
        return totalPayment;
    }

    public Double getInterestRate() {
        return interestRate;
    }

}
