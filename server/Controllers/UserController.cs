using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using server.Data;
using server.DTOS;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMongoCollection<User> _users;

        public UserController(MongoDbContext mongoDbContext)
        {
            _users = mongoDbContext.Database?.GetCollection<User>("Users")
                     ?? throw new InvalidOperationException("Database connection is not initialized.");
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> Get()
        {
            try
            {
                var users = await _users.Find(FilterDefinition<User>.Empty).ToListAsync();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Get(string id)
        {
            try
            {
                var user = await _users.Find(u => u.Id == id).FirstOrDefaultAsync();
                if (user == null) return NotFound($"User with ID {id} not found.");
                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<User>> Put(string id, [FromBody] User user)
        {
            try
            {
                if (user == null) return BadRequest("User data is required.");

                var result = await _users.FindOneAndReplaceAsync(u => u.Id == id, user);
                if (result == null) return NotFound($"User with ID {id} not found.");

                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> Delete(string id)
        {
            try
            {
                var result = await _users.FindOneAndDeleteAsync(u => u.Id == id);
                if (result == null) return NotFound($"User with ID {id} not found.");

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register([FromBody] User user)
        {
            try
            {
                if (user == null) return BadRequest("User data is required.");

                var existingUser = await _users.Find(u => u.Email == user.Email).FirstOrDefaultAsync();
                if (existingUser != null) return Conflict("User with this email already exists.");
                user.Id = null;
                await _users.InsertOneAsync(user);
                return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login([FromBody] LoginDto loginRequest)
        {
            try
            {
                if (loginRequest == null) return BadRequest("Login data is required.");

                var user = await _users.Find(u => u.Email == loginRequest.Email && u.Password == loginRequest.Password).FirstOrDefaultAsync();
                if (user == null) return Unauthorized("Invalid credentials.");
                
                var cookieOptions = new CookieOptions
                {
                    Expires = DateTime.UtcNow.AddDays(1),
                    Path = "/",
                };
                if (user.Id == null) return Unauthorized("Invalid credentials.");
                Response.Cookies.Append("user_id", user.Id, cookieOptions);
                Response.Cookies.Append("user_email", user.Email, cookieOptions);
                Response.Cookies.Append("user_role", user.Role, cookieOptions);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("logout")]
        public ActionResult Logout()
        {
            try
            {
                Response.Cookies.Delete("user_id");
                Response.Cookies.Delete("user_email");
                Response.Cookies.Delete("user_role");
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
