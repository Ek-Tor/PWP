

body {  
    margin: 10px;
}
const list = document.querySelectorAll(".list");
                function activeLink()
                {
                    list.forEach((item)=>
                    item.classList.remove("active"));
                    this.classList.add("active");
                }
                list.forEach((item) =>
                item.addEventListener("click",activeLink));

function update(){
//this gets the user input from the text box and stores that string into a variable
let input = document.getElementById("name").value;

//this will be changing the elements that have the tag name
// with Welcome: + the users input from the text box
document.getElementById("bread").innerHTML = "Hello " + input ;
};

 //pop-up alert
$( document ).ready(function() {
    $('#btn').click(function() {
        window.alert("DID YOU JUST CLICK ME?!");
    });
});

$(document).ready(function () {
    let idx = 0;

    const imgs = document.querySelectorAll('.slideshowItem');
    const numSlides = imgs.length;

    function slideshow() {
        // console.log(idx);
        imgs[idx].classList.remove('active');
        idx = (idx + 1) % numSlides;
        imgs[idx].classList.add('active');

.imgSlideshow {
    position: relative;
    height: 400px;
    width: auto;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
}

.slideshowItem{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.slideshowItem.active {
    opacity: 1;
}

#home {
    opacity: 1;
}

#projects {
    opacity: 0;
}

#photos {
    opacity: 0;
}

#me {
    opacity: 0;
}
