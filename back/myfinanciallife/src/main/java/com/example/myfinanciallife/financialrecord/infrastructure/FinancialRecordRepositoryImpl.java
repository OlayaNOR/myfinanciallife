package com.example.myfinanciallife.financialrecord.infrastructure;

import org.springframework.stereotype.Repository;

import com.example.myfinanciallife.financialrecord.domain.FinancialRecord;
import com.example.myfinanciallife.financialrecord.domain.FinancialRecordRepository;

@Repository
public class FinancialRecordRepositoryImpl implements FinancialRecordRepository {
    
    private final JpaFinancialRecordRepository jpaRepository;

    public FinancialRecordRepositoryImpl(JpaFinancialRecordRepository jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    @Override
    public FinancialRecord save(FinancialRecord record) {
        FinancialRecord entity = mapToEntity(record);
        FinancialRecord saved = jpaRepository.save(entity);
        return mapToDomain(saved);
    }

    private FinancialRecord mapToDomain(FinancialRecord entity) {
        return entity;
    }

    private FinancialRecord mapToEntity(FinancialRecord financialRecord) {
        return financialRecord;
    }
}
          
