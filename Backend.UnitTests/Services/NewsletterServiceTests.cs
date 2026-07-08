using System.Net;
using Backend.Services;
using Microsoft.Extensions.Logging.Abstractions;
using RichardSzalay.MockHttp;

namespace Backend.Tests.Services;

public class NewsletterServiceTests
{
    private readonly MockHttpMessageHandler _mockHttp;
    private readonly NewsletterService _service;

    public NewsletterServiceTests()
    {
        _mockHttp = new MockHttpMessageHandler();

        var httpClient = _mockHttp.ToHttpClient();
        httpClient.BaseAddress = new Uri("https://api.newsletter.com/");

        var logger = NullLogger<NewsletterService>.Instance;

        _service = new NewsletterService(httpClient, logger);
    }

    [Fact]
    public async Task SubscribeAsync_WhenApiReturnsSuccess_ShouldReturnSuccessResult()
    {
        _mockHttp.When(HttpMethod.Post, "*/contacts")
                .Respond(HttpStatusCode.OK);

        var result = await _service.SubscribeAsync("test@user.com", TestContext.Current.CancellationToken);

        Assert.True(result.IsSuccess);
        Assert.Equal(NewsletterError.None, result.ErrorType);
        Assert.Null(result.ErrorMessage);
    }

    [Fact]
    public async Task SubscribeAsync_WhenApiReturnsBadRequest_ShouldReturnExternalApiFailure()
    {
        _mockHttp.When(HttpMethod.Post, "*/contacts")
             .Respond(HttpStatusCode.BadRequest, "application/json", "{\"error\":\"invalid_email\"}");

        var result = await _service.SubscribeAsync("test@user.com", TestContext.Current.CancellationToken);

        Assert.False(result.IsSuccess);
        Assert.Equal(NewsletterError.ExternalApiFailure, result.ErrorType);
        Assert.Equal("Newsletter API returned error status", result.ErrorMessage);
    }

    [Fact]
    public async Task SubscribeAsync_WhenRequestIsCancelled_ShouldReturnRequestCancelled()
    {
        _mockHttp.When(HttpMethod.Post, "*/contacts")
            .Throw(new OperationCanceledException());

        var result = await _service.SubscribeAsync("test@user.com", TestContext.Current.CancellationToken);

        Assert.False(result.IsSuccess);
        Assert.Equal(NewsletterError.RequestCancelled, result.ErrorType);
        Assert.Equal("Request cancelled", result.ErrorMessage);
    }

    [Fact]
    public async Task SubscribeAsync_WhenNetworkFails_ShouldReturnConnectionFailed()
    {
        _mockHttp.When(HttpMethod.Post, "*/contacts")
             .Throw(new HttpRequestException());

        var result = await _service.SubscribeAsync("test@user.com", TestContext.Current.CancellationToken);

        Assert.False(result.IsSuccess);
        Assert.Equal(NewsletterError.ConnectionFailed, result.ErrorType);
        Assert.Equal("Connection error. Try again later.", result.ErrorMessage);
    }
}