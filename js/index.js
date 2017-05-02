function init() {
    console.log('holi');
    
    showSlides();
}

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    //console.log(slides);
    var dots = $(".dot");
    //console.log(dots);
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
        console.log("display none");
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}


var slideIndex = 1;
showSlidesClick(slideIndex);

function plusSlides(n) {
  showSlidesClick(slideIndex += n);
}

function currentSlide(n) {
  showSlidesClick(slideIndex = n);
}

function showSlidesClick(n) {
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