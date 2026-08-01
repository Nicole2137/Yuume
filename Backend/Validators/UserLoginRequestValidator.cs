using Backend.DTOs;
using FluentValidation;

namespace Backend.Validators;

public class UserLoginRequestValidator : AbstractValidator<UserLoginRequest>
{
    public UserLoginRequestValidator()
    {
        RuleFor(request => request.Email)
        .Cascade(CascadeMode.Stop)
        .NotEmpty().WithMessage("Email address is required.")
        .EmailAddress().WithMessage("Given email address is invalid.");

        RuleFor(request => request.Password)
        .Cascade(CascadeMode.Stop)
        .NotEmpty().WithMessage("Password is required.");

    }
}