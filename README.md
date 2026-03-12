# Financial Life

Financial Life is a full-stack personal finance management application designed to help users track and understand their financial activity.  
The platform allows users to register financial records such as income, expenses, investments, and debts while providing analytical insights and financial projections.

The system combines a modern React-based frontend with a robust Java backend, offering secure authentication, financial calculations, and an interactive calendar to visualize financial events.

---

# Features

## User Management
- User registration and authentication
- Secure login using JWT tokens
- User profile management
- Update personal information
- Account deletion with confirmation dialog

---

## Financial Records Management

The application allows users to manage different types of financial transactions:

### Income
Track all sources of income such as salaries, bonuses, or other earnings.

### Expenses
Record and categorize expenses to better understand spending habits.

### Investments
Register investments and automatically calculate potential profit based on:

- Investment amount
- Profit rate
- Investment duration (days)

The system also calculates the expected profit and final value of the investment.

### Debts
Track debts and automatically calculate payment information including:

- Monthly payment amount
- Total payment amount
- Interest impact
- Debt payment schedule

Debts with **0% interest** are also supported and calculated correctly.

---

## Financial Calendar

One of the core features of the application is the **interactive financial calendar**, which provides a visual representation of financial activity.

The calendar displays:

- Daily balance based on income and expenses
- Investment creation dates
- Debt creation dates
- Investment maturity dates
- Scheduled debt payment events

Users can click any date to view all financial events for that specific day.

---

## Financial Calculations

The backend includes financial logic to calculate:

### Investment Profit
Based on:
- Principal amount
- Profit rate
- Number of days

### Debt Payment Calculation

For debts with interest:

The system calculates the monthly payment using financial formulas based on effective annual rate (EA).

For debts with **0% interest**, the system automatically distributes the principal evenly across the payment periods.

---

# Tech Stack

## Backend
- Java
- Spring Boot
- Spring Security
- JWT Authentication
- REST API
- Maven
- JPA / Hibernate

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- FullCalendar

## Database
- PostgreSQL

---

# System Architecture