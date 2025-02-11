using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models;
public class Order
{
    [BsonId]
    [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("userId"), BsonRepresentation(BsonType.String)]
    public string? UserId { get; set; }

    [BsonElement("menuItemIds")]
    public List<string>? MenuItemIds { get; set; }

    [BsonElement("status"), BsonRepresentation(BsonType.String)]
    public string? Status { get; set; }

    // toal price of the order
    [BsonElement("totalPrice"), BsonRepresentation(BsonType.Double)]
    public double TotalPrice { get; set; }
    
    [BsonElement("createdAt")]
    public DateTime CreatedAt { get; set; } = DateTime.Now;
}
