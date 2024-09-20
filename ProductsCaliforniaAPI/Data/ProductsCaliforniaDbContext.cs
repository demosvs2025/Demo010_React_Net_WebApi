using Microsoft.EntityFrameworkCore;
using ProductsCaliforniaAPI.Models;

namespace ProductsCaliforniaAPI.Data
{
    public class ProductsCaliforniaDbContext : DbContext
    {
        public ProductsCaliforniaDbContext(DbContextOptions<ProductsCaliforniaDbContext> options) : base(options)
        {
        }
        public DbSet<ProductCalifornia> ProductsCalifornia { get; set; }
        public DbSet<Employee> Employees { get; set; }
    }
}
