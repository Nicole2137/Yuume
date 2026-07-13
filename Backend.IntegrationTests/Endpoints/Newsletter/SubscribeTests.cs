using System.Net;
using System.Net.Http.Json;
using Backend.IntegrationTests.Infrastructure;
using Backend.IntegrationTests.Mocks;

namespace Backend.IntegrationTests.Endpoints.Newsletter;

public class SubscribeTests(CustomWebApplicationFactory factory) : IClassFixture<CustomWebApplicationFactory>
{
    private readonly HttpClient _client = factory.CreateClient();

    private async Task<HttpResponseMessage> SendRequestAsync(Action<BrevoApiMock> configureMock)
    {
        var brevoMock = new BrevoApiMock();
        configureMock(brevoMock);

        var client = factory.CreateClientWithBrevoMock(brevoMock);

        var validRequest = new { Email = "test@example.com" };

        return await client.PostAsJsonAsync("api/newsletter", validRequest, cancellationToken: TestContext.Current.CancellationToken);
    }

    [Fact]
    public async Task Subscribe_WhenEmailIsInvalid_ShouldReturn400BadRequest()
    {
        var invalidRequest = new { Email = "invalid-email-format" };

        var response = await _client.PostAsJsonAsync("api/newsletter", invalidRequest, cancellationToken: TestContext.Current.CancellationToken);

        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }

    [Fact]
    public async Task Subscribe_WhenExternalApiReturnsError_ShouldReturnErrorStatusCode()
    {
        var response = await SendRequestAsync(mock => mock.SetupSubscribeFailure());

        Assert.Equal(HttpStatusCode.BadGateway, response.StatusCode);
    }

    [Fact]
    public async Task Subscribe_WhenExternalApiSucceeds_ShouldReturn200Ok()
    {
        var response = await SendRequestAsync(mock => mock.SetupSubscribeSuccess());

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task Subscribe_WhenConnectionFailed_ShouldReturnErrorStatusCode()
    {
        var response = await SendRequestAsync(mock => mock.SetupSubscribeException(new HttpRequestException()));

        Assert.Equal(HttpStatusCode.ServiceUnavailable, response.StatusCode);
    }

    [Fact]
    public async Task Subscribe_WhenOperationCancelled_ShouldReturnErrorStatusCode()
    {
        var response = await SendRequestAsync(mock => mock.SetupSubscribeException(new OperationCanceledException()));

        Assert.Equal((HttpStatusCode)499, response.StatusCode);
    }

}
