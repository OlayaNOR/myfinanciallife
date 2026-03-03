package com.example.myfinanciallife.user.presentation;


import com.example.myfinanciallife.user.application.UserQueriesService;
import com.example.myfinanciallife.user.application.dto.UpdateUserRequest;
import com.example.myfinanciallife.user.application.dto.UserResponse;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/users")
public class UserController {

    private final UserQueriesService userQueriesService;

    public UserController(UserQueriesService userQueriesService) {
        this.userQueriesService = userQueriesService;
    }

    @GetMapping("/all")
    public Iterable<UserResponse> getAll() {
        return userQueriesService.getAll();
    }

    @GetMapping("/me")
    public UserResponse getCurrentUser(Authentication authentication) {

        String email = authentication.getName();

        UserResponse user = userQueriesService.getUserByEmail(email);

        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }

    @PatchMapping("/{id}")
    public UserResponse update(@PathVariable Long id, @RequestBody UpdateUserRequest request) {
        return userQueriesService.update(id, request);
    }

    @DeleteMapping("/{id}")
    public HttpStatus delete(@PathVariable Long id) {
        userQueriesService.delete(id);
        return HttpStatus.OK;
    }
}
