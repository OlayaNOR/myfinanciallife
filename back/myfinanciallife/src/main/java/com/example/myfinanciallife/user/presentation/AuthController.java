package com.example.myfinanciallife.user.presentation;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.myfinanciallife.security.jwt.JwtService;
import com.example.myfinanciallife.user.application.LoginUserUseCase;
import com.example.myfinanciallife.user.application.RegisterUserUseCase;
import com.example.myfinanciallife.user.application.dto.AuthResponse;
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
    private final JwtService jwtService;

    public AuthController(RegisterUserUseCase registerUserUseCase,
                          LoginUserUseCase loginUserUseCase,
                          JwtService jwtService) {
        this.registerUserUseCase = registerUserUseCase;
        this.loginUserUseCase = loginUserUseCase;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public UserResponse register(@RequestBody RegisterUserRequest request) {
        return registerUserUseCase.execute(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginUserRequest request) {
        UserResponse userResponse = loginUserUseCase.execute(request);
        String token = jwtService.generateToken(request.getEmail());
        return new AuthResponse(token, userResponse.getId(), userResponse.getName(), userResponse.getEmail());
    }
}
