package com.example.myfinanciallife.financialrecord.presentation.mapper;



import org.springframework.stereotype.Component;

import com.example.myfinanciallife.financialrecord.application.FinancialRecordResponse;
import com.example.myfinanciallife.financialrecord.domain.*;
import com.example.myfinanciallife.user.application.dto.UserResponse;

@Component
public class FinancialRecordResponseMapper {

    public FinancialRecordResponse toResponse(FinancialRecord record, UserResponse userResponse) {

        return new FinancialRecordResponse(
            record.getId(),
            record.getDescription(),
            record.getAmount(),
            record.getDate(),
            userResponse,
            record.getType(),
            record.getCategory().name()
            
        );
    }
}
