using Microsoft.EntityFrameworkCore;
using Starfighter.Models;

namespace Starfighter.Data
{
    public class StarfighterDbContext : DbContext
    {
        public StarfighterDbContext(DbContextOptions<StarfighterDbContext> options) : base(options)
        {

        }
        public DbSet<Category> tCategory { get; set; }
    }
}
