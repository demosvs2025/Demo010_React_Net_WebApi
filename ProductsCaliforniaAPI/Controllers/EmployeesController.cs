using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsCaliforniaAPI.Data;
using ProductsCaliforniaAPI.Models;

namespace ProductsCaliforniaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly ProductsCaliforniaDbContext context;

        public EmployeesController(ProductsCaliforniaDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetEmployees()
        {
            return Ok(await context.Employees.ToListAsync());
        }
    }
}
