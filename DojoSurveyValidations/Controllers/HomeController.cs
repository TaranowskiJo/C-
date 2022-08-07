using Microsoft.AspNetCore.Mvc;
namespace DojoSurvey.Models.User;
using sessionAndValidations.Models;
//inherits from abstract base controller class
//inherits helpful methods for andloing HTTP req/response cycle

public class HomeController : Controller
{
    [HttpGet("")] //equivalent to ("/")
    public ViewResult Index() //builds our INDEX ROUTE
    {
        return View("Index"); // if the file is named the same as the function it knows what to look for! so "Index" is optional in this case (but is good practice)
    }


    [HttpPost("formResults")] // FORM RESULTS RENDER 
    public IActionResult FormResults(string yourName, string dojoLocation, string favoriteLanguage, string comments) //FormResults == form action = "" on our html page
    {
        ViewBag.Name = yourName; //setting parameters given to equal these things within the viewbag
        ViewBag.location = dojoLocation;
        ViewBag.language = favoriteLanguage;
        ViewBag.Comments = comments;

        return View("Results"); //Results.cshtml from shared folder
    }

}


