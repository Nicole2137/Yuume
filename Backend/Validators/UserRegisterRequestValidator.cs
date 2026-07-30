using Backend.DTOs;
using FluentValidation;

namespace Backend.Validators;

public class UserRegisterRequestValidator : AbstractValidator<UserRegisterRequest>
{
    public UserRegisterRequestValidator()
    {
        RuleFor(request => request.Email)
        .Cascade(CascadeMode.Stop)
        .NotEmpty().WithMessage("Email address is required.")
        .EmailAddress().WithMessage("Given email address is invalid.");

        RuleFor(request => request.Password)
        .Cascade(CascadeMode.Stop)
        .NotEmpty().WithMessage("Password is required.")
        .MinimumLength(8).WithMessage("Password must contain at least 8 characters.")
        .MaximumLength(100).WithMessage("Password is too long.")
        .Matches(@"\p{Lu}").WithMessage("Password must contain an uppercase letter.")
        .Matches("[0-9]").WithMessage("Password must contain a number.")
        .Matches(@"[\p{P}\p{S}]").WithMessage("Password must contain a special character.");
    }
}