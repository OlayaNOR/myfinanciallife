package com.example.myfinanciallife.financialrecord.domain;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.example.myfinanciallife.user.domain.User;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("EXPENSE")
public class Expense extends FinancialRecord {


    protected Expense() {}

    public Expense(String description,
                   BigDecimal amount,
                   LocalDate date,
                   User user,
                   Category category) {

        super(description, amount, date, user, category);

    }

    @Override
    public String getType() {
        return "EXPENSE";
    }

}