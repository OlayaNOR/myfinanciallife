package com.example.myfinanciallife.financialrecord.infrastructure;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<FinancialRecord> findByUserId(Long userId) {
        List<FinancialRecord> entities = jpaRepository.findByUserId(userId);
        return entities.stream().map(this::mapToDomain).collect(Collectors.toList());
    }

    private FinancialRecord mapToDomain(FinancialRecord entity) {
        return entity;
    }

    private FinancialRecord mapToEntity(FinancialRecord financialRecord) {
        return financialRecord;
    }
}
          
