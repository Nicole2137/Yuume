using System.Net;
using System.Net.Http.Json;
using Backend.IntegrationTests.Infrastructure;
using Backend.IntegrationTests.Mocks;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using RichardSzalay.MockHttp;

namespace Backend.IntegrationTests.Endpoints.Newsletter;

public class SubscribeTests(CustomWebApplicationFactory factory) : IClassFixture<CustomWebApplicationFactory>
{
    private readonly HttpClient _client = factory.CreateClient();

    [Fact]
    public async Task Subscribe_WhenEmailIsInvalid_ShouldReturn400BadRequest()
    {
        var invalidRequest = new { Email = "invalid-email-format" };

        var response = await _client.PostAsJsonAsync("api/newsletter", invalidRequest, cancellationToken: TestContext.Current.CancellationToken);

        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }

    [Fact]
    public async Task Subscribe_WhenExternalApiSucceeds_ShouldReturn200Ok()
    {
        var brevoMock = new BrevoApiMock();
        brevoMock.SetupSubscribeSuccess();
        
        var client = factory.CreateClientWithBrevoMock(brevoMock);

        var validRequest = new { Email = "test@example.com" };
        var response = await client.PostAsJsonAsync("api/newsletter", validRequest, cancellationToken: TestContext.Current.CancellationToken);
        
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}
