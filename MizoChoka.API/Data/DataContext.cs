using Microsoft.EntityFrameworkCore;
using MizoChoka.API.Models;

namespace MizoChoka.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values { get; set; }
    }
}