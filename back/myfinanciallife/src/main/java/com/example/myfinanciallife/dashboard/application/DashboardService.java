package com.example.myfinanciallife.dashboard.application;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.myfinanciallife.financialrecord.domain.FinancialRecord;
import com.example.myfinanciallife.financialrecord.domain.FinancialRecordRepository;

@Service
public class DashboardService {

    private final FinancialRecordRepository financialRecordRepository;

    public DashboardService(FinancialRecordRepository financialRecordRepository) {
        this.financialRecordRepository = financialRecordRepository;
    }

    public DashboardResponse getDashboard(Long userId){

        Double income = financialRecordRepository.getTotalIncome(userId);
        Double expense = financialRecordRepository.getTotalExpense(userId);
        Integer transactions = financialRecordRepository.getTotalTransactions(userId);

        return new DashboardResponse(
                income,
                expense,
                transactions
        );
    }

    public List<ExpensesByCategoryResponse> getExpensesByCategory(Long userId){

        List<Object[]> results = financialRecordRepository.getExpensesByCategory(userId);

        return results.stream()
                .map(row -> new ExpensesByCategoryResponse(
                        (String) row[0],
                        ((Number) row[1]).doubleValue()
                ))
                .toList();
    }

    public List<MonthlySummaryResponse> getMonthlySummary(Long userId){

        List<Object[]> results = financialRecordRepository.getMonthlySummary(userId);

        return results.stream()
            .map(row -> {

                String month = (String) row[0];
                Double income = ((Number) row[1]).doubleValue();
                Double expense = ((Number) row[2]).doubleValue();

                Double balance = income - expense;

                return new MonthlySummaryResponse(
                        month,
                        income,
                        expense,
                        balance
                );
            })
            .toList();
    }

    public List<FinancialRecord> getRecentTransactions(Long userId){
        return financialRecordRepository.getRecentTransactions(userId);
    }
}
