using System.ComponentModel.DataAnnotations;

namespace Backend.Options;

public class FrontendOptions
{
    [Required(ErrorMessage = "Frontend BaseUrl is required.")]
    [Url(ErrorMessage = "Frontend BaseUrl is invalid.")]
    public string BaseUrl { get; set; } = string.Empty;
}