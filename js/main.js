const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const leftPanel = document.querySelector('.left-panel');
const mainBody = document.querySelector('.main-body');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);



function toggleMenu () {
    if(!showMenu) {
        hamburger.classList.add('open');
        leftPanel.style.display = 'block';
        mainBody.style.position = 'relative';
        mainBody.style.top = '55rem';
        

        showMenu = true; 
    } else {
        hamburger.classList.remove('open');
        leftPanel.style.display = 'none';
        mainBody.style.position = 'relative';
        mainBody.style.top = '0rem';
        showMenu = false;
    }
}


let slideIndex = 1;
let timer = null;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 10000);
}