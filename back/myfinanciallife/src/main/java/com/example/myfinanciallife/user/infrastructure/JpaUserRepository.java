package com.example.myfinanciallife.user.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myfinanciallife.user.domain.User;

import java.util.Optional;

public interface JpaUserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    void deleteById(Long id);
}
