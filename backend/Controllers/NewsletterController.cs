using Backend.Services;
using Backend.Extensions;
using Backend.DTOs;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsletterController(INewsletterService newsletterService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Subscribe(NewsletterRequest request, CancellationToken cancellationToken)
    {
        var result = await newsletterService.SubscribeAsync(request.Email, cancellationToken);

        if (result.IsSuccess) return Ok();

        return StatusCode(result.ErrorType.ToHttpStatusCode(), new { error = result.ErrorMessage });
    }
}