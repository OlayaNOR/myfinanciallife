package com.example.myfinanciallife.financialrecord.application;


import java.time.LocalDate;

import com.example.myfinanciallife.user.application.dto.UserResponse;



public class FinancialRecordResponse {

    private Long id;
    private String description;
    private Double amount;
    private LocalDate date;
    private UserResponse user;
    private String type;
    private String category;

    public FinancialRecordResponse(
            Long id,
            String description,
            Double amount,
            LocalDate date,
            UserResponse user,
            String type,
            String category
    ) {
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.date = date;
        this.user = user;
        this.type = type;
        this.category = category;
    }

    public Long getId() { return id; }
    public String getDescription() { return description; }
    public Double getAmount() { return amount; }
    public LocalDate getDate() { return date; }
    public String getType() { return type; }
    public String getCategory() { return category; }
    public UserResponse getUser() { return user; }
}
