namespace Backend.DTOs;

public record UserLoginRequest(
    string Email,
    string Password,
    bool RememberMe
);