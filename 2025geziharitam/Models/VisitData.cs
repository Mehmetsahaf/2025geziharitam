namespace kültürüm.Models
{
    public class VisitData
    {
        public string City { get; set; } = "";
        public string Date { get; set; } = DateTime.Now.ToString("yyyy-MM-dd");
        public List<string> FamousDishes { get; set; } = new();
        public string Food { get; set; } = "";
        public string FoodRecommendations { get; set; } = "";
        public List<string> Districts { get; set; } = new();
        public string Places { get; set; } = "";
        public string Recommendations { get; set; } = "";
    }
} 