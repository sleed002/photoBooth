document.addEventListener('DOMContentLoaded', function() {

var Button = document.getElementById('button');
var Stop = document.getElementById('stop');

var slideIndex = 0;

function stopSlides() {
  location.reload()
}

function showSlides() {
    document.getElementById("party").play();

    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.height = "500px";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 1800); // Change image every 2 seconds

  } //https://www.w3schools.com/howto/howto_js_slideshow.asp

  Button.addEventListener('click', function () {
      showSlides();
      Button.style.display = "none"
      Stop.style.visibility = "visible"
  });

  Stop.addEventListener('click', function () {
      stopSlides();
  });
})
