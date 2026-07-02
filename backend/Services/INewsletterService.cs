using System.Net;

namespace Backend.Services;

public record NewsletterResult(bool IsSuccess, HttpStatusCode? StatusCode = null, string? ErrorMessage = null);

public interface INewsletterService
{
    Task<NewsletterResult> SubscribeAsync(string email, CancellationToken cancellationToken = default);
}