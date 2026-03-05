package com.example.myfinanciallife.financialrecord.infrastructure;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.myfinanciallife.financialrecord.domain.FinancialRecord;

public interface JpaFinancialRecordRepository extends JpaRepository<FinancialRecord, Long> {

    public List<FinancialRecord> findByUserId(Long userId);

    public void deleteById(Long id, Long userId);

    List<FinancialRecord> findByUserIdAndDateBetween(
        Long userId,
        LocalDate startDate,
        LocalDate endDate
    );

    List<FinancialRecord> findByUserIdAndDateBetweenAndType(
        Long userId,
        LocalDate startDate,
        LocalDate endDate,
        String type
    );

    @Query(
        value = """
            SELECT *
            FROM financial_record
            WHERE type = :recordType
            AND user_id = :userId
        """,
        nativeQuery = true
    )
    List<FinancialRecord> findByTypeAndUserId(
            @Param("recordType") String recordType,
            @Param("userId") Long userId
    );
}
