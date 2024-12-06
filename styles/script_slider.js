// Selecteer het eerste <img> element binnen <article>
var slider_img = document.querySelector('section:nth-of-type(6)> article > img');

// Array met afbeeldingen
var images = ['student_maya.png', 'student_wick.png'];
var i = 0;

// Vorige afbeelding
function prev() {
  if (i <= 0) i = images.length;
  i--;
  setImg();
}

// Volgende afbeelding
function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  setImg();
}

// Update het 'src'-attribuut van de afbeelding
function setImg() {
  slider_img.setAttribute('src', 'images/' + images[i]);
}

// regel 1-20 gemaakt met de volgende bron: https://www.youtube.com/watch?v=uAAD3mmQGRQ 

