document.addEventListener('DOMContentLoaded', function() {

var Button = document.getElementById('button');
var Stop = document.getElementById('stop');
var Message = document.getElementById('add');
var info = document.getElementById('info');
var operator = document.querySelector('#music');

var slideIndex = 0;

function stopSlides() {
  location.reload()
}

function showSlides() {
    Message.style.display = "none";
    info.style.display = "none"
    operator.style.display = "none"

    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.height = "700px";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "inline-block";
    setTimeout(showSlides, 1800); // Change image every 2 seconds

  } //https://www.w3schools.com/howto/howto_js_slideshow.asp

  Button.addEventListener('click', function () {
      changeMusic()
      showSlides();
      Button.style.display = "none"
      Stop.style.display = "inline-block"
  });

  Stop.addEventListener('click', function () {
      stopSlides();
  });

  changeMusic = function(){
    var opr = operator.value
    document.getElementById(opr).play();
    }
});
