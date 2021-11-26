using API.Data;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecordController : ControllerBase
    {
        private readonly IRecordRepository recordRepository;

        public RecordController(IRecordRepository recordRepository)
        {
            this.recordRepository = recordRepository;
        }

        [HttpGet]
        public List<Record> Get()
        {
            var records = recordRepository.GetRecords();
            
            return records; 
        }
    }
}
