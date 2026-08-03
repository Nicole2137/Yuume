using Backend.Options;
using Microsoft.Extensions.Options;

namespace Backend.Services;

public class EmailService(HttpClient httpClient, IOptions<BrevoOptions> brevoOptions) : IEmailService
{
    public async Task SendConfirmationEmailAsync(string email, string confirmationLink, CancellationToken cancellationToken = default)
    {
        var options = brevoOptions.Value;

        var payload = new
        {
            sender = new
            {
                name = options.SenderName,
                email = options.SenderEmail
            },
            to = new[]
            {
            new { email }
            },
            templateId = options.ConfirmationTemplateId,
            @params = new
            {
                confirmationLink
            }
        };

        var response = await httpClient.PostAsJsonAsync(
            "smtp/email",
            payload,
            cancellationToken
        );

        response.EnsureSuccessStatusCode();
    }
}