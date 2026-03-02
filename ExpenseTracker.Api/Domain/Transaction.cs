namespace ExpenseTracker.Api.Domain;

public class Transaction
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Text { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Category { get; set; } = "Other";
    public DateOnly Date { get; set; } = DateOnly.FromDateTime(DateTime.Today);
}
