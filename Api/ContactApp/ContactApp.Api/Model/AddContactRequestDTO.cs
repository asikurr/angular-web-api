using System.ComponentModel.DataAnnotations;

namespace ContactApp.Api.Model
{
    public class AddContactRequestDTO
    {
        [Required]
        public string Name { get; set; }
        public string? Email { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        public bool Favorite { get; set; }
    }
}
