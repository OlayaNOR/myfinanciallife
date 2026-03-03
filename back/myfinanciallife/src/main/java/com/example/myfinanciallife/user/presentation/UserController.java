package com.example.myfinanciallife.user.presentation;

import com.example.myfinanciallife.user.application.RegisterUserUseCase;
import com.example.myfinanciallife.user.application.UserQueriesService;
import com.example.myfinanciallife.user.application.dto.RegisterUserRequest;
import com.example.myfinanciallife.user.application.dto.UserResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/users")
public class UserController {

    private final RegisterUserUseCase registerUserUseCase;
    private final UserQueriesService userQueriesService;

    public UserController(RegisterUserUseCase registerUserUseCase,
                          UserQueriesService userQueriesService) {
        this.registerUserUseCase = registerUserUseCase;
        this.userQueriesService = userQueriesService;
    }

    @PostMapping("/new")
    public UserResponse register(@RequestBody RegisterUserRequest request) {
        return registerUserUseCase.execute(request);
    }

    @GetMapping("/{id}")
    public UserResponse getMethodName(@PathVariable Long id) {
        return userQueriesService.getUserById(id);
    }
    
}
