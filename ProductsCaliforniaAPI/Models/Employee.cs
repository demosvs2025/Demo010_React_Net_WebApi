using System.ComponentModel.DataAnnotations;

namespace ProductsCaliforniaAPI.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public string? Phone { get; set; }
    }
}
