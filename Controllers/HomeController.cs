,
,using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        // Gerekirse verileri buradan View'a geçebilirsiniz
        return View();
    }
} 