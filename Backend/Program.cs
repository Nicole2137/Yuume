using Backend.Options;
using Backend.Services;
using Backend.Validators;
using FluentValidation;
using Microsoft.Extensions.Options;

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

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
