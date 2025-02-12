using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models;
public class MenuItem
{
    [BsonId]
    [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name"), BsonRepresentation(BsonType.String)]
    public string? Name { get; set; }

    [BsonElement("description"), BsonRepresentation(BsonType.String)]
    public string? Description { get; set; }

    [BsonElement("price"), BsonRepresentation(BsonType.Double)]
    public double Price { get; set; }

    [BsonElement("image"), BsonRepresentation(BsonType.String)]
    public string? Image { get; set; }

    [BsonElement("category"), BsonRepresentation(BsonType.String)]
    public string? Category { get; set; }

    [BsonElement("stock"), BsonRepresentation(BsonType.Int32)]
    public int Stock { get; set; }

}
