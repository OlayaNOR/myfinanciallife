package com.example.myfinanciallife.dashboard.application;

import java.math.BigDecimal;

public class InvestmentResponse {

    private final String description;
    private final BigDecimal amount;
    private final Integer days;
    private final BigDecimal totalProfit;
    private final Double profitRate;
    private final BigDecimal totalAmount;
    
    public InvestmentResponse(String description, BigDecimal amount, Integer days, BigDecimal totalProfit, Double profitRate, BigDecimal totalAmount) {
        this.description = description;
        this.amount = amount;
        this.days = days;
        this.totalProfit = totalProfit;
        this.profitRate = profitRate;
        this.totalAmount = totalAmount;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public Integer getDays() {
        return days;
    }

    public String getDescription() {
        return description;
    }

    public Double getProfitRate() {
        return profitRate;
    }

    public BigDecimal getTotalProfit() {
        return totalProfit;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }
}
