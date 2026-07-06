using System.ComponentModel.DataAnnotations;

namespace Backend.Options;

public class NewsletterOptions
{
    [Required(ErrorMessage = "Newsletter Address is required.")]
    [Url(ErrorMessage = "Given URL is invalid.")]
    public string BaseUrl { get; set; } = string.Empty;

    [Required(ErrorMessage = "Newsletter API Key is required.")]
    public string ApiKey { get; set; } = string.Empty;
}