/* Create "close" and "star" buttons and append to each existing list item */
/* (this code is run once at the beginning and applies to the sample list items) */
// getElementsByTagName returns an HTMLCollection (essentially an array) of html objects 
// with the "li" or list item tag.
var myNodelist = document.getElementsByTagName("LI");
// For each element in the unordered list, this loop creates an "x" button encapsulated 
// inside a "span" element, which can be clicked to delete the item from the list.
var i;
for (i = 0; i < myNodelist.length; i++) {
    // Create a new span element to hold the star
    var spanStar = document.createElement("SPAN");
    // "\u00D7" is a star character
    var txtStar = document.createTextNode("\u2606");
    // Gives the span the class "star"
    spanStar.className = "star";
    // .appendChild method nests the star character as a child of the span tag
    spanStar.appendChild(txtStar);
    spanStar.setAttribute("id", i)
    // Adds the span as a nested child of the list item
    myNodelist[i].appendChild(spanStar);

    // Create a new span element for the close button
    var spanX = document.createElement("SPAN");
    // "\u00D7" is the multiplication symbol or "x"
    var txtX = document.createTextNode("\u00D7");
    // Gives the span the class "close"
    spanX.className = "close";
    // .appendChild method nests the "x" as a child of the span tag
    spanX.appendChild(txtX);
    // Adds the span as a nested child of the list item
    myNodelist[i].appendChild(spanX);
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

/* Click on a star button to bring it to the top of the list */
var stars = document.getElementsByClassName("star");
var j;
// For each star button
for (j = 0; j < stars.length; j++) {
    // Define what happens when a user clicks on star.
    stars[j].onclick = function() {
        // Gets the id of the star, which is the same number associated with the task's id
        var starredItemId = this.id;
        // Get the task or item associated with the clicked-on star
        var starredItem = document.getElementById("it" + starredItemId);
        // In the case that the item has already been starred, it will have the class "starred"
        // Re-clicking the star should de-prioritize the task
        if (document.getElementById(starredItemId).classList.contains("starred")) {
            // Remove the element from the list of tasks
            document.getElementById("it" + starredItemId).remove();
            // Append the element to the bottom of the list
            document.getElementById("myUL").appendChild(starredItem);
            // By toggling "starred" again, we remove the "starred" class from the star tag
            this.classList.toggle("starred");
        } else {
            // Remove the element from its place in the list
            document.getElementById("it" + starredItemId).remove();
            // Add the tast to the top of the list of tasks
            document.getElementById("myUL").insertBefore(starredItem, document.getElementById("myUL").firstChild);
            // By toggling "starred" we add the "starred" class to the star tag
            this.classList.toggle("starred");
        }
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
    // Nest the text node inside the list item as a child.
    li.appendChild(t);
    li.setAttribute('id', "it" + myNodelist.length);
    if (inputValue === '') {
        // Warn the user that they cannot make an empty list item.
        alert("You must write something!");
    } else {
        // The unordered list of todo items is id-ed "myUL" in the html file.
        document.getElementById("myUL").appendChild(li);
    }
    // Reset the input field to be blank.
    document.getElementById("myInput").value = "";

    /* Lines 116 through 155 are effectively the same as lines 8 to 79 */
    // Create a star button for the new task
    var spanStar = document.createElement("SPAN");
    var txtStar = document.createTextNode("\u2606");
    spanStar.className = "star";
    spanStar.appendChild(txtStar);
    spanStar.setAttribute("id", myNodelist.length - 1)
    myNodelist[i].appendChild(spanStar);

    // Create a close button for the new task
    var spanX = document.createElement("SPAN");
    var txtX = document.createTextNode("\u00D7");
    spanX.className = "close";
    spanX.appendChild(txtX);
    myNodelist[i].appendChild(spanX);

    // Define onclick behavior for close button
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Define onclick behavior for star button
    for (j = 0; j < stars.length; j++) {
        stars[j].onclick = function() {
            var starredItemId = this.id;
            var starredItem = document.getElementById("it" + starredItemId);
            if (document.getElementById(starredItemId).classList.contains("starred")) {
                document.getElementById("it" + starredItemId).remove();
                document.getElementById("myUL").appendChild(starredItem);
                this.classList.toggle("starred");
            } else {
                console.log(starredItem.classList);
                document.getElementById("it" + starredItemId).remove();
                document.getElementById("myUL").insertBefore(starredItem, document.getElementById("myUL").firstChild);
                this.classList.toggle("starred");
            }
        }
    } 
}