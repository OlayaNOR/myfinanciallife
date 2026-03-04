package com.example.myfinanciallife.financialrecord.domain;

import java.time.LocalDate;

import com.example.myfinanciallife.user.domain.User;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("DEBT")
public class Debt extends FinancialRecord {

    private Double interestRate;

    protected Debt() {}

    public Debt(String description,
                Double amount,
                LocalDate date,
                User user,
                Category category,
                Double interestRate) {

        super(description, amount, date, user, category);
        this.interestRate = interestRate;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    @Override
    public String getType() {
        return "DEBT";
    }
}
