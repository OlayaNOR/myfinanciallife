package com.example.myfinanciallife.financialrecord.domain;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.example.myfinanciallife.user.domain.User;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("INVESTMENT")
public class Investment extends FinancialRecord {

    private Double profitRate;
    private Integer days;

    protected Investment() {}

    public Investment(String description,
                      BigDecimal amount,
                      LocalDate date,
                      User user,
                      Category category, 
                      Double profitRate,
                      int days) {

        super(description, amount, date, user, category);
        this.profitRate = profitRate;
        this.days = days;
    }

    public Double getProfitRate() {
        return profitRate;
    }

    public int getDays() {
        return days;
    }

    @Override
    public String getType() {
        return "INVESTMENT";
    }
}
