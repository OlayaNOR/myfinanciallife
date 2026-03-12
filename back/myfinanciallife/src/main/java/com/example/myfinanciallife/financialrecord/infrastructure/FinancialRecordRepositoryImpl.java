package com.example.myfinanciallife.financialrecord.infrastructure;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;

import com.example.myfinanciallife.financialrecord.domain.FinancialRecord;
import com.example.myfinanciallife.financialrecord.domain.FinancialRecordRepository;
import com.example.myfinanciallife.user.domain.exception.ApiException;

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

    @Override
    public List<FinancialRecord> findByTypeAndUserId(String recordType, Long userId) {
        return jpaRepository.findByTypeAndUserId(recordType, userId);
    }

    @Override
    public void delete(Long recordId, Long userId) {

        FinancialRecord record = jpaRepository.findById(recordId)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Record not found"));

        if (!record.getUser().getId().equals(userId)) {
                throw new ApiException(HttpStatus.FORBIDDEN, "You cannot delete this record");
        }

        jpaRepository.delete(record);
    }

    @Override
    public FinancialRecord findById(Long id) {
        return jpaRepository.findById(id).orElse(null);
    }

    @Override
    public List<FinancialRecord> findByUserIdAndDateRecordsBetween(Long userId, LocalDate startDate, LocalDate endDate) {
        return jpaRepository.findByUserIdAndDateBetween(userId, startDate, endDate);
    }

    @Override
    public List<FinancialRecord> findByUserIdAndDateRecordsBetweenAndType(Long userId, LocalDate startDate, LocalDate endDate, String recordType) {
        return jpaRepository.findByUserIdAndDateBetweenAndType(userId, startDate, endDate, recordType);
    }

    @Override
     public Double getTotalIncome(Long userId) {
        return jpaRepository.getTotalIncome(userId);
    }

    @Override
    public Double getTotalExpense(Long userId) {
        return jpaRepository.getTotalExpense(userId);
    }

    @Override
    public Integer getTotalTransactions(Long userId) {
        return jpaRepository.getTotalTransactions(userId);
    }

    @Override
    public List<Object[]> getExpensesByCategory(Long userId) {
        return jpaRepository.getExpensesByCategory(userId);
    }

    @Override
    public List<Object[]> getMonthlySummary(Long userId) {
        return jpaRepository.getMonthlySummary(userId);
    }

    @Override
    public List<FinancialRecord> getRecentTransactions(Long userId) {
        return jpaRepository.getRecentTransactions(userId);
    }

    @Override
    public FinancialRecord getDebtById(Long debtId) {
        return jpaRepository.getDebtById(debtId);
    }

    @Override
    public FinancialRecord getInvestmentById(Long investmentId) {
        return jpaRepository.getInvestmentById(investmentId);
    }

    private FinancialRecord mapToDomain(FinancialRecord entity) {
        return entity;
    }

    private FinancialRecord mapToEntity(FinancialRecord financialRecord) {
        return financialRecord;
    }
}
          
