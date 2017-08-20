// Global vars to hold reset and individual square functionalities
var reset = document.querySelector('.jumbotron');
var spaces = document.querySelectorAll("td");

// Hover-over and click event attachmentss for h1
reset.addEventListener('mouseover', function() {
    this.style.color = 'green';
});

reset.addEventListener('mouseout', function() {
    this.style.color = 'black';
});

reset.addEventListener('click', clearSpaces);

// Click event attachment (for loop to hit every td)
for (var i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', markSpace);
}

// Function to change all squares' textContent to blank
function clearSpaces() {
    for (var i = 0; i < spaces.length; i++) {
        spaces[i].textContent = '';
    }
}

// Function to change individual square's marks
function markSpace() {
    if (this.textContent === '') {
        this.textContent = 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}
