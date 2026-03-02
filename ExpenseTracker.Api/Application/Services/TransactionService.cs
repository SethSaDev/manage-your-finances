using ExpenseTracker.Api.Application.DTOs;
using ExpenseTracker.Api.Application.Interfaces;
using ExpenseTracker.Api.Domain;

namespace ExpenseTracker.Api.Application.Services;

public class TransactionService : ITransactionService
{
    private readonly List<Transaction> _store = [];

    public IEnumerable<TransactionDto> GetAll(string? category, string? sort, string? order)
    {
        var query = _store.AsEnumerable();

        if (!string.IsNullOrWhiteSpace(category))
            query = query.Where(t => t.Category.Equals(category, StringComparison.OrdinalIgnoreCase));

        query = (sort?.ToLower(), order?.ToLower()) switch
        {
            ("amount", "asc")  => query.OrderBy(t => Math.Abs(t.Amount)),
            ("amount", _)      => query.OrderByDescending(t => Math.Abs(t.Amount)),
            ("date",   "asc")  => query.OrderBy(t => t.Date),
            _                  => query.OrderByDescending(t => t.Date),
        };

        return query.Select(ToDto);
    }

    public TransactionDto? GetById(Guid id) =>
        _store.FirstOrDefault(t => t.Id == id) is { } t ? ToDto(t) : null;

    public TransactionDto Create(TransactionRequest req)
    {
        var t = new Transaction
        {
            Text = req.Text,
            Amount = req.Amount,
            Category = req.Category,
            Date = req.Date
        };
        _store.Add(t);
        return ToDto(t);
    }

    public TransactionDto? Update(Guid id, TransactionRequest req)
    {
        var t = _store.FirstOrDefault(t => t.Id == id);
        if (t is null) return null;

        t.Text = req.Text;
        t.Amount = req.Amount;
        t.Category = req.Category;
        t.Date = req.Date;
        return ToDto(t);
    }

    public bool Delete(Guid id)
    {
        var t = _store.FirstOrDefault(t => t.Id == id);
        if (t is null) return false;
        _store.Remove(t);
        return true;
    }

    public SummaryDto GetSummary()
    {
        var income  = _store.Where(t => t.Amount > 0).Sum(t => t.Amount);
        var expense = _store.Where(t => t.Amount < 0).Sum(t => Math.Abs(t.Amount));
        return new SummaryDto(income - expense, income, expense);
    }

    private static TransactionDto ToDto(Transaction t) =>
        new(t.Id, t.Text, t.Amount, t.Category, t.Date);
}
