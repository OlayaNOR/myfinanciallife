package com.example.myfinanciallife.user.application;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.myfinanciallife.user.application.dto.LoginUserRequest;
import com.example.myfinanciallife.user.application.dto.UserResponse;
import com.example.myfinanciallife.user.domain.User;
import com.example.myfinanciallife.user.domain.UserRepository;
import com.example.myfinanciallife.user.domain.exception.ApiException;

@Service
public class LoginUserUseCase {

    private final PasswordEncoder passwordEncoder;
    
    private final UserRepository userRepository;

    public LoginUserUseCase(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponse execute(LoginUserRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "User not found"));

        if(user.isActive() == false) {
            throw new ApiException(HttpStatus.FORBIDDEN, "User is not active");
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getHashedPassword())) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Invalid password");
        }

        return new UserResponse(user.getId(), user.getName(), user.getEmail());
    }

}
