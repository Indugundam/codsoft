var slideIndex = 1; // Start slide index from 1 to display the first image statically
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} // If reached the end, start from the first image
  if (n < 1) {slideIndex = slides.length} // If reached the beginning, start from the last image
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slides[slideIndex-1].style.display = "block"; // Display the current slide
}
