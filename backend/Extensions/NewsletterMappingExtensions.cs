using Backend.Services;

namespace Backend.Extensions;

public static class NewsletterMappingExtensions
{
    public static int ToHttpStatusCode(this NewsletterError error) => error switch
    {
        NewsletterError.ApiKeyMissing => 500,
        NewsletterError.ConnectionFailed => 503,
        NewsletterError.ExternalApiFailure => 502,
        NewsletterError.RequestCancelled => 499,
        _ => 500
    };
}