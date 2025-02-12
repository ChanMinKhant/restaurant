using System;

namespace server.DTOS;

public class RegisterDto
{
    public required string Email { get; set; }
    public required string Password { get; set; }
    public required string Name { get; set; }
    public string Role { get; set; } = "customer";
}
