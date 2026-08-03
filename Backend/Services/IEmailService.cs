namespace Backend.Services;

public interface IEmailService
{
    Task SendConfirmationEmailAsync(string email, string confirmationLink, CancellationToken cancellationToken = default);
}