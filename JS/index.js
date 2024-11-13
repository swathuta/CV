/*
Create a soccer ball
make the soccer ball interactive
*/
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening';
} 
else if (hourNow > 12) {
    greeting = 'Good afternoon';
} 
else if (hourNow > 0) {
    greeting = 'Good morning';
} 
else {
    greeting = 'Welcome';
}

// Display the greeting message
document.write( greeting + " " + "Welcome To My Highlight");
