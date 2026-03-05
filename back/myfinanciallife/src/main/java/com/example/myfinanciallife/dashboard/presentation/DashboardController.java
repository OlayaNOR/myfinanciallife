package com.example.myfinanciallife.dashboard.presentation;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myfinanciallife.dashboard.application.DashboardResponse;
import com.example.myfinanciallife.dashboard.application.DashboardService;
import com.example.myfinanciallife.dashboard.application.ExpensesByCategoryResponse;
import com.example.myfinanciallife.user.domain.User;
import com.example.myfinanciallife.user.domain.UserRepository;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;
    private final UserRepository userRepository;

    public DashboardController(DashboardService dashboardService, UserRepository userRepository) {
        this.dashboardService = dashboardService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public DashboardResponse getDashboard(Authentication authentication) {
        
        String email = authentication.getName();

        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

        return dashboardService.getDashboard(user.getId());
    }

    @GetMapping("/expenses-by-category")
    public List<ExpensesByCategoryResponse> getExpensesByCategory(Authentication authentication) {
        String email = authentication.getName();

        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

        return dashboardService.getExpensesByCategory(user.getId());
    }
}
