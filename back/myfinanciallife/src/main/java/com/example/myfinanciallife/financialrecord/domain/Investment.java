package com.example.myfinanciallife.financialrecord.domain;

import java.time.LocalDate;

import com.example.myfinanciallife.user.domain.User;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("INVESTMENT")
public class Investment extends FinancialRecord {

    private Double profitRate;

    protected Investment() {}

    public Investment(String description,
                      Double amount,
                      LocalDate date,
                      User user,
                      String investmentType,
                    Category category, 
                      Double profitRate) {

        super(description, amount, date, user, category);
        this.profitRate = profitRate;
    }

    public Double getProfitRate() {
        return profitRate;
    }
}
