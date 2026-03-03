package com.example.myfinanciallife.user.presentation;

import com.example.myfinanciallife.user.application.LoginUserUseCase;
import com.example.myfinanciallife.user.application.RegisterUserUseCase;
import com.example.myfinanciallife.user.application.UserQueriesService;
import com.example.myfinanciallife.user.application.dto.LoginUserRequest;
import com.example.myfinanciallife.user.application.dto.RegisterUserRequest;
import com.example.myfinanciallife.user.application.dto.UserResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/users")
public class UserController {

    private final RegisterUserUseCase registerUserUseCase;
    private final UserQueriesService userQueriesService;
    private final LoginUserUseCase loginUserUseCase;

    public UserController(RegisterUserUseCase registerUserUseCase,
                          UserQueriesService userQueriesService,
                          LoginUserUseCase loginUserUseCase) {
        this.registerUserUseCase = registerUserUseCase;
        this.userQueriesService = userQueriesService;
        this.loginUserUseCase = loginUserUseCase;
    }

    @PostMapping("/new")
    public UserResponse register(@RequestBody RegisterUserRequest request) {
        return registerUserUseCase.execute(request);
    }

    @GetMapping("/{id}")
    public UserResponse getMethodName(@PathVariable Long id) {
        return userQueriesService.getUserById(id);
    }

    @GetMapping("/login")
    public UserResponse login(@RequestBody LoginUserRequest request) {
        return loginUserUseCase.execute(request);
    }
    
    
}
