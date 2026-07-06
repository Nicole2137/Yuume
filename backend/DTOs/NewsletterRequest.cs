using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs;

public record NewsletterRequest(
    [Required(ErrorMessage ="Email address is required.")]
    [EmailAddress(ErrorMessage = "Given Email address is invalid.")]
    string Email
);