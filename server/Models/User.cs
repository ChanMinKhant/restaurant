using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models;
public class User
{
    [BsonId]
    [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("email"), BsonRepresentation(BsonType.String)]
    public required string Email { get; set; }

    [BsonElement("password"), BsonRepresentation(BsonType.String)]
    public string? Password { get; set; }

    [BsonElement("role"), BsonRepresentation(BsonType.String)]
    public required string Role { get; set; }
}
