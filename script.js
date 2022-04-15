//Responsive Header Changes
var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('mobile-nav');

hamburger.addEventListener("click", function(event) {
    event.preventDefault();
    hamburger.classList.toggle('hamburger-change');
    menu.classList.toggle('mobile-nav-change');

})


//Slideshow
var slideIndex = 0;
showSlides();

function showSlides () {
    var i;
    var slides = document.getElementsByClassName('myslides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex ++;
    if (slideIndex > slides.length) 
    {
        slideIndex = 1
    }    
  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000);
}