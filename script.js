/* Create a "close" button and append it to each list item */
/* (this code is run once at the beginning and applies to the sample list items) */
// getElementsByTagName returns an HTMLCollection (essentially an array) of objects 
// with the "li" or list item tag.
var myNodelist = document.getElementsByTagName("LI");
var i;
// For each element in the unordered list, this loop creates an "x" button encapsulated 
// inside a "span" element, which can be clicked to delete the item from the list.
for (i = 0; i < myNodelist.length; i++) {
    // Create a new span element
    var span = document.createElement("SPAN");
    // "\u00D7" is the multiplication symbol
    var txt = document.createTextNode("\u00D7");
    // Gives the span the class "close"
    span.className = "close";
    // .appendChild method nests the "x" as a child of the span tag
    span.appendChild(txt);
    // Adds the span as a nested child of the list item
    myNodelist[i].appendChild(span);
}

/* Click on a close button to hide the current list item */
var close = document.getElementsByClassName("close");
var i;
// For each close button ("x")
for (i = 0; i < close.length; i++) {
    // Define what happens when a user clicks on an "x".
    // This is automatically called when a user clicks on the "x" and the onClick
    // event is triggered.
    close[i].onclick = function() {
        // Get the parent div, which is the list item
        var div = this.parentElement;
        // Hide the entire element
        div.style.display = "none";
    }
} 

/* Add a "checked" symbol when clicking on a list item */
// .querySelector returns one item. Here it is getting the unordered list ('ul') in the document.
var list = document.querySelector('ul');
// .addEventListener creates a function that's called whenever a 'click' occurs. 'ev' is the event.
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        // Adds the class "checked" to the list item that was clicked.
        ev.target.classList.toggle('checked');
    }
}, false);

/* Create a new list item when clicking on the "Add" button */
function newElement() {
    // Create a new list item.
    var li = document.createElement("li");
    // In the html file, the input tag's id is "myInput". Here, we get the text the user
    // input inside this field.
    var inputValue = document.getElementById("myInput").value;
    // Convert the inputValue into a text node that can be nested inside a list item.
    var t = document.createTextNode(inputValue);
    // Nest the text node inside list item as a child.
    li.appendChild(t);
    if (inputValue === '') {
        // Warn the user that they cannot make an empty list item.
        alert("You must write something!");
    } else {
        // The unordered list of todo items is id-ed "myUL" in the html file.
        document.getElementById("myUL").appendChild(li);
    }
    // Reset the input field to be blank.
    document.getElementById("myInput").value = "";

    // Lines 71 through 83 are the same as lines 9 to 36
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}