using API.Data;
using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repositories
{
    public class RecordRepository : IRecordRepository
    {
        private readonly ApiDbContext context;
        public RecordRepository(ApiDbContext context)
        {
            this.context = context;
        }
        public  List<Record> GetRecords()
        {
            return context.Records.ToList();
        }
    }
}
