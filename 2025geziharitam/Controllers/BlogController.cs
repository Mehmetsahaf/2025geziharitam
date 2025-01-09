using Microsoft.AspNetCore.Mvc;
using kültürüm.Models;

namespace kültürüm.Controllers
{
    public class BlogController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
} 