package com.example.myfinanciallife.user.application.dto;

import java.time.LocalDate;

public class UserResponse {

    private Long id;
    private String name;
    private String email;
    private LocalDate signDate;

    public UserResponse(Long id, String name, String email, LocalDate signDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.signDate = signDate;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public LocalDate getSignDate() {
        return signDate;
    }
}
