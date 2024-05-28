using System.ComponentModel.DataAnnotations;

namespace ContactApp.Api.Model.Domain
{
    public class Contact
    {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string? Email { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        public bool Favorite { get; set; }
    }
}
