using Microsoft.AspNetCore.Mvc;
using Starfighter.Data;
using Starfighter.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Starfighter.Controllers
{
    public class CategoryController : Controller
    {
        private readonly StarfighterDbContext _db;
        public CategoryController(StarfighterDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            IEnumerable<Category> objList = _db.tCategory;
            return View(objList);
        }
    }
}
