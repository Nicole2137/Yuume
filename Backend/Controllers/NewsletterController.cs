using Backend.Services;
using Backend.Extensions;
using Backend.DTOs;
using FluentValidation;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsletterController(IValidator<NewsletterRequest> newsletterRequestValidator, INewsletterService newsletterService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Subscribe(NewsletterRequest request, CancellationToken cancellationToken)
    {
        var validationResult =
            await newsletterRequestValidator.ValidateAsync(request, cancellationToken);

        if (!validationResult.IsValid)
        {
            var problemDetails =
                new ValidationProblemDetails(validationResult.ToDictionary());

            return ValidationProblem(problemDetails);
        }

        var result = await newsletterService.SubscribeAsync(request.Email, cancellationToken);

        if (result.IsSuccess) return Ok();

        return StatusCode(result.ErrorType.ToHttpStatusCode(), new { error = result.ErrorMessage });
    }
}