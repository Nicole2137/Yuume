using Backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddHttpClient<INewsletterService, NewsletterService>((serviceProvider, client) =>
{
    var configuration = serviceProvider.GetRequiredService<IConfiguration>();

    var (baseUrl, apiKey) = (configuration["Newsletter:BaseUrl"], configuration["NewsletterApiKey"]);

    if (string.IsNullOrWhiteSpace(baseUrl))
    {
        throw new InvalidOperationException("Base URL for newsletter service is missing in configuration.");
    }

    if (string.IsNullOrWhiteSpace(apiKey))
    {
        throw new InvalidOperationException("API key for newsletter service is missing in configuration.");
    }

    client.BaseAddress = new Uri(baseUrl);
    client.DefaultRequestHeaders.Add("api-key", apiKey);
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
