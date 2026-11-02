
function start()
{
var menu = document.getElementById("menu");

var footermenu = "<table width = 92%><tbody><tr><td><a href='https://sanacory.github.io/home/index.html'>Main</a> | ";
footermenu += "<a href='./courses.html'>Courses</a> | <a href='/research.html'>Research</a> <br><br>";
footermenu += "<a href='https://www.oldwestbury.edu/departments/mathematics'>Mathematics Department</a> | ";
footermenu += "<a href='http://www.oldwestbury.edu'>College at Old Westbury</a><br><br>";
 //footermenu += "<a href='https://sanacory.github.io/home/coffee.html'>Coffee</a> | ";
 //footermenu += "<a href='https://sanacory.github.io/home/rating/rating.html'>Rating</a> | ";
 //footermenu += "<a href='https://sanacory.github.io/home/analytics/index.html'>Analytics</a>";
footermenu += "<br><br></td></tr></tbody></table><br clear='all'>";



menu.innerHTML = footermenu;
}

window.addEventListener("load", start, false);



