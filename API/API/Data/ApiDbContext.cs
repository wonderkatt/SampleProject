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
        private string currentDirectory;
        public ApiDbContext()
        {
            currentDirectory = Environment.CurrentDirectory;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlite($"Data Source={currentDirectory}\\Data\\test.db");
        }

        public DbSet<Record> Records { get; set; }
    }
}
