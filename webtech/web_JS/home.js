var moon = document.getElementById("moon");
moon.onclick = function () 
{
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) 
    {
        moon.src = "../web_images/sun.jpg";
       
    } 
    else
    {
        moon.src = "../web_images/moon.jpg";
    }
}