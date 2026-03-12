package com.example.myfinanciallife.financialrecord.application.command;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.example.myfinanciallife.financialrecord.domain.Category;
import com.example.myfinanciallife.financialrecord.domain.RecordType;
import com.example.myfinanciallife.user.domain.User;

public class CreateFinancialRecordCommand {

    private final String description;
    private final BigDecimal amount;
    private final LocalDate date;
    private final User user;
    private final RecordType type;
    private final Category category;      // nullable 
    private final Double interestRate;    // nullable
    private final Double profitRate;  // nullable
    private final Integer days; // for investments, nullable
    private final Integer paymentPeriod; // for debts, nullable

    public CreateFinancialRecordCommand(
            String description,
            BigDecimal amount,
            LocalDate date,
            User user,
            RecordType type,
            Category category,
            Double interestRate,
            Double profitRate,
            Integer days,
            Integer paymentPeriod
    ) {
        this.description = description;
        this.amount = amount;
        this.date = date;
        this.user = user;
        this.type = type;
        this.category = category;
        this.interestRate = interestRate;
        this.profitRate = profitRate;
        this.days = days;
        this.paymentPeriod = paymentPeriod;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public User getUser() {
        return user;
    }

    public RecordType getType() {
        return type;
    }

    public Category getCategory() {
        return category;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    public Double getProfitRate() {
        return profitRate;
    }

    public int getDays() {
        return days;
    }

    public int getPaymentPeriod() {
        return paymentPeriod;
    }
}
