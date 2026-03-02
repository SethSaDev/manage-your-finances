using ExpenseTracker.Api.Application.DTOs;
using ExpenseTracker.Api.Application.Interfaces;

namespace ExpenseTracker.Api.Api.Endpoints;

public static class TransactionEndpoints
{
    public static void MapTransactionEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/transactions").WithTags("Transactions");

        group.MapGet("/", (ITransactionService svc, string? category, string? sort, string? order) =>
            Results.Ok(svc.GetAll(category, sort, order)));

        group.MapGet("/summary", (ITransactionService svc) =>
            Results.Ok(svc.GetSummary()));

        group.MapGet("/{id:guid}", (ITransactionService svc, Guid id) =>
            svc.GetById(id) is { } t ? Results.Ok(t) : Results.NotFound());

        group.MapPost("/", (ITransactionService svc, TransactionRequest req) =>
        {
            var created = svc.Create(req);
            return Results.Created($"/api/transactions/{created.Id}", created);
        });

        group.MapPut("/{id:guid}", (ITransactionService svc, Guid id, TransactionRequest req) =>
            svc.Update(id, req) is { } t ? Results.Ok(t) : Results.NotFound());

        group.MapDelete("/{id:guid}", (ITransactionService svc, Guid id) =>
            svc.Delete(id) ? Results.NoContent() : Results.NotFound());
    }
}
