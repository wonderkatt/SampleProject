using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestSharp;
using System.IO;
using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;
using API.Models.Maps;
using System.Text;

namespace API.Data
{
    public static class DatabaseSeeder
    {
        private const int codePage = 28591;
        public static void Seed(ApiDbContext context)
        {
            var client = new RestClient("http://api.scb.se/OV0104/v1/doris/sv/ssd/START/BE/BE0101/BE0101H/FoddaK");
            var jsonBody = File.ReadAllText($"{Environment.CurrentDirectory}\\Data\\requestbody.js");
            var request = new RestRequest(Method.POST).AddJsonBody(jsonBody);
            var response = client.DownloadData(request);

            var config = new CsvConfiguration(CultureInfo.InvariantCulture);
            List<Record> records;
            using var stream = new MemoryStream(response);
            using var reader = new StreamReader(stream, Encoding.GetEncoding(codePage), true);
            using (var csv = new CsvReader(reader, config))
            {
                csv.Context.RegisterClassMap<RecordMap>();
                records = csv.GetRecords<Record>().ToList();
            }
            context.Records.AddRange(records);
            context.SaveChanges();
        }

    }
}

