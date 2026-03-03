package com.example.myfinanciallife.user.domain.exception;

public class UserNotFoundException{

    private static final String MESSAGE = "User not found";

    public static String getMessage() {
        return MESSAGE;
    }
}