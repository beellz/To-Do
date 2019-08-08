    
function start(){    
    let add = document.querySelector(".input-add").value;
    // document.querySelector(".here").innerHTML = add;


        
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(add);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("li-on").appendChild(node);    // Append <li> to <ul> with id="myList"
}


function removeLast() {
    let list = document.getElementById("li-on");
    list.removeChild(list.childNodes[0]);
}