using System;

namespace server.DTOS;

public class LoginDtos
{
    public required string Email { get; set; }
    public required string Password { get; set; }
}
