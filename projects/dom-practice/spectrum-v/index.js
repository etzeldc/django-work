var title = document.querySelector('h1');
title.addEventListener('mouseover', function() {
    this.textContent = "I\'m a title!"; 
});
title.addEventListener('mouseout', function() {
    this.textContent = "Inspired by Spectrum V by the Artist Ellsworth Kelly";
});


var one = document.getElementById('one');
one.addEventListener('mouseover', function() {
    this.textContent = "Some sort of  teal-ish blue.";
});
one.addEventListener('mouseout', function() {
    this.textContent = "";    
});


var two = document.getElementById('two');
two.addEventListener('mouseover', function() {
    this.textContent = "Not quite fuchsia.";
});
two.addEventListener('mouseout', function() {
    this.textContent = "";    
});


var three = document.getElementById('three');
three.addEventListener('mouseover', function() {
    this.textContent = "A pretty nice green.";
});
three.addEventListener('mouseout', function() {
    this.textContent = "";    
});


var four = document.getElementById('four');
four.addEventListener('mouseover', function() {
    this.textContent = "Definitely orange.";
});
four.addEventListener('mouseout', function() {
    this.textContent = "";    
});


var five = document.getElementById('five');
five.addEventListener('mouseover', function() {
    this.textContent = "You could say golden rod.";
});
five.addEventListener('mouseout', function() {
    this.textContent = "";    
});
