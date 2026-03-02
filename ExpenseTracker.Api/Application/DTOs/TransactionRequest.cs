namespace ExpenseTracker.Api.Application.DTOs;

public record TransactionRequest(
    string Text,
    decimal Amount,
    string Category,
    DateOnly Date
);
