// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// function start(){    
//     let add = document.querySelector(".input-add").value;
//     // document.querySelector(".here").innerHTML = add;
//     var node = document.createElement("li");                 // Create a <li> node
//     var textnode = document.createTextNode(add);         // Create a text node
//     node.appendChild(textnode);                              // Append the text to <li>
//     document.getElementById("li-on").appendChild(node);    // Append <li> to <ul> with id="myList"

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";



    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



}





function removeLast() {
    let list = document.getElementById("li-on");
    list.removeChild(list.childNodes[0]);
}