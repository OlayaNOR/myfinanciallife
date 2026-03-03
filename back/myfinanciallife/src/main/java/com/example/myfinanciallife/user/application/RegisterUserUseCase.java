package com.example.myfinanciallife.user.application;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.myfinanciallife.user.application.dto.RegisterUserRequest;
import com.example.myfinanciallife.user.application.dto.UserResponse;
import com.example.myfinanciallife.user.domain.User;
import com.example.myfinanciallife.user.domain.UserRepository;
import com.example.myfinanciallife.user.domain.exception.ApiException;

@Service
public class RegisterUserUseCase {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public RegisterUserUseCase(UserRepository userRepository,
                               PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponse execute(RegisterUserRequest request) {

        userRepository.findByEmail(request.getEmail())
        .ifPresent(user -> {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Email already registered");
        });

        if (!userRepository.passwordMatches(request.getPassword(), request.getConfirmation())) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Passwords do not match");
        }

        String encryptedPassword = passwordEncoder.encode(request.getPassword());

        User user = new User(
                null,
                request.getName(),
                request.getEmail(),
                encryptedPassword,
                LocalDate.now(),
                true
        );

        User saved = userRepository.save(user);

        return new UserResponse(
                saved.getId(),
                saved.getName(),
                saved.getEmail()
        );
    }
}