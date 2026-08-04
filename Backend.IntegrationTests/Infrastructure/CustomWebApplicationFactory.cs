using Backend.IntegrationTests.Mocks;
using Backend.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.IntegrationTests.Infrastructure;

public class CustomWebApplicationFactory : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureAppConfiguration((_, config) =>
        {
            config.AddInMemoryCollection(new Dictionary<string, string?>
            {
                ["Brevo:BaseUrl"] = "https://api.brevo.com/v3/",
                ["Brevo:ApiKey"] = "test-api-key"
            });
        });
    }

    public HttpClient CreateClientWithBrevoMock(BrevoApiMock brevoMock)
    {
        var customizedFactory = WithWebHostBuilder(builder =>
        {
            builder.ConfigureTestServices(services =>
            {
                services.AddHttpClient<INewsletterService, NewsletterService>()
                        .ConfigurePrimaryHttpMessageHandler(() => brevoMock);
            });
        });

        return customizedFactory.CreateClient();
    }
}