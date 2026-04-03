# Expense Tracker

A full-stack expense tracking application built with **React** and **.NET 9 Minimal API**. Track income and expenses, visualize spending by category, and manage your finances with an intuitive interface.

![React](https://img.shields.io/badge/React-16.12-61DAFB?logo=react&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-9.0-512BD4?logo=dotnet&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Features

- **Dashboard** -- View total balance, income, and expenses at a glance
- **Transaction Management** -- Add, edit, and delete income/expense entries
- **Category Tracking** -- Organize transactions by category (Food, Transport, Housing, Entertainment, Health, Shopping, Income, Other)
- **Expense Chart** -- Interactive pie chart visualization of expenses by category
- **Search & Filter** -- Search transactions by description, filter by category
- **Sort** -- Sort transactions by date or amount (ascending/descending)
- **CSV Export** -- Export transaction history to CSV file
- **Toast Notifications** -- Real-time success/error feedback
- **Error Boundary** -- Graceful error handling with recovery option

## Tech Stack

### Frontend
- React 16 with Hooks & Context API
- Recharts (pie chart visualization)
- React Hot Toast (notifications)
- CSS3 (custom styling, responsive)

### Backend
- .NET 9 Minimal API
- Clean Architecture (Domain / Application / Api layers)
- In-memory data store
- RESTful endpoints with filtering & sorting

## Project Structure

```
ExpenseTracker/
├── expense-tracker/          # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components (Button, Input, Modal, Select)
│   │   ├── features/         # Transaction feature (list, form, chart, edit modal)
│   │   ├── services/         # API client
│   │   ├── store/            # Context API + useReducer state management
│   │   └── utils/            # Formatting, categories, CSV export
│   └── public/
├── ExpenseTracker.Api/       # .NET backend
│   ├── Api/Endpoints/        # Minimal API route definitions
│   ├── Application/          # DTOs, interfaces, services
│   └── Domain/               # Transaction entity
└── README.md
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)

### Run the Backend

```bash
cd ExpenseTracker.Api
dotnet run
```

The API starts at `http://localhost:5200`.

### Run the Frontend

```bash
cd expense-tracker
npm install
npm start
```

The app opens at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/transactions` | Get all transactions (supports `?category=`, `?sort=`, `?order=`) |
| GET | `/api/transactions/summary` | Get balance, income, expense totals |
| GET | `/api/transactions/{id}` | Get transaction by ID |
| POST | `/api/transactions` | Create a new transaction |
| PUT | `/api/transactions/{id}` | Update a transaction |
| DELETE | `/api/transactions/{id}` | Delete a transaction |
