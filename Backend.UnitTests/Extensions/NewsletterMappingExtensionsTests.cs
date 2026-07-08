using Backend.Extensions;
using Backend.Services;
using Xunit;

namespace Backend.Tests.Extensions;

public class NewsletterMappingExtensionsTests
{
    [Theory]
    [InlineData(NewsletterError.ConnectionFailed, 503)]
    [InlineData(NewsletterError.ExternalApiFailure, 502)]
    [InlineData(NewsletterError.RequestCancelled, 499)]
    [InlineData(NewsletterError.None, 500)]
    public void ToHttpStatusCode_ShouldReturnExpectedStatusCode(NewsletterError error, int expectedStatusCode)
    {
        var result = error.ToHttpStatusCode();

        Assert.Equal(expectedStatusCode, result);
    }
}