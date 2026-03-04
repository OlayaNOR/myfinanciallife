package com.example.myfinanciallife.financialrecord.domain;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import com.example.myfinanciallife.financialrecord.application.command.CreateFinancialRecordCommand;
import com.example.myfinanciallife.user.domain.User;
import com.example.myfinanciallife.user.domain.exception.ApiException;

@Component
public class FinancialRecordFactory {


    public FinancialRecord create(
            CreateFinancialRecordCommand command,
            User user
    ) {

        switch (command.getType()) {

            case INCOME:
                return new Income(
                        command.getDescription(),
                        command.getAmount(),
                        command.getDate(),
                        command.getUser(),
                        command.getCategory()
                );

            case EXPENSE:
                return new Expense(
                        command.getDescription(),
                        command.getAmount(),
                        command.getDate(),
                        command.getUser(),
                        command.getCategory()
                );

            case INVESTMENT:
                return new Investment(
                        command.getDescription(),
                        command.getAmount(),
                        command.getDate(),
                        command.getUser(),
                        command.getCategory(),
                        command.getProfitRate()
                );

            case DEBT:
                return new Debt(
                        command.getDescription(),
                        command.getAmount(),
                        command.getDate(),
                        command.getUser(),
                        command.getCategory(),
                        command.getInterestRate()
                );

            default:
                throw new ApiException(HttpStatus.BAD_REQUEST, "Invalid record type: ");
        }
    }

}
