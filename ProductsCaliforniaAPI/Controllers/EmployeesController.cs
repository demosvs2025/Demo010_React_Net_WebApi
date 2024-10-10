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

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Employee>> GetEmployeeById(int id)
        {
            Employee? employee = await context.Employees.FindAsync(id);

            if (employee is null)
            {
                return NotFound("Employee not found.");
            }

            return Ok(employee);
        }

        [HttpPost]
        public async Task<ActionResult> PostEmployee(EmployeeDto employeeDto)
        {
            Employee employee = new Employee()
            {
                FirstName = employeeDto.FirstName,
                LastName = employeeDto.LastName,
                Phone = employeeDto.Phone
            };
            await context.Employees.AddAsync(employee);
            await context.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> PutEmployee(int id, EmployeeDto employeeDto)
        {
            Employee? employee = await context.Employees.FindAsync(id);

            if (employee is null)
            {
                return NotFound("Employee not found.");
            }

            employee.FirstName = employeeDto.FirstName;
            employee.LastName = employeeDto.LastName;
            employee.Phone = employeeDto.Phone;

            await context.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            Employee? employee = await context.Employees.FindAsync(id);

            if (employee is null)
            {
                return NotFound("Employee not found.");
            }
            context.Employees.Remove(employee);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
