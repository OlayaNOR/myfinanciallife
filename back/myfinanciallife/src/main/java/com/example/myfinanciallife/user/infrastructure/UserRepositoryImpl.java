package com.example.myfinanciallife.user.infrastructure;



import com.example.myfinanciallife.user.domain.User;
import com.example.myfinanciallife.user.domain.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserRepositoryImpl implements UserRepository {

    private final JpaUserRepository jpaRepository;

    public UserRepositoryImpl(JpaUserRepository jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    @Override
    public User save(User user) {
        User entity = mapToEntity(user);
        User saved = jpaRepository.save(entity);
        return mapToDomain(saved);
    }

    @Override
    public Optional<User> findById(Long id) {
        return jpaRepository.findById(id).map(this::mapToDomain);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return jpaRepository.findByEmail(email).map(this::mapToDomain);
    }

    @Override
    public boolean existsByEmail(String email) {
        return jpaRepository.existsByEmail(email);
    }

    @Override
    public boolean passwordMatches(String password, String confirmation) {
        return confirmation.equals(password);
    }

    private User mapToDomain(User entity) {
        return new User(
                entity.getId(),
                entity.getName(),
                entity.getEmail(),
                entity.getHashedPassword(),
                entity.getSignUpDate()
        );
    }

    private User mapToEntity(User user) {
        User entity = new User(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getHashedPassword(),
                user.getSignUpDate()
        );
        return entity;
    }
        
}
