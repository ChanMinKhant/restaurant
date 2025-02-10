using System;

namespace server.Models
{
    public class MenuItem
    {
        public int MenuItemId { get; set; }  // renamed from OrderItemId
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
