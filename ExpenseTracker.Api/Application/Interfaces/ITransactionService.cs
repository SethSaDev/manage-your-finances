using ExpenseTracker.Api.Application.DTOs;

namespace ExpenseTracker.Api.Application.Interfaces;

public interface ITransactionService
{
    IEnumerable<TransactionDto> GetAll(string? category, string? sort, string? order);
    TransactionDto? GetById(Guid id);
    TransactionDto Create(TransactionRequest request);
    TransactionDto? Update(Guid id, TransactionRequest request);
    bool Delete(Guid id);
    SummaryDto GetSummary();
}
