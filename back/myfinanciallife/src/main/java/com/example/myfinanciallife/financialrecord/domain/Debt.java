package com.example.myfinanciallife.financialrecord.domain;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.example.myfinanciallife.user.domain.User;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("DEBT")
public class Debt extends FinancialRecord {

    private Double interestRate;
    private int paymentPeriod; // in months

    protected Debt() {}

    public Debt(String description,
                BigDecimal amount,
                LocalDate date,
                User user,
                Category category,
                Double interestRate,
                Integer paymentPeriod) {

        super(description, amount, date, user, category);
        this.interestRate = interestRate;
        this.paymentPeriod = paymentPeriod;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    public int getPaymentPeriod() {
        return paymentPeriod;
    }

    @Override
    public String getType() {
        return "DEBT";
    }
}
