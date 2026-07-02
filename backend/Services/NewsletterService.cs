
using System.Net;
using System.Net.Http.Json;
using Microsoft.Extensions.Logging;

namespace Backend.Services;

public class NewsletterService(HttpClient client, ILogger<NewsletterService> logger) : INewsletterService
{
    public async Task<NewsletterResult> SubscribeAsync(string email, CancellationToken cancellationToken = default)
    {
        var payload = new
        {
            email,
            updateEnabled = true
        };

        try
        {
            var response = await client.PostAsJsonAsync("contacts", payload, cancellationToken);

            if (!response.IsSuccessStatusCode)
            {
                var errorContent = await response.Content.ReadAsStringAsync(cancellationToken);

                logger.LogWarning("Newsletter API returned error status {StatusCode}: {Response}",
                    response.StatusCode, errorContent);

                return new NewsletterResult(
                    IsSuccess: false,
                    StatusCode: response.StatusCode,
                    ErrorMessage: "Newsletter API returned error status"
                );
            }

            return new NewsletterResult(IsSuccess: true);
        }
        catch (OperationCanceledException)
        {
            logger.LogInformation("Request for {Email} got cancelled by client.", email);

            return new NewsletterResult(
               IsSuccess: false,
               StatusCode: (HttpStatusCode)499,
               ErrorMessage: "Request cancelled"
           );
        }
        catch (Exception exception)
        {
            logger.LogError(exception, "Error while trying to connect with newsletter service with {Email} address", email);
            return new NewsletterResult(
                IsSuccess: false,
                StatusCode: HttpStatusCode.InternalServerError,
                ErrorMessage: "Connection error. Try again later."
            );
        }
    }
}