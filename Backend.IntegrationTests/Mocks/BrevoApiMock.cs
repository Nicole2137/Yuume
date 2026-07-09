using System.Net;
using RichardSzalay.MockHttp;

namespace Backend.IntegrationTests.Mocks;

public class BrevoApiMock(string contactsUrl = "https://api.brevo.com/v3/contacts") : MockHttpMessageHandler
{
    public void SetupSubscribeSuccess()
    {
        this.When(contactsUrl)
            .Respond(HttpStatusCode.OK, "application/json", "{}");
    }

    public void SetupSubscribeFailure(HttpStatusCode statusCode = HttpStatusCode.BadRequest)
    {
        this.When(contactsUrl).Respond(statusCode, "application/json", "{\"error\":\"API Error\"}");
    }

    public void SetupSubscribeException(Exception exception)
    {
        this.When(contactsUrl).Throw(exception);
    }
}
