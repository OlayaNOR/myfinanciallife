package com.example.myfinanciallife.dashboard.application;

public class ExpensesByCategoryResponse {

    private String category;
    private Double total;

    public ExpensesByCategoryResponse(String category, Double total) {
        this.category = category;
        this.total = total;
    }

    public String getCategory() {
        return category;
    }

    public Double getTotal() {
        return total;
    }
}
