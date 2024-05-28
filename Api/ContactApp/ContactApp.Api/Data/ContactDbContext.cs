using ContactApp.Api.Model.Domain;
using Microsoft.EntityFrameworkCore;

namespace ContactApp.Api.Data
{
    public class ContactDbContext : DbContext
    {
        public ContactDbContext(DbContextOptions options) : base(options)
        {

        }


        public DbSet<Contact> Contacts { get; set; }
    }
}
