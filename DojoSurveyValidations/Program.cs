var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews(); //add MVC services--Manually added code!!!
var app = builder.Build(); //the builder is an instance of the webApp lass

//these methods allow us to fully implement MVC service-- Manually added code!!!
app.UseStaticFiles(); //the v 
app.UseRouting(); //the c
app.UseAuthorization(); //the m
///end manually added methods for MVC

//delete this preloaded ode
// app.MapGet("/", () => "Hello World!");
// 
// Exchange for this code


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"); //allows us to specify methods of our route in the Controller files


app.Run(); //the entry point for the ret of code!