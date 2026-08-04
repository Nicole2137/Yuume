using Backend.DTOs;
using Backend.Entities;
using FluentValidation;
using Microsoft.AspNetCore.Identity;

namespace Backend.Controllers;

[ApiController]
[Route("api/confirm-email")]
public class ConfirmEmailController(
    IValidator<ConfirmEmailRequest> confirmEmailRequestValidator,
    UserManager<User> userManager) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> ConfirmEmail(ConfirmEmailRequest request, CancellationToken cancellationToken)
    {
        var validationResult = await confirmEmailRequestValidator.ValidateAsync(request, cancellationToken);

        if (!validationResult.IsValid)
        {
            var problemDetails = new ValidationProblemDetails(validationResult.ToDictionary());

            return ValidationProblem(problemDetails);
        }

        var user = await userManager.FindByIdAsync(request.UserId.ToString());

        if (user is null)
        {
            return BadRequest("Invalid confirmation link.");
        }

        var result = await userManager.ConfirmEmailAsync(user, request.Token);

        if (!result.Succeeded)
        {
            return BadRequest("Invalid or expired confirmation link.");
        }

        return Ok();
    }

}