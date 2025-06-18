function update(){
//this gets the user input from the text box and stores that string into a variable
let input = document.getElementById("name").value;

//this will be changing the elements that have the tag name
// with Welcome: + the users input from the text box
document.getElementById("bread").innerHTML = "Welcome: " + input;
};
 //pop-up alert
$( document ).ready(function() {
    $('#btn').click(function() {
        window.alert("DID YOU JUST CLICK ME?!");
    });
});