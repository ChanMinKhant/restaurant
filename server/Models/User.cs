using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models;
public class User
{
    [BsonId]
    [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
    public required string Id { get; set; } // MongoDB uses a string ID by default

    [BsonElement("email"), BsonRepresentation(BsonType.String)]
    public string Email { get; set; } = string.Empty;

    [BsonElement("password"), BsonRepresentation(BsonType.String)]
    public string Password { get; set; } = string.Empty;
}
