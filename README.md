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
- MySQL

---

# System Architecture

Frontend (Next.js / React)
|
| REST API
|
Backend (Spring Boot)
|
| JPA / Hibernate
|
Database (PostgreSQL)

The backend exposes REST endpoints that handle authentication, financial record management, and financial calculations.  
The frontend consumes these APIs to display dynamic financial data and visualizations.

---

# Project Structure

financial-life
│
├── backend
│   ├── application
│   ├── domain
│   ├── infrastructure
│   ├── presentation
│   └── security
│
├── frontend
│   ├── app
│   ├── components
│   ├── services
│   ├── lib
│ 
│
└── README.md

---

# Key Components

### Financial Records Module
Handles creation and management of:

- Income
- Expenses
- Investments
- Debts

### Calendar Module
Displays financial activity visually and generates derived events such as:

- Investment maturity
- Debt payment schedule

### Financial Calculation Engine
Handles calculations for:

- Investment profit
- Debt amortization
- Monthly payment amounts

---

# API Overview

Example endpoints provided by the backend:

POST /auth/login
POST /auth/register

GET /users/me
PUT /users/update

POST /financial-records
GET /financial-records

GET /investments?investmentId={id}
GET /debts?debtId={id}

These endpoints provide all data required for financial tracking and calculations.

---

# Security

The application uses **JWT authentication** to protect all financial operations.

Authentication flow:

1. User logs in
2. Backend generates a JWT token
3. Token is stored on the client
4. All protected requests include the token in the Authorization header

These endpoints provide all data required for financial tracking and calculations.

---

# Security

The application uses **JWT authentication** to protect all financial operations.

Authentication flow:

1. User logs in
2. Backend generates a JWT token
3. Token is stored on the client
4. All protected requests include the token in the Authorization header

Authorization: Bearer 

---

# Installation

## Backend

cd back/myfinanciallife
mvn clean install
mvn spring-boot:run

---

## Frontend

cd front/myfinanciallife
npm install
npm run dev

---

# Author

Developed by **Nicolas Olaya**

Software Engineering student focused on build digital actives, financial software, and scalable application design.

---

# License

This project is for educational and portfolio purposes.