package com.example.myfinanciallife.dashboard.application;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.myfinanciallife.financialrecord.domain.Debt;
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

    public DebtResponse debtsCalculator(Long debtId, Long userId){

        Debt debt = (Debt) financialRecordRepository.getDebtById(debtId);
        double amount = debt.getAmount();
        double interestRate = debt.getInterestRate() / 100.0;
        double monthlyRate = (Math.pow(1 + interestRate, 1.0/12)) - 1;
        double monthlyPayment = amount * (monthlyRate/(1-Math.pow(1+monthlyRate, -debt.getPaymentPeriod())));
        
        DebtResponse debtResponse = new DebtResponse(
            debt.getDescription(),
            debt.getAmount(),
            debt.getPaymentPeriod(),
            monthlyPayment,
            monthlyPayment * debt.getPaymentPeriod(),
            debt.getInterestRate()
        );

        return debtResponse;
    }
}
