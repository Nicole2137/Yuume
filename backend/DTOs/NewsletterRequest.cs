using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs;

public record NewsletterRequest(
    [Required]
    [EmailAddress]
    string Email
);