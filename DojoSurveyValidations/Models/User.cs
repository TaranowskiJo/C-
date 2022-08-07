#pragma warning disable CS8618
using Microsoft.AspNetCore.Mvc;
public class User
{
    public string Name { get; set; }
    public string DojoLocation { get; set; } 
    public string FavoriteLanguage { get; set; }
    public string Comments { get; set; }

    public List<string> AllUsers { get; set; }= new List<string>();


    //write constructor here to ceate user objecct and then will add ti to a lsit!!
    public User(string name,string dojoLocation, string favoriteLanguage, string comments,List<int> AllUsers) 
    {
        Name = name;
        DojoLocation = dojoLocation;
        FavoriteLanguage = favoriteLanguage;
        Comments = comments;
    }
}


