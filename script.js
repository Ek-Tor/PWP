const list = document.querySelectorAll('.list');
                function activelink()
                {
                    list.forEach((item)=>
                    item.classList.remove('active'));
                    this.classList.add('active');
                }
                list.forEach((item) =>
                item.addEventListener('click',activelink));



// function update(){
// //this gets the user input from the text box and stores that string into a variable
// let input = document.getElementById("name").value;

// //this will be changing the elements that have the tag name
// // with Welcome: + the users input from the text box
// document.getElementById("bread").innerHTML = "Hello " + input ;
// };

//  //pop-up alert
// $( document ).ready(function() {
//     $('#btn').click(function() {
//         window.alert("DID YOU JUST CLICK ME?!");
//     });
// });

