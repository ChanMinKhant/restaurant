using System;

namespace server.Services;

// Services/UserService.cs
using MongoDB.Driver;
using server.Data;
using server.Models;

public class UserService
{
    private readonly IMongoCollection<User> _userCollection;

    public UserService(MongoDbContext context)
    {
        _userCollection = context.Users;
    }

    public async Task<List<User>> GetUsersAsync() =>
        await _userCollection.Find(_ => true).ToListAsync();

    public async Task<User> GetUserByEmailAsync(string email) =>
        await _userCollection.Find(user => user.Email == email).FirstOrDefaultAsync();

    public async Task CreateUserAsync(User user) =>
        await _userCollection.InsertOneAsync(user);

    public async Task UpdateUserAsync(string email, User user) =>
        await _userCollection.ReplaceOneAsync(u => u.Email == email, user);

    public async Task DeleteUserAsync(string email) =>
        await _userCollection.DeleteOneAsync(user => user.Email == email);
}
