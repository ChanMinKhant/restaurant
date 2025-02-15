using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IMongoCollection<Order> _orders;
        private readonly IMongoCollection<MenuItem> _menuItems;

        public OrderController(MongoDbContext mongoDbContext)
        {
            _orders = mongoDbContext.Database?.GetCollection<Order>("Orders")
                      ?? throw new InvalidOperationException("Database connection is not initialized.");
            _menuItems = mongoDbContext.Database?.GetCollection<MenuItem>("MenuItems")
                         ?? throw new InvalidOperationException("Database connection is not initialized.");
        }

        // GET: api/Order
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> Get()
        {
            // ...existing code...
            var orders = await _orders.Find(FilterDefinition<Order>.Empty).ToListAsync();
            return Ok(orders);
        }

        // GET: api/Order/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> Get(string id)
        {
            // ...existing code...
            var order = await _orders.Find(o => o.Id == id).FirstOrDefaultAsync();
            if (order == null) return NotFound($"Order with ID {id} not found.");
            return Ok(order);
        }

        // POST: api/Order
        [HttpPost]
        public async Task<ActionResult<Order>> Post([FromBody] Order order)
        {
            if (order.MenuItemIds == null || order.MenuItemIds.Count == 0)
                return BadRequest("At least one MenuItem is required.");

            double totalPrice = 0;
            order.Id = null;
            foreach (var menuItemId in order.MenuItemIds)
            {
                var menuItem = await _menuItems.Find(m => m.Id == menuItemId).FirstOrDefaultAsync();
                if (menuItem == null)
                    return NotFound($"MenuItem with ID {menuItemId} not found.");
                if (menuItem.Stock <= 0)
                    return BadRequest($"MenuItem '{menuItem.Name}' is out of stock.");
                totalPrice += menuItem.Price;
            }
            order.TotalPrice = totalPrice;

            await _orders.InsertOneAsync(order);
            
            // Decrement stock for each ordered MenuItem
            foreach (var menuItemId in order.MenuItemIds)
            {
                var update = Builders<MenuItem>.Update.Inc(m => m.Stock, -1);
                await _menuItems.UpdateOneAsync(m => m.Id == menuItemId, update);
            }
            
            return CreatedAtAction(nameof(Get), new { id = order.Id }, order);
        }

        // PUT: api/Order/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<Order>> Put(string id, [FromBody] Order updatedOrder)
        {
            if (!IsAuthorized()) return Forbid();

            // ...existing code...
            var existingOrder = await _orders.Find(o => o.Id == id).FirstOrDefaultAsync();
            if (existingOrder == null)
                return NotFound($"Order with ID {id} not found.");

            // For simplicity, only allow update of status; recalculation is omitted.
            existingOrder.Status = updatedOrder.Status;

            await _orders.FindOneAndReplaceAsync(o => o.Id == id, existingOrder);
            return Ok(existingOrder);
        }

        // DELETE: api/Order/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Order>> Delete(string id)
        {
            if (!IsAuthorized()) return Forbid();

            // ...existing code...
            var order = await _orders.FindOneAndDeleteAsync(o => o.Id == id);
            if (order == null)
                return NotFound($"Order with ID {id} not found.");
            // Optionally: Restock MenuItems if needed.
            return Ok(order);
        }

        // Helper method to check if user has required role for sensitive operations
        private bool IsAuthorized()
        {
            var role = Request.Headers["Role"].ToString().ToLower();
            return role == "owner" || role == "chef";
        }
    }
}
