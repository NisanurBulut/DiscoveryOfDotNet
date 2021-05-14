using Microsoft.EntityFrameworkCore;

namespace Starfighter.Data
{
    public class StarfighterDbContext : DbContext
    {
        public StarfighterDbContext(DbContextOptions<StarfighterDbContext> options) : base(options)
        {

        }
    }
}
