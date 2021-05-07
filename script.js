const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});



function show () {
    let welcome = document.getElementById('sub1');
    welcome.style.display = '';
}
function hide () {
    let welcome = document.getElementById('sub1');
    welcome.style.display = 'none';
}

function init() {
    let surround = document.getElementById('surroundDiv');
    surround.onmouseover = show;
    surround.onmouseout = hide;
}


function show () {
    let welcome = document.getElementById('sub2');
    welcome.style.display = '';
}
function hide () {
    let welcome = document.getElementById('sub2');
    welcome.style.display = 'none';
}

function init() {
    let surround = document.getElementById('surroundDiv2');
    surround.onmouseover = show;
    surround.onmouseout = hide;
}





window.onload = init;