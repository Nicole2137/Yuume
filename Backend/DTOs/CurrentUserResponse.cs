namespace Backend.DTOs;

public record CurrentUserResponse(
    Guid Id,
    string Email
);