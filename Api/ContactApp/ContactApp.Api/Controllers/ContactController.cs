using ContactApp.Api.Data;
using ContactApp.Api.Model;
using ContactApp.Api.Model.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactApp.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ContactDbContext _dbContext;

        public ContactController(ContactDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GellAllContact()
        {
            var contacts = _dbContext.Contacts.ToList();
            return Ok(contacts);
        }

        [HttpPost]
        public IActionResult AddContact(AddContactRequestDTO request)
        {
            var contact = new Contact()
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                 Email = request.Email,
                 PhoneNumber = request.PhoneNumber,
                 Favorite = request.Favorite
            };

            _dbContext.Contacts.Add(contact);
            _dbContext.SaveChanges();

            return Ok(contact);
        }
    }
}
