using Backend.DTOs;
using FluentValidation;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RegisterController(IValidator<UserRegisterRequest> userRegisterRequestValidator) : ControllerBase
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

        return Ok();
    }
}