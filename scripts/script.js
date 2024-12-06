const menuButton = document.querySelector("nav ul li:last-child > button");
const dropdownMenu = document.querySelector("nav ul li:last-child > ul");

if (menuButton && dropdownMenu) {
    menuButton.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    dropdownMenu.classList.toggle("show");
}



// javascript voor de slider

// Selecteer het eerste <img> element binnen <article>
var slider_img = document.querySelector(
  "body > main > section:nth-of-type(6) div > img"
);

// de afbeeldingen
var images = [
    'djbooth_casa.png',
    'proosten_casa.png',
    'muziek_casa.png',
    'shotjes_casa.png',
    'spelletjesavond_casa.png',
    'amerika_aesthetic_casa.png'
];

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
  slider_img.setAttribute("src", "images/" + images[i]);
}

// regel 1-20 gemaakt met de volgende bron: https://www.youtube.com/watch?v=uAAD3mmQGRQ


// hieronder light-dark mode, lesstof gehaald van https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp 

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}