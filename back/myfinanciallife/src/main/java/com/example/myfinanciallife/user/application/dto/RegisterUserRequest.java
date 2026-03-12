package com.example.myfinanciallife.user.application.dto;

public class RegisterUserRequest {

    private String name;
    private String email;
    private String password;
    private String confirmation;

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getConfirmation() {
        return confirmation;
    }

}
