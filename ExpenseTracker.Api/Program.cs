using ExpenseTracker.Api.Api.Endpoints;
using ExpenseTracker.Api.Application.Interfaces;
using ExpenseTracker.Api.Application.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<ITransactionService, TransactionService>();
builder.Services.AddCors(o => o.AddDefaultPolicy(p =>
    p.WithOrigins("http://localhost:3000")
     .AllowAnyMethod()
     .AllowAnyHeader()));

var app = builder.Build();
app.UseCors();
app.MapTransactionEndpoints();
app.Run();
