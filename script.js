var preloader = document.getElementById('preloader');
var body = document.getElementById('body');
var main = document.getElementById('background');
var Hamburger = document.getElementsByClassName("isActive");
var slideNav = document.getElementById("slideNav");
var icons = document.getElementsByClassName("bulb");
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

for(var i=0; i< icons.length;i=i+1){
    icons[i].addEventListener("click",function(){
        var current = document.getElementsByClassName("bigBulb");
        var showtxt = document.getElementsByClassName("showText");
        if(current.length == 0){
            this.classList.add("bigBulb");
        }
        else{
            if(current[0] == this){
                current[0].classList.add("minimize");
                current[0].classList.remove("bigBulb");
            }
            else{
                current[0].classList.add("minimize");
                current[0].classList.remove("bigBulb");
                this.classList.add("bigBulb"); 
            }  
            current[0].classList.remove("minimize");
        }
    });
}

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
