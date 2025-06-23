

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

let input = document.getElementById("name").value;

document.getElementById("bread").innerHTML = "Hello " + input ;
};

 
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
        
        imgs[idx].classList.remove('active');
        idx = (idx + 1) % numSlides;
        imgs[idx].classList.add('active');
    }

    setInterval(slideshow, 5000);

    const links = document.querySelectorAll('.list');
    const tabContent = document.querySelectorAll('.tabContent');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const tgtID = link.getAttribute('href').substring(1);
            tabContent.forEach(tab => {
                tab.style.opacity = 0;
            });
            links.forEach(link => {
                link.classList.remove('active');
            });
            link.classList.add('active');
            document.getElementById(tgtID).style.opacity = 1;
        });
    }); 
}); 