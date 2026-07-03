namespace Backend.Services;

public enum NewsletterError
{
    None,
    ApiKeyMissing,
    ExternalApiFailure,
    RequestCancelled,
    ConnectionFailed
}

public record NewsletterResult(bool IsSuccess, NewsletterError ErrorType = NewsletterError.None, string? ErrorMessage = null);

public interface INewsletterService
{
    Task<NewsletterResult> SubscribeAsync(string email, CancellationToken cancellationToken = default);
}