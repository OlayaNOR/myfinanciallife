package com.example.myfinanciallife.financialrecord.application.dto;

import java.time.LocalDate;

public class CreateFinancialRecordRequest {

    private String description;
    private Double amount;
    private LocalDate date;
    private String type;
    private String category;
    private Double interestRate;
    private Double profitRate;
    private Integer days;
    private Integer paymentPeriod;

    public CreateFinancialRecordRequest() {}

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Double getAmount() { return amount; }
    public void setAmount(Double amount) { this.amount = amount; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Double getInterestRate() { return interestRate; }
    public void setInterestRate(Double interestRate) { this.interestRate = interestRate; }

    public Double getProfitRate() { return profitRate; }
    public void setProfitRate(Double profitRate) { this.profitRate = profitRate; }

    public Integer getDays() { return days; }
    public void setDays(Integer days) { this.days = days; }

    public Integer getPaymentPeriod() { return paymentPeriod; }
    public void setPaymentPeriod(Integer paymentPeriod) { this.paymentPeriod = paymentPeriod; }
}
