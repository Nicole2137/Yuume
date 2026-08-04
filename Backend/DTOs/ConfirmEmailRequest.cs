namespace Backend.DTOs;

public record ConfirmEmailRequest
(
    Guid UserId,
    string Token
);