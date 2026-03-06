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
    @Query(
        value = """
            SELECT *
            FROM financial_record
            WHERE user_id = :userId
            AND date BETWEEN :startDate AND :endDate
            AND type = :type
        """,
        nativeQuery = true
    )
    List<FinancialRecord> findByUserIdAndDateBetweenAndType(
        Long userId,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate,
        @Param("type") String type
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

    @Query(value = """
    SELECT COALESCE(SUM(amount),0)
    FROM financial_record
    WHERE user_id = :userId
    AND type = 'INCOME'
    """, nativeQuery = true)
    Double getTotalIncome(Long userId);

    @Query(value = """
    SELECT COALESCE(SUM(amount),0)
    FROM financial_record
    WHERE user_id = :userId
    AND type = 'EXPENSE'
    """, nativeQuery = true)
    Double getTotalExpense(Long userId);

    @Query(value = """
    SELECT COUNT(*)
    FROM financial_record
    WHERE user_id = :userId
    """, nativeQuery = true)
    Integer getTotalTransactions(Long userId);

    @Query(value = """
    SELECT category, SUM(amount)
    FROM financial_record
    WHERE user_id = :userId
    AND type = 'EXPENSE'
    GROUP BY category
    """, nativeQuery = true)
    List<Object[]> getExpensesByCategory(Long userId);

    @Query(value = """
    SELECT 
    DATE_FORMAT(date, '%Y-%m') as month,
    SUM(CASE WHEN type='INCOME' THEN amount ELSE 0 END) as income,
    SUM(CASE WHEN type='EXPENSE' THEN amount ELSE 0 END) as expense
    FROM financial_record
    WHERE user_id = :userId
    GROUP BY month
    ORDER BY month
    """, nativeQuery = true)
    List<Object[]> getMonthlySummary(Long userId);

    @Query(value = """
    SELECT *
    FROM financial_record
    WHERE user_id = :userId
    ORDER BY date DESC
    LIMIT 5
    """, nativeQuery = true)
    List<FinancialRecord> getRecentTransactions(Long userId);

    @Query(value = """
    SELECT *
    FROM financial_record
    WHERE id = :debtId
    """, nativeQuery = true)
    FinancialRecord getDebtById(Long debtId);
}
