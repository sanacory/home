
function start()
{
var menu = document.getElementById("menu");

var footermenu = "<table width = 92%><tbody><tr><td><a href='http://www.sanacory.com/index.html'>Main</a> | ";
footermenu += "<a href='http://www.sanacory.com/courses.html'>Courses</a> | <a href='http://www.sanacory.com/research.html'>Research</a> <br><br>";
footermenu += "<a href='https://www.oldwestbury.edu/departments/mathematics'>Mathematics Department</a> | ";
footermenu += "<a href='http://www.oldwestbury.edu'>College at Old Westbury</a><br><br>";
footermenu += "<a href='http://www.sanacory.com/coffee.html'>Coffee</a> | ";
footermenu += "<a href='http://www.sanacory.com/rating/rating.html'>Rating</a> | ";
footermenu += "<a href='http://www.sanacory.com/analytics/index.html'>Analytics</a>";
footermenu += "<br><br></td></tr></tbody></table><br clear='all'>";



menu.innerHTML = footermenu;
}

window.addEventListener("load", start, false);



