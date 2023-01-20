
// HOMEWORK PART 1

// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed



let title  = document.getElementById("myTitle").innerHTML = "HOMEWORK PART 1 ";

let firstDiv = document.getElementById("first");
let paragFir = firstDiv.lastElementChild.innerHTML = "Change the page with JavaScript";

let paragSec = document.querySelector(".second").innerHTML = "Change the text of all paragraphs";

let texts = document.getElementsByTagName("text")[0].innerText = "and headers with javascript";

let header = document.querySelectorAll("div")[2];
let headerOne = header.firstElementChild.innerHTML = "Note:";
let headerTwo = header.lastElementChild.innerHTML = "The html must not be changed ";

