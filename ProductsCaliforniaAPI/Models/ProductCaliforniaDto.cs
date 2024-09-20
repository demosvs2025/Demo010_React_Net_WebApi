namespace ProductsCaliforniaAPI.Models
{
    public class ProductCaliforniaDto
    {
        public required string ProductName { get; set; }
        public string? Description { get; set; }
        public string? Color { get; set; }
    }
}
