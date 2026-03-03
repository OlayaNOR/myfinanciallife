package com.example.myfinanciallife.user.domain;

import java.util.Optional;

public interface UserRepository {

    User save(User user);

    Optional<User> findById(Long id);

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    boolean passwordMatches(String password, String confirmation);

    boolean isActive(Long id);
    
}
