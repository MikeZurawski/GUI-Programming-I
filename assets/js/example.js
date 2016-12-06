var list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST
var node = document.createElement("li");                 
var textnode = document.createTextNode("cream");         
node.appendChild(textnode);                              
list.appendChild(node);

// ADD NEW ITEM START OF LIST
var node2 = document.createElement("li");
var textnode2 = document.createTextNode("kale");
node2.appendChild(textnode2); 
list.insertBefore(node2, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for (var i = 0; i < list.children.length; i+=1) {
    list.children[i].className = 'cool';
}
                      
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var headerNum = document.getElementsByTagName('h2')[0];
var spanBubble = document.createElement("span");
spanBubble.innerHTML = list.children.length;
headerNum.appendChild(spanBubble);


