using System;

namespace server.Data;
// Data/MongoDbContext.cs
using MongoDB.Driver;
using server.Models;

public class MongoDbContext
{ 
    private readonly IConfiguration _configuration;
    private readonly IMongoDatabase? _database;

    public MongoDbContext(IConfiguration configuration)
    {
        _configuration = configuration;

        var connectionString = _configuration.GetConnectionString("MongoDb");
        var MongoUrl = new MongoUrl(connectionString);
        var MongoClient = new MongoClient(MongoUrl);
        _database = MongoClient.GetDatabase(MongoUrl.DatabaseName);
    }

    public IMongoDatabase? Database => _database;
}
