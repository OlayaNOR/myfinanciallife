package com.example.myfinanciallife.financialrecord.domain;

import java.time.LocalDate;
import java.util.List;

public interface FinancialRecordRepository {

    FinancialRecord save(FinancialRecord record);

    List<FinancialRecord> findByUserId(Long userId);

    List<FinancialRecord> findByTypeAndUserId(String recordType, Long userId);

    FinancialRecord findById(Long id);

    void delete(Long recordId, Long userId);

    List<FinancialRecord> findByUserIdAndDateRecordsBetween(Long userId, LocalDate startDate, LocalDate endDate);

    List<FinancialRecord> findByUserIdAndDateRecordsBetweenAndType(Long userId, LocalDate startDate, LocalDate endDate, String type);

    public Double getTotalIncome(Long userId);
        
    public Double getTotalExpense(Long userId);

    public Integer getTotalTransactions(Long userId);

    public List<Object[]> getExpensesByCategory(Long userId);
    
}
