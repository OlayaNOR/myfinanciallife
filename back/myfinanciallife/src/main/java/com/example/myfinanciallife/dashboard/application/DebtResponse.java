package com.example.myfinanciallife.dashboard.application;

import java.math.BigDecimal;

public class DebtResponse {
    
    private final String description;
    private final BigDecimal amount;
    private Integer paymentPeriod;
    private final BigDecimal monthlyPayment;
    private final BigDecimal totalPayment;
    private final Double interestRate;

    public DebtResponse(String description, BigDecimal amount, Integer paymentPeriod, BigDecimal monthlyPayment, BigDecimal totalPayment, Double interestRate) {
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

    public BigDecimal getAmount() {
        return amount;
    }

    public Integer getPaymentPeriod() {
        return paymentPeriod;
    }

    public BigDecimal getMonthlyPayment() {
        return monthlyPayment;
    }

    public BigDecimal getTotalPayment() {
        return totalPayment;
    }

    public Double getInterestRate() {
        return interestRate;
    }

}
