package com.example.myfinanciallife.financialrecord.presentation.mapper;


import org.springframework.stereotype.Component;

import com.example.myfinanciallife.financialrecord.application.command.CreateFinancialRecordCommand;
import com.example.myfinanciallife.financialrecord.application.dto.CreateFinancialRecordRequest;
import com.example.myfinanciallife.financialrecord.domain.Category;
import com.example.myfinanciallife.financialrecord.domain.RecordType;

import com.example.myfinanciallife.user.domain.User;

@Component
public class FinancialRecordMapper {

    public static CreateFinancialRecordCommand toCommand(
            CreateFinancialRecordRequest request,
            User user
    ) {

        return new CreateFinancialRecordCommand(
                request.getDescription(),
                request.getAmount(),
                request.getDate(),
                user,
                request.getType() != null
                        ? RecordType.valueOf(request.getType().toUpperCase())
                        : null,
                request.getCategory() != null
                        ? Category.valueOf(request.getCategory().toUpperCase())
                        : null,
                request.getInterestRate(),
                request.getProfitRate(),
                request.getDays(),
                request.getPaymentPeriod()
        );
    }
}
