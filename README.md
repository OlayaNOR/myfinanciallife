# My Financial Life

# Overview

MyFinancialLife is a personal financial management backend designed to support a modern fintech-style application.
The system provides secure authentication, financial record management, and analytical dashboard metrics that allow users to track their financial activity over time.

The backend is built with a clean and scalable architecture that separates responsibilities across layers, making the system easier to maintain, extend, and test.

At its current stage, the backend already supports a fully functional MVP, including authentication, financial record management, and financial analytics endpoints that can be consumed by a frontend application.

# Current Backend Capabilities

The backend currently implements the following core modules and architectural components:
	•	Authentication system
	•	User management
	•	Financial records CRUD
	•	Dashboard analytics
	•	JWT-based security
	•	DTO and Mapper pattern
	•	UseCase-based application logic

Each component is explained in detail below.

 # Authentication (Auth)

The authentication module is responsible for verifying user credentials and issuing secure tokens that allow access to protected resources.

Features
	•	User login with email and password
	•	Secure password storage using hashing
	•	JWT token generation after successful authentication
	•	Stateless authentication model

Authentication Flow
	1.	A user sends their credentials to the login endpoint.
	2.	The backend verifies the email and password.
	3.	If the credentials are valid, a JWT token is generated.
	4.	The token is returned to the client.
	5.	The client includes the token in future requests using the Authorization header.

Example header:
```http
Authorization: Bearer <jwt-token>
```
# Users Module

The Users module manages user-related operations within the application.

Responsibilities
	•	User registration
	•	User retrieval
	•	Access to authenticated user information

Typical Endpoints

Examples of endpoints provided by this module include:
	•	User registration
	•	Retrieve authenticated user information
	•	Retrieve user details

The module ensures that sensitive information such as passwords is never exposed in API responses.

# Financial Records CRUD

The FinancialRecord module represents the core business functionality of the system.

Users can store and manage different types of financial records, such as:
	•	Income
	•	Expenses
	•	Investments
	•	Debts

Supported Operations

The system allows users to perform standard CRUD operations:

Create
	•	Add a new financial transaction

Read
	•	Retrieve all financial records
	•	Filter records by type
	•	Retrieve records within a date range

Delete
	•	Remove a record by its identifier

Each record contains information such as:
	•	Description
	•	Amount
	•	Date
	•	Category
	•	Type of financial record
	•	Associated user

All financial records are tied to a specific authenticated user, ensuring proper data isolation.

# Dashboard Metrics

The dashboard module provides aggregated financial analytics derived from the stored financial records.

Instead of returning raw transactional data, this module computes useful financial insights for the user.

Examples of metrics provided
	•	Total income
	•	Total expenses
	•	Account balance
	•	Total transactions
	•	Expenses grouped by category
	•	Monthly financial summaries
	•	Transactions filter by date

These metrics allow the frontend to easily render dashboards and charts such as:
	•	Financial summaries
	•	Expense breakdowns
	•	Monthly performance charts
	•	Transaction history tables

All dashboard metrics are computed efficiently using optimized database queries.

# JWT Security

Security is implemented using JSON Web Tokens (JWT).

JWT provides a stateless authentication mechanism that allows secure communication between the frontend and backend.

Key characteristics
	•	Tokens are issued after successful login
	•	Tokens are required for protected endpoints
	•	Each request must include the token in the Authorization header
	•	The backend validates the token before processing the request

Security advantages
	•	No server-side session storage required
	•	Scalable authentication model
	•	Industry-standard security approach for REST APIs

Protected endpoints cannot be accessed without a valid token.

# DTO and Mapper Pattern

The backend uses the DTO (Data Transfer Object) pattern to separate internal domain models from external API contracts.

Why DTOs are used

Directly exposing entities can lead to several issues:
	•	Exposure of sensitive fields
	•	Tight coupling between database models and API responses
	•	Reduced flexibility when evolving the API

DTOs solve these issues by providing a controlled structure for API input and output.

Mapper Layer

Mappers convert between:
	•	Request DTOs → Commands
	•	Domain entities → Response DTOs

This layer ensures that transformations are handled in a consistent and maintainable way.

Example responsibilities of mappers include:
	•	Converting API requests into application commands
	•	Formatting domain entities into API responses
	•	Hiding internal implementation details

# Architectural Approach

The project follows a layered architecture inspired by Clean Architecture and Domain-driven design principles.

Typical structure:

domain
application
infrastructure
presentation

Each layer has a clearly defined role:

Domain
	•	Core entities and business rules

Application
	•	UseCases and application workflows

Infrastructure
	•	Database repositories and external integrations

Presentation
	•	Controllers and API endpoints

This separation ensures the system remains modular and scalable.

# Current Status

At this stage, the backend provides a fully functional MVP API that supports:
	•	Secure user authentication
	•	Financial record management
	•	Analytical dashboard metrics
	•	JWT-protected endpoints
	•	Clean architectural separation

The backend is now ready to be integrated with a frontend application that will consume these APIs and present financial data to the user.

# Purpose of the Project

This project serves both as:
	•	A learning platform for clean backend architecture
	•	A portfolio project demonstrating modern backend development practices

Technologies used include:
	•	Spring Boot
	•	REST API design
	•	JWT authentication
	•	Relational databases
	•	Clean architecture principles