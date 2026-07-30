namespace Backend.DTOs;

public record UserRegisterRequest(
    string Email,
    string Password
);