window.onresize = menuBurgW;

function menuBurgW() {
  if (matchMedia('only screen and (max-width: 1030px)').matches) {

    document.getElementById("headerBlock").style.display = "none";  
    document.getElementById("menu-buttonShow").style.display = "block";
     document.getElementById("menu-buttonShow").style.boxShadow = " 0px 0px 15px #0CAC8F"; 

  } else { document.getElementById("menu-buttonShow").style.backgroundColor = "white";
    document.getElementById("menu-buttonShow").style.position = "static";
    document.getElementById("menu-buttonShow").style.display = "none";
    document.getElementById("menu-buttonHide").style.display = "none";  
    document.getElementById("headerBlock").style.display = "flex";  
  }
    
}

function menuBurg()  {
    document.getElementById("menu-buttonShow").style.backgroundColor = "black";
    document.getElementById("menu-buttonShow").style.position = "absolute";
    document.getElementById("menu-buttonShow").style.boxShadow = "none"; 
   // document.getElementById("menu-buttonShow").style.display = "none"; 
    document.getElementById("headerBlock").style.display = "block";  
    document.getElementById("menu-buttonHide").style.display = "block"; 
    document.getElementById("menu-buttonHide").style.backgroundColor = "white";
   // document.getElementById("menu-buttonHide").style.opacity = "1";
    // document.getElementById("headerBlock").style.opacity = "1";
}

function menuBurgHidden()  {
    document.getElementById("menu-buttonShow").style.boxShadow = " 0px 0px 15px #0CAC8F"; 
    document.getElementById("menu-buttonShow").style.backgroundColor = "white";
    document.getElementById("menu-buttonShow").style.position = "absolute";
    document.getElementById("menu-buttonShow").style.height = "100px"; 
    document.getElementById("headerBlock").style.display = "none";
    document.getElementById("menu-buttonHide").style.display = "none";   
     document.getElementById("menu-buttonShow").style.display = "block";   
}
//КОД ДЛЯ БУРГЕР МЕНЮ



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}

//NEXT

var slideIndexTwo = 1;
showSlidesTwo(slideIndexTwo);

// Next/previous controls
function plusSlidesTwo(n) {
  showSlidesTwo(slideIndexTwo += n);
}

// Thumbnail image controls
function currentSlideTwo(n) {
  showSlidesTwo(slideIndexTwo = n);
}

function showSlidesTwo(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesTwo");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexTwo = 1}
  if (n < 1) {slideIndexTwo = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexTwo-1].style.display = "block";
  dots[slideIndexTwo-1].className += " active";
  captionText.innerHTML = dots[slideIndexTwo-1].alt;
}



(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
var scrollStep = window.pageYOffset / 40;
if (window.pageYOffset > 0) {
window.scrollBy(0, -(scrollStep));
setTimeout(backToTop, 0);
}
}

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */