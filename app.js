

var mainContent = document.getElementById("main-content");


console.log(mainContent.children);



var renderElements = mainContent.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}



document.getElementById("first-name").value = "Fatima";



document.getElementById("last-name").value = "Batool";
document.getElementById("email").value = "Fatima@example.com";



var formContent = document.getElementById("form-content");
console.log(formContent.nodeType);


var lastName = document.getElementById("lastName");
console.log(lastName.nodeType);
console.log(lastName.childNodes[0].nodeType);


lastName.childNodes[0].nodeValue = "Last Name: Batool";


var firstChild = mainContent.firstChild;
var lastChild = mainContent.lastChild;
console.log(firstChild);
console.log(lastChild);


var lastNameNextSibling = lastName.nextSibling;
var lastNamePreviousSibling = lastName.previousSibling;
console.log(lastNameNextSibling);
console.log(lastNamePreviousSibling);


var email = document.getElementById("email");
console.log(email.parentNode); 
console.log(email.parentNode.nodeType);
