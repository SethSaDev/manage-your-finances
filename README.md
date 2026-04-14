# Manage Your Finances

A compact, full-stack app for tracking personal income and expenses. Built with a React frontend and a .NET 9 Minimal API backend, this project helps you record transactions, review spending by category, and export your data when needed.

## Highlights

- Clean, responsive UI for quick transaction entry and review
- Visual breakdown of expenses by category (interactive chart)
- Add, edit, delete, search, filter and sort transactions
- Export history to CSV and receive toast notifications for actions
- Lightweight in-memory backend suitable for demos and local use

## Technologies

- Frontend: React (Hooks + Context), Recharts for charts, React Hot Toast
- Backend: .NET 9 Minimal API using a simple in-memory store
- Styling: Plain CSS tuned for clarity and responsiveness

## Quick Start

Prerequisites: Node.js (v14+) and .NET 9 SDK.

1) Start the API

```bash
cd ExpenseTracker.Api
dotnet run
```

The API will listen on http://localhost:5200 by default.

2) Start the frontend

```bash
cd expense-tracker
npm install
npm start
```

Open http://localhost:3000 to use the app.

## Project Layout

Top-level structure (simplified):

```
manage-your-finances/
├─ expense-tracker/    # React app
│  ├─ public/
│  └─ src/
│     ├─ components/    # UI building blocks
│     ├─ features/      # Transactions feature (list, form, chart)
│     ├─ services/      # API client
│     └─ utils/         # helpers: formatting, CSV export, categories
└─ ExpenseTracker.Api/  # .NET Minimal API backend
```

## API Overview

Common endpoints provided by the backend:

- `GET  /api/transactions` — list transactions (supports `?category=`, `?sort=`, `?order=`)
- `GET  /api/transactions/summary` — totals for balance, income, expenses
- `GET  /api/transactions/{id}` — get a single transaction
- `POST /api/transactions` — create a new transaction
- `PUT  /api/transactions/{id}` — update an existing transaction
- `DELETE /api/transactions/{id}` — remove a transaction

## Notes

- The backend uses an in-memory store by default (suitable for demos). Persisting data requires swapping to a database.
- Feel free to adapt the UI and API routes to fit production needs.

If you want, I can also update the `package.json` name fields and the repo description to match "Manage Your Finances".
