using System;

namespace server.Models;

public class Order
{
    public int OrderId { get; set; }
    public DateTime OrderDate { get; set; }
    public string CustomerName { get; set; }
    public List<MenuItem> Items { get; set; } = new List<MenuItem>();

    // Optionally, you can include a computed property to sum the total order amount
    public decimal TotalAmount => Items.Sum(item => item.Price * item.Quantity);
}
