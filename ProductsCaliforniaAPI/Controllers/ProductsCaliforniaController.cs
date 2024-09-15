using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsCaliforniaAPI.Data;
using ProductsCaliforniaAPI.Models;

namespace ProductsCaliforniaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsCaliforniaController : ControllerBase
    {
        private readonly ProductsCaliforniaDbContext context;

        public ProductsCaliforniaController(ProductsCaliforniaDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductCalifornia>>> GetProductsCalifornia()
        {
            return Ok(await context.ProductsCalifornia.ToListAsync());
        }
    }
}
