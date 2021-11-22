using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{
    public static class DatabaseSeeder
    {
        public static void Seed(ApiDbContext context)
        {
            var listOfTests = new List<test>
            {
                new test { name = "goofy"},
                new test { name = "troopy"}
            };

            context.tests.AddRange(listOfTests);
            context.SaveChanges();
        }
    }
}
