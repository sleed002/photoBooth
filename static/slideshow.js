document.addEventListener('DOMContentLoaded', function() {
//this file handles everything related to the slideshow in Vanilla JS
  let Button = document.getElementById('button');
  let Stop = document.getElementById('stop');
  let Message = document.getElementById('add');
  let info = document.getElementById('info');
  let operator = document.querySelector('#music');
  //these items will be hidden during the slideshow
  var slideIndex = 0;

  function stopSlides() {
    location.reload()
  }
  //modified code from the link below
  function showSlides() { //https://www.w3schools.com/howto/howto_js_slideshow.asp
    Message.style.display = "none";
    info.style.display = "none"
    operator.style.display = "none"
    //put each slide in the same place and same size and change display to none for all
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.height = "700px";
    } //for each slide change diplay to show the slide for 1.8 seconds
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "inline-block";
    setTimeout(showSlides, 1800); // Change image every 1.8 seconds
  }

//the event listener for the button is set here. It calls the music function and the slideshow
  Button.addEventListener('click', function () {
      changeMusic()
      showSlides();
      //hide the run button and show the hide button
      Button.style.display = "none"
      Stop.style.display = "inline-block"
  });
  //the event listener for stopping the slide show
  Stop.addEventListener('click', function () {
      stopSlides();
  });
  //this function sets the music to the user's selection and plays it
  changeMusic = function(){
    var opr = operator.value
    document.getElementById(opr).play();
    }
});
