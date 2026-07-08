using System.Net;
using System.Net.Http.Json;
using Backend.IntegrationTests.Infrastructure;

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
}
