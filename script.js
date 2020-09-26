var preloader = document.getElementById('preloader');
var body = document.getElementById('body');
function exitPreloader(){
    preloader.style.display = 'none';
    body.style.backgroundColor = 'white';
    body.style.overflowX = '';
    body.style.overflowY = '';

}