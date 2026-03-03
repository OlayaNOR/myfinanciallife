package com.example.myfinanciallife.user.application;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.myfinanciallife.user.application.dto.UpdateUserRequest;
import com.example.myfinanciallife.user.application.dto.UserResponse;
import com.example.myfinanciallife.user.domain.User;
import com.example.myfinanciallife.user.domain.UserRepository;
import com.example.myfinanciallife.user.domain.exception.ApiException;


@Service
public class UserQueriesService {

    private final PasswordEncoder passwordEncoder;
    
    private final UserRepository userRepository;

    public UserQueriesService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponse getUserById(Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "User not found"));

        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }

    public UserResponse update(Long id, UpdateUserRequest request) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new ApiException(HttpStatus.NOT_FOUND, "User not found")
                );

        user.setName(request.getName());
        user.setHashedPassword(passwordEncoder.encode(request.getPassword()));

        User updatedUser = userRepository.save(user);

        return new UserResponse(
                updatedUser.getId(),
                updatedUser.getName(),
                updatedUser.getEmail()
        );
    }
    
    public void delete(Long id) {
        userRepository.findById(id).orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "User not found"));
        userRepository.deleteById(id);
    }

}
