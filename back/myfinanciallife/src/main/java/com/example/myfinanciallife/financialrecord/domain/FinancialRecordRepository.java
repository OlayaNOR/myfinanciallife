package com.example.myfinanciallife.financialrecord.domain;

import java.util.List;
import java.util.Optional;

public interface FinancialRecordRepository {

    FinancialRecord save(FinancialRecord record);

    List<FinancialRecord> findByUserId(Long userId);
    /*

    void delete(FinancialRecord record);
    
    List<FinancialRecord> findByRecordType(Long userId);

    List<FinancialRecord> findByDateRecordsBetween(Long userId);
    */
    
}
