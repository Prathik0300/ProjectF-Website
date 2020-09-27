var preloader = document.getElementById('preloader');
var body = document.getElementById('body');
var main = document.getElementById('background');
var Hamburger = document.getElementsByClassName("isActive");
var slideNav = document.getElementById("slideNav");
function exitPreloader(){
    preloader.style.display = 'none';
    body.style.backgroundColor = 'white';
    body.style.overflowX = '';
    body.style.overflowY = '';
    main.style.display = '';
}

Hamburger[0].addEventListener("click",function(){
    Hamburger[0].classList.toggle("active");
    slideNav.classList.toggle("active");
    slideNav.style.display = "";
});

