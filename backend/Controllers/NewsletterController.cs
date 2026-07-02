using Microsoft.AspNetCore.Mvc;
using Backend.DTOs;
using System.Net.Http.Json;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsletterController(IConfiguration configuration, IHttpClientFactory httpClientFactory) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Subscribe([FromBody] NewsletterRequest request)
    {
        var apiKey = configuration["NewsletterApiKey"];

        if (string.IsNullOrWhiteSpace(apiKey))
        {
            return StatusCode(500, new { error = "API key is missing" });
        }

        var client = httpClientFactory.CreateClient();
        client.DefaultRequestHeaders.Add("api-key", apiKey);

        var payload = new
        {
            email = request.Email,
            updateEnabled = true
        };

        try
        {
            var response = await client.PostAsJsonAsync("https://api.brevo.com/v3/contacts", payload);

            if (!response.IsSuccessStatusCode)
            {
                var errorContent = await response.Content.ReadAsStringAsync();
                return StatusCode((int)response.StatusCode, new { error = errorContent });
            }

            return Ok();
        }
        catch (Exception exception)
        {
            return StatusCode(500, new { error = $"Connection error: {exception.Message}" });
        }
    }
}