namespace ExpenseTracker.Api.Application.DTOs;

public record TransactionDto(
    Guid Id,
    string Text,
    decimal Amount,
    string Category,
    DateOnly Date
);
