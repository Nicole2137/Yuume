using System.ComponentModel.DataAnnotations;

namespace Backend.Options;

public class BrevoOptions
{
    [Required(ErrorMessage = "Brevo Address is required.")]
    [Url(ErrorMessage = "Brevo API URL is invalid.")]
    public string BaseUrl { get; set; } = string.Empty;

    [Required(ErrorMessage = "Brevo API Key is required.")]
    public string ApiKey { get; set; } = string.Empty;

    [Required(ErrorMessage = "Brevo sender name is required.")]
    public string SenderName { get; set; } = string.Empty;

    [Required(ErrorMessage = "Brevo sender email is required.")]
    [EmailAddress(ErrorMessage = "Brevo sender email is invalid.")]
    public string SenderEmail { get; set; } = string.Empty;

    [Range(1, int.MaxValue, ErrorMessage = "Brevo confirmation template ID is invalid.")]
    public int ConfirmationTemplateId { get; set; }
}