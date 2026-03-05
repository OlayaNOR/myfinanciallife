package com.example.myfinanciallife.financialrecord.presentation;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.example.myfinanciallife.financialrecord.application.CreateFinancialRecordUseCase;
import com.example.myfinanciallife.financialrecord.application.FinancialRecordResponse;
import com.example.myfinanciallife.financialrecord.application.command.CreateFinancialRecordCommand;
import com.example.myfinanciallife.financialrecord.application.dto.CreateFinancialRecordRequest;
import com.example.myfinanciallife.financialrecord.domain.FinancialRecord;
import com.example.myfinanciallife.financialrecord.domain.FinancialRecordRepository;
import com.example.myfinanciallife.financialrecord.presentation.mapper.FinancialRecordMapper;
import com.example.myfinanciallife.financialrecord.presentation.mapper.FinancialRecordResponseMapper;
import com.example.myfinanciallife.user.application.dto.UserResponse;
import com.example.myfinanciallife.user.domain.User;
import com.example.myfinanciallife.user.domain.UserRepository;


@RestController
@RequestMapping("/financial-records")
public class FinancialRecordController {

    private final FinancialRecordResponseMapper responseMapper;
    private final CreateFinancialRecordUseCase createFinancialRecordUseCase;
    private final FinancialRecordRepository repository;
    private final UserRepository userRepository;

    public FinancialRecordController(
            FinancialRecordResponseMapper responseMapper,
            FinancialRecordMapper financialRecordMapper,
            FinancialRecordRepository financialRecordsQueriesService,
            CreateFinancialRecordUseCase createFinancialRecordUseCase,
            UserRepository userRepository
    ) {
        this.responseMapper = responseMapper;
        this.createFinancialRecordUseCase = createFinancialRecordUseCase;
        this.repository = financialRecordsQueriesService;
        this.userRepository = userRepository;
    }

    @PostMapping
    public FinancialRecordResponse create(
        @RequestBody CreateFinancialRecordRequest request, Authentication authentication) {

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        UserResponse userResponse = new UserResponse(user.getId(), user.getName(), user.getEmail());

        CreateFinancialRecordCommand command =
                FinancialRecordMapper.toCommand(request, user);

        FinancialRecord record =
                createFinancialRecordUseCase.execute(command);

        return responseMapper.toResponse(record, userResponse);
    }

    @GetMapping("my-records")
    public List<FinancialRecord> getByUserId(Authentication authentication) {
        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return repository.findByUserId(user.getId());
    }
    
}