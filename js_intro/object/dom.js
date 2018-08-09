//javaScript representation of what HTML is = dom

//Get element by id
var wrapperDiv = document.getElementById('wrapper');
//storing method into warpperDiv
wrapperDiv.style.backgroundColor = "lightblue";

//Get element by tagname
var lis = document.getElementsByTagName('li');
lis[1].innerHTML = "I'm a li and I've changed.";

// querySelector
var selected = document.querySelectorAll('li.selected');
for (var i = 0; i < selected.length; i++) {
  selected[i].style.color = "grey";
}

//Create
var ptag = document.createElement('p');
ptag.innerHTML = "A brand new tag";
document.body.appendChild(ptag);


var uls = document.getElementById('list');
var listitem = document.createElement('li');
listitem.innerHTML = "New list item";

uls.appendChild(listitem);
//add new list


//Turn every other item into a different colour

for (var i = 0; i < lis.length; i++) {
  var className = i % 2 == 0 ? "even" : "";

  var li = lis[i];

  li.className = className;
}


var countSpan = document.getElementById("count");

countSpan.innerHTML = lis.length;

debugger;
