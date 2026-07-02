using Backend.Services;
using System.Net;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsletterController(INewsletterService newsletterService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Subscribe(NewsletterRequest request, CancellationToken cancellationToken)
    {
        var result = await newsletterService.SubscribeAsync(request.Email, cancellationToken);

        if (!result.IsSuccess)
        {
            var errorCode = (int)(result.StatusCode ?? HttpStatusCode.InternalServerError);

            return StatusCode(errorCode, new { error = result.ErrorMessage });
        }

        return Ok();
    }
}