package com.example.myfinanciallife.financialrecord.domain;

import java.time.LocalDate;

import com.example.myfinanciallife.user.domain.User;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("INCOME")
public class Income extends FinancialRecord {

    protected Income() {}

    public Income(String description, Double amount, LocalDate date, User user, Category category) {
        super(description, amount, date, user, category);
    }
}
