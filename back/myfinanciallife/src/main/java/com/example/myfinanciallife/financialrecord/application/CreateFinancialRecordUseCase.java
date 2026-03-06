package com.example.myfinanciallife.financialrecord.application;

import java.math.BigDecimal;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.myfinanciallife.financialrecord.application.command.CreateFinancialRecordCommand;
import com.example.myfinanciallife.financialrecord.domain.FinancialRecord;
import com.example.myfinanciallife.financialrecord.domain.FinancialRecordFactory;
import com.example.myfinanciallife.financialrecord.domain.FinancialRecordRepository;
import com.example.myfinanciallife.user.domain.User;
import com.example.myfinanciallife.user.domain.UserRepository;
import com.example.myfinanciallife.user.domain.exception.ApiException;

@Service
public class CreateFinancialRecordUseCase {

    private final FinancialRecordRepository repository;
    private final UserRepository userRepository;
    private final FinancialRecordFactory factory;

    public CreateFinancialRecordUseCase(
            FinancialRecordRepository repository,
            UserRepository userRepository,
            FinancialRecordFactory factory
    ) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.factory = factory;
    }

    public FinancialRecord execute(CreateFinancialRecordCommand command) {

        if (command.getAmount().compareTo(BigDecimal.ZERO) <= 0) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Amount must be greater than zero");
        }

        User user = userRepository.findById(command.getUser().getId())
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "User not found"));

        
        FinancialRecord record = factory.create(command, user);

        return repository.save(record);
    }
}
