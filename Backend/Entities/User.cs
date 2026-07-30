using Microsoft.AspNetCore.Identity;

namespace Backend.Entities;

public class User : IdentityUser<Guid>
{
    public User()
    {
        Id = Guid.CreateVersion7();
    }

    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
}