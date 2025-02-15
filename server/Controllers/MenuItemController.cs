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
            try {
                var items = await _menuItems.Find(FilterDefinition<MenuItem>.Empty).ToListAsync();
                return Ok(items);
            } catch(Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }

        // GET: api/MenuItem/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<MenuItem>> Get(string id)
        {
            try {
                var item = await _menuItems.Find(i => i.Id == id).FirstOrDefaultAsync();
                if (item == null) return NotFound($"MenuItem with ID {id} not found.");
                return Ok(item);
            } catch(Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }

        // POST: api/MenuItem
        [HttpPost]
        public async Task<ActionResult<MenuItem>> Post([FromBody] MenuItem menuItem)
        {
            try {
                if (!IsAuthorized()) return Forbid();
                Console.WriteLine($"New MenuItem: {menuItem.Name}, Price: {menuItem.Price}, Description: {menuItem.Description}");
                menuItem.Id = null;
                await _menuItems.InsertOneAsync(menuItem);
                return CreatedAtAction(nameof(Get), new { id = menuItem.Id }, menuItem);
            } catch(Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }

        // PUT: api/MenuItem/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<MenuItem>> Put(string id, [FromBody] MenuItem menuItem)
        {
            try {
                if (!IsAuthorized()) return Forbid();
                var result = await _menuItems.FindOneAndReplaceAsync(i => i.Id == id, menuItem);
                if (result == null) return NotFound($"MenuItem with ID {id} not found.");
                return Ok(menuItem);
            } catch(Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }

        // DELETE: api/MenuItem/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<MenuItem>> Delete(string id)
        {
            try {
                if (!IsAuthorized()) return Forbid();
                var result = await _menuItems.FindOneAndDeleteAsync(i => i.Id == id);
                if (result == null) return NotFound($"MenuItem with ID {id} not found.");
                return Ok(result);
            } catch(Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }

        // Helper method to check if user has required role
        private bool IsAuthorized()
        {
            var role = "owner"; // Hardcoded for testing
            return role == "owner" || role == "chef";
        }
    }
}
