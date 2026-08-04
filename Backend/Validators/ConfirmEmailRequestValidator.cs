using Backend.DTOs;
using FluentValidation;

namespace Backend.Validators;

public class ConfirmEmailRequestValidator:AbstractValidator<ConfirmEmailRequest>
{
    public ConfirmEmailRequestValidator()
    {
        RuleFor(request => request.UserId).Cascade(CascadeMode.Stop).NotEmpty().WithMessage("User ID is required.");
        
        RuleFor(request => request.Token).Cascade(CascadeMode.Stop).NotEmpty()
            .WithMessage("Confirmation token is required.");
    }
}