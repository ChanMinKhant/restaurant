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
            var users = await _users.Find(FilterDefinition<User>.Empty).ToListAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Get(string id)
        {
            var user = await _users.Find(u => u.Id == id).FirstOrDefaultAsync();
            if (user == null) return NotFound($"User with ID {id} not found.");
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<User>> Post([FromBody] User user)
        {
            if (user == null) return BadRequest("User data is required.");

            await _users.InsertOneAsync(user);
            return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<User>> Put(string id, [FromBody] User user)
        {
            if (user == null) return BadRequest("User data is required.");

            var result = await _users.FindOneAndReplaceAsync(u => u.Id == id, user);
            if (result == null) return NotFound($"User with ID {id} not found.");

            return Ok(user);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> Delete(string id)
        {
            var result = await _users.FindOneAndDeleteAsync(u => u.Id == id);
            if (result == null) return NotFound($"User with ID {id} not found.");

            return Ok(result);
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register([FromBody] User user)
        {
            if (user == null) return BadRequest("User data is required.");

            var existingUser = await _users.Find(u => u.Email == user.Email).FirstOrDefaultAsync();
            if (existingUser != null) return Conflict("User with this email already exists.");

            await _users.InsertOneAsync(user);
            return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
        }

        // login and logout methods will be added here
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login([FromBody] LoginDto loginRequest)
        {
            if (loginRequest == null) return BadRequest("Login data is required.");

            var user = await _users.Find(u => u.Email == loginRequest.Email && u.Password == loginRequest.Password).FirstOrDefaultAsync();
            if (user == null) return Unauthorized("Invalid credentials.");
            
            var cookieOptions = new CookieOptions
            {
                Expires = DateTime.UtcNow.AddDays(1),
                HttpOnly = true,
                Secure = true,
                Path = "/",
            };
            if (user.Id == null) return Unauthorized("Invalid credentials.");
            Response.Cookies.Append("user_id", user.Id, cookieOptions);
            Response.Cookies.Append("user_email", user.Email, cookieOptions);
            Response.Cookies.Append("user_role", user.Role, cookieOptions);
            return Ok(user);
        }

        [HttpPost("logout")]
        public ActionResult Logout()
        {
            Response.Cookies.Delete("user_id");
            Response.Cookies.Delete("user_email");
            Response.Cookies.Delete("user_role");
            return Ok();
        }
    }
}
