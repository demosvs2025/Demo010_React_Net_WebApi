using System.ComponentModel.DataAnnotations;

namespace ProductsCaliforniaAPI.Models
{
    public class ProductCalifornia
    {
        [Key]
        public int ProductId { get; set; }
        public required string ProductName { get; set; }
        public string? Description { get; set; }
        public string? Color { get; set; }
    }
}
