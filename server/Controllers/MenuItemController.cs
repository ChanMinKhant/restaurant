using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuItemController : ControllerBase
    {
        private readonly IMongoCollection<MenuItem> _menuItems;

        public MenuItemController(MongoDbContext mongoDbContext)
        {
            _menuItems = mongoDbContext.Database?.GetCollection<MenuItem>("MenuItems")
                         ?? throw new InvalidOperationException("Database connection is not initialized.");
        }
        
        // GET: api/MenuItem
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuItem>>> Get()
        {
            var items = await _menuItems.Find(FilterDefinition<MenuItem>.Empty).ToListAsync();
            return Ok(items);
        }

        // GET: api/MenuItem/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<MenuItem>> Get(string id)
        {
            var item = await _menuItems.Find(i => i.Id == id).FirstOrDefaultAsync();
            if (item == null) return NotFound($"MenuItem with ID {id} not found.");
            return Ok(item);
        }

        // POST: api/MenuItem
        [HttpPost]
        public async Task<ActionResult<MenuItem>> Post([FromBody] MenuItem menuItem)
        {
            if (!IsAuthorized()) return Forbid();

            await _menuItems.InsertOneAsync(menuItem);
            return CreatedAtAction(nameof(Get), new { id = menuItem.Id }, menuItem);
        }

        // PUT: api/MenuItem/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<MenuItem>> Put(string id, [FromBody] MenuItem menuItem)
        {
            if (!IsAuthorized()) return Forbid();

            var result = await _menuItems.FindOneAndReplaceAsync(i => i.Id == id, menuItem);
            if (result == null) return NotFound($"MenuItem with ID {id} not found.");
            return Ok(menuItem);
        }

        // DELETE: api/MenuItem/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<MenuItem>> Delete(string id)
        {
            if (!IsAuthorized()) return Forbid();

            var result = await _menuItems.FindOneAndDeleteAsync(i => i.Id == id);
            if (result == null) return NotFound($"MenuItem with ID {id} not found.");
            return Ok(result);
        }

        // Helper method to check if user has required role
        private bool IsAuthorized()
        {
            // var role = Request.Headers["Role"].ToString().ToLower();
            var role = "owner"; // Hardcoded for testing
            return role == "owner" || role == "chef";
        }
    }
}
