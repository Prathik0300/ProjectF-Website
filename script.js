var preloader = document.getElementById('preloader');
var body = document.getElementById('body');
var main = document.getElementById('background');
var Hamburger = document.getElementsByClassName("isActive");
var slideNav = document.getElementById("slideNav");
function exitPreloader(){
    preloader.style.display = 'none';
    body.style.backgroundColor = 'white';
    body.style.overflow = '';
    main.style.display = '';
}

Hamburger[0].addEventListener("click",function(){
    Hamburger[0].classList.toggle("active");
    slideNav.classList.toggle("active");
    slideNav.style.display = "";
});

window.onscroll = function(){pushToggle();};

function pushToggle(){
    var toggle = document.getElementById("toggleButton");
    var push = document.getElementsByClassName("pushUp");
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        toggle.style.top = "-2.5rem";
        if(push.length==0){
            slideNav.classList.add("pushUp");
        }
              
    }
    else{
        toggle.style.top = "0";
        slideNav.classList.remove("pushUp");
    }
}
