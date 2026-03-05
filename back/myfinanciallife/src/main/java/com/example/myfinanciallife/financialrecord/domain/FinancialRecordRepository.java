package com.example.myfinanciallife.financialrecord.domain;

import java.util.List;

public interface FinancialRecordRepository {

    FinancialRecord save(FinancialRecord record);

    List<FinancialRecord> findByUserId(Long userId);

    List<FinancialRecord> findByTypeAndUserId(String recordType, Long userId);

    FinancialRecord findById(Long id);

    void delete(Long recordId, Long userId);
    /*
    
    
    List<FinancialRecord> findByDateRecordsBetween(Long userId);
    */

    
    
}
