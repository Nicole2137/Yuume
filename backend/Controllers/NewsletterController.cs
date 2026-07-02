using Microsoft.AspNetCore.Mvc;
using Backend.DTOs;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsletterController : ControllerBase
{
    [HttpPost]
    public IActionResult Subscribe([FromBody] NewsletterRequest request)
    {
        return Ok();
    }
}