package com.example.myfinanciallife.user.presentation;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myfinanciallife.user.application.LoginUserUseCase;
import com.example.myfinanciallife.user.application.RegisterUserUseCase;
import com.example.myfinanciallife.user.application.dto.LoginUserRequest;
import com.example.myfinanciallife.user.application.dto.RegisterUserRequest;
import com.example.myfinanciallife.user.application.dto.UserResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/auth")
public class AuthController {

    private final RegisterUserUseCase registerUserUseCase;
    private final LoginUserUseCase loginUserUseCase;

    public AuthController(RegisterUserUseCase registerUserUseCase,
                          LoginUserUseCase loginUserUseCase) {
        this.registerUserUseCase = registerUserUseCase;
        this.loginUserUseCase = loginUserUseCase;
    }

    @PostMapping("/register")
    public UserResponse register(@RequestBody RegisterUserRequest request) {
        return registerUserUseCase.execute(request);
    }

    @PostMapping("/login")
    public UserResponse login(@RequestBody LoginUserRequest request) {
        return loginUserUseCase.execute(request);
    }
}
