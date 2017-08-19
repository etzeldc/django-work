// Global array of student names
var studentNames = [];

// Add new name
function add() {
    var newName = prompt("What name would you like to add?");
    studentNames.push(newName);
}
//add();

// Remove a specific name
function remove() {
    var loseName = prompt("What name would you like to remove?");
    var index = studentNames.indexOf(loseName);
    studentNames.splice(index, 1);
}
//remove();

// Display student list
function  display() {
    console.log(studentNames);
}
//display();

// Looping prompts
var begin = prompt("Would you like to interact with the student list?")
var action = '';

function clearAction() {
    action = prompt("Please choose to add, remove, display, or quit.")
}

if (begin[0] === "y") {
    clearAction();
    while (action !== "quit") {
        if (action === "add") {
            add();
            clearAction();
        } else if (action === "remove") {
            remove();
            clearAction();
        } else if (action === "display") {
            display();
            clearAction();          
        }
    }
}
