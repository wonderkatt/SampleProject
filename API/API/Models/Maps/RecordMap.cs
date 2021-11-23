using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Maps
{
    public class RecordMap : ClassMap<Record>
    {
        public RecordMap()
        {
            Map(m => m.Id).Ignore();
            Map(m => m.Region).Index(0);
            Map(m => m.Gender).Index(1);
            Map(m => m.Born2016).Index(2);
            Map(m => m.Born2017).Index(3);
            Map(m => m.Born2018).Index(4);
            Map(m => m.Born2019).Index(5);
            Map(m => m.Born2020).Index(6);
        }
    }
}
