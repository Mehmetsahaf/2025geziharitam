using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using kültürüm.Models;

namespace kültürüm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisitsController : ControllerBase
    {
        private readonly IWebHostEnvironment _environment;

        public VisitsController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        private string StoragePath => Path.Combine(_environment.WebRootPath, "data", "visits");

        [HttpPost("save")]
        public IActionResult SaveVisit([FromBody] SaveVisitRequest request)
        {
            try
            {
                Directory.CreateDirectory(StoragePath);
                var filePath = Path.Combine(StoragePath, $"{request.CityName}.json");
                
                var visitData = JsonSerializer.Deserialize<VisitData>(
                    JsonSerializer.Serialize(request.VisitData)
                );

                if (visitData == null)
                {
                    return BadRequest(new { success = false, error = "Invalid visit data" });
                }

                // Ensure all collections are initialized
                visitData.FamousDishes ??= new List<string>();
                visitData.Districts ??= new List<string>();

                // Save the data
                var json = JsonSerializer.Serialize(visitData, new JsonSerializerOptions
                {
                    WriteIndented = true
                });

                System.IO.File.WriteAllText(filePath, json);

                return Ok(new { success = true });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, error = ex.Message });
            }
        }

        [HttpGet("check/{cityName}")]
        public IActionResult CheckVisit(string cityName)
        {
            var filePath = Path.Combine(StoragePath, $"{cityName}.json");
            return Ok(new { visited = System.IO.File.Exists(filePath) });
        }

        [HttpDelete("delete/{cityName}")]
        public IActionResult DeleteVisit(string cityName)
        {
            try
            {
                var filePath = Path.Combine(StoragePath, $"{cityName}.json");
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }
                return Ok(new { success = true });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, error = ex.Message });
            }
        }
    }

    public class SaveVisitRequest
    {
        public string CityName { get; set; } = "";
        public object VisitData { get; set; } = new();
    }
} 