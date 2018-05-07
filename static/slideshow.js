document.addEventListener('DOMContentLoaded', function() {

var Button = document.getElementById('button');

var slideIndex = 0;

function showSlides() {
    document.getElementById("party").play();
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  } //https://www.w3schools.com/howto/howto_js_slideshow.asp

  Button.addEventListener('click', function () {
    showSlides();
    button.innerText = "Stop Slideshow"
  });
})
