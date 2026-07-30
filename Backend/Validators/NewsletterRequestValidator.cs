

using Backend.DTOs;
using FluentValidation;

namespace Backend.Validators;

public class NewsletterRequestValidator : AbstractValidator<NewsletterRequest>
{
    public NewsletterRequestValidator()
    {
        RuleFor(request => request.Email)
        .Cascade(CascadeMode.Stop)
        .NotEmpty().WithMessage("Email address is required.")
        .EmailAddress().WithMessage("Given email address is invalid.");
    }
}