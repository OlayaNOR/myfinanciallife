package com.example.myfinanciallife.financialrecord.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myfinanciallife.financialrecord.domain.FinancialRecord;

public interface JpaFinancialRecordRepository extends JpaRepository<FinancialRecord, Long> {

}
