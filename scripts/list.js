// ADDING ITEMS TO START AND END OF LIST **
// Get the <ul> element
var groceryList = document.getElementById("groceries");


// ADD NEW ITEM TO END OF LIST **
// Create element
const newListItem = document.createElement("li");
newListItem.setAttribute("class", "li");
// Create text node
const listItemText = document.createTextNode("Pizza");
// Add text node to element
newListItem.appendChild(listItemText);
// Add element end of list
groceryList.appendChild(newListItem);


// ADD NEW ITEM START OF LIST **
// Create element
const otherListItem = document.createElement("li");
otherListItem.setAttribute("class", "li");
// Create text node
const otherItemText = document.createTextNode("Poutine");
// Add text node to element
otherListItem.appendChild(otherItemText);
// Add element to list
groceryList.insertBefore(otherListItem, groceryList.children[0]);

// All <li> elements **
allListItems = document.getElementsByClassName("li");

// ADD A CLASS OF COOL TO ALL LIST ITEMS **
// Counter variable
// Loop through elements
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING **
// h2 element
var header = document.getElementsByClassName("h2");
// h2 text
var headerText = "Buy Groceries</br>Items: ";
// No. of <li> elements
var itemNum = allListItems.length;
// Content
newHeaderText = headerText + itemNum;
// Update h2 using innerHTML (not textContent) because it contains markup
header[0].innerHTML = newHeaderText;