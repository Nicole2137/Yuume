using Backend.DTOs;
using Backend.Entities;
using FluentValidation;
using Microsoft.AspNetCore.Identity;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LoginController(IValidator<UserLoginRequest> userLoginRequestValidator, UserManager<User> userManager, SignInManager<User> signInManager) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Login(UserLoginRequest request,
        CancellationToken cancellationToken)
    {
        var validationResult =
            await userLoginRequestValidator.ValidateAsync(request, cancellationToken);

        if (!validationResult.IsValid)
        {
            var problemDetails =
                new ValidationProblemDetails(validationResult.ToDictionary());

            return ValidationProblem(problemDetails);
        }

        var user = await userManager.FindByEmailAsync(request.Email);

        if (user is null)
        {
            return Unauthorized("Invalid email or password.");
        }

        var result = await signInManager.PasswordSignInAsync(
            user,
            request.Password,
            isPersistent: request.RememberMe,
            lockoutOnFailure: true
        );
        
        if (result.IsNotAllowed)
        {
            return Unauthorized("You must confirm your email before signing in.");
        }

        if (!result.Succeeded)
        {
            return Unauthorized("Invalid email or password.");
        }

        return Ok();
    }

}