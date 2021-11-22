using API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{
    public class ApiDbContext : DbContext
    {
        private string databasePath;
        public ApiDbContext()
        {
            databasePath = Environment.CurrentDirectory;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlite($"Data Source={databasePath}\\Data\\test.db");
        }

        public DbSet<test> tests { get; set; }
    }
}
