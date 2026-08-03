using Backend.DTOs;
using Backend.Entities;
using Backend.Options;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.WebUtilities;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RegisterController(IValidator<UserRegisterRequest> userRegisterRequestValidator, UserManager<User> userManager, IOptions<FrontendOptions> frontendOptions) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Register(UserRegisterRequest request,
        CancellationToken cancellationToken)
    {
        var validationResult =
            await userRegisterRequestValidator.ValidateAsync(request, cancellationToken);

        if (!validationResult.IsValid)
        {
            var problemDetails =
                new ValidationProblemDetails(validationResult.ToDictionary());

            return ValidationProblem(problemDetails);
        }

        var user = new User
        {
            Email = request.Email,
            UserName = request.Email,
            TermsAcceptedAt = DateTimeOffset.UtcNow,
        };

        var result =
           await userManager.CreateAsync(user, request.Password);

        if (!result.Succeeded)
        {
            return BadRequest(result.Errors);
        }

        var token = await userManager.GenerateEmailConfirmationTokenAsync(user);

        var confirmationLink = QueryHelpers.AddQueryString(
            $"{frontendOptions.Value.BaseUrl}/confirm-email",
            new Dictionary<string, string?>
            {
                ["userId"] = user.Id.ToString(),
                ["token"] = token
            });

        return Ok();

    }
}