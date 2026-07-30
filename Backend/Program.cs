using Backend.Options;
using Backend.Services;
using Backend.Validators;
using Backend.Data;
using Backend.Entities;
using FluentValidation;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddOptions<NewsletterOptions>()
    .Bind(builder.Configuration.GetSection("Newsletter"))
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services.AddHttpClient<INewsletterService, NewsletterService>((serviceProvider, client) =>
{
    var options = serviceProvider.GetRequiredService<IOptions<NewsletterOptions>>().Value;

    client.BaseAddress = new Uri(options.BaseUrl);
    client.DefaultRequestHeaders.Add("api-key", options.ApiKey);
});

builder.Services.AddValidatorsFromAssemblyContaining<UserRegisterRequestValidator>();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseNpgsql(
       builder.Configuration.GetConnectionString("DefaultConnection")
   );
});

builder.Services
    .AddIdentity<User, IdentityRole<Guid>>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
