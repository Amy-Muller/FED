/* ////////////////////////////////////////
           MENU KNOP
/////////////////////////////////////// */

const menuButton = document.querySelector("nav button:first-of-type");
const dropdownMenu = document.querySelector("nav ul li ul");
const overlay = document.querySelector("header > div");

if (menuButton && dropdownMenu) {
    menuButton.addEventListener("click", () => {
        // de button animatie
        menuButton.classList.toggle("active");
        
        // de dropdown 
        dropdownMenu.classList.toggle("show");

        //de overlay
        overlay.classList.toggle("active");
    });
}

/* ////////////////////////////////////////
           SLIDER INDEX PAGINA - regel 27-59 gemaakt met de volgende bron: https://www.youtube.com/watch?v=uAAD3mmQGRQ
/////////////////////////////////////// */

var slider_img = document.querySelector(
  "body > main > section:nth-of-type(7) div > img"
);

var images = [
    'djbooth_casa.png',
    'proosten_casa.png',
    'muziek_casa.png',
    'shotjes_casa.png',
    'spelletjesavond_casa.png',
    'amerika_aesthetic_casa.png'
];

var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  setImg();
}

function setImg() {
  slider_img.setAttribute("src", "images/" + images[i]);
}

/* ////////////////////////////////////////
       LIGHT DARK MODE 
/////////////////////////////////////// */

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

document.querySelector("header>button").addEventListener("click", myFunction);

/* ////////////////////////////////////////
       Embedding video 
/////////////////////////////////////// */
var myVideo = document.querySelector("video");

document.querySelector("section:nth-of-type(3) button:first-of-type").addEventListener("click", playPauze);

function playPauze(){
  if(myVideo.paused)
  myVideo.play();
else myVideo.pause()
}

const geluidUit = document.querySelector("section:nth-of-type(3) button:nth-of-type(2)");
  
geluidUit.addEventListener('click', () => {
    myVideo.muted = !myVideo.muted;
    geluidUit.textContent = myVideo.muted ? 'Geluid aan' : 'Geluid uit';
  });

const geluidSlider = document.querySelector("section:nth-of-type(3) input")

geluidSlider.addEventListener('input', () => {
  myVideo.volume = parseFloat(geluidSlider.value); // Converteer de waarde naar een getal
});

/* ////////////////////////////////////////
       ANIMATION ON SCROLL - bron lesstof https://www.youtube.com/watch?v=T33NN_pPeNI
/////////////////////////////////////// */

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main > section:nth-of-type(3) section");

  // viewport instellingen
  const observerOptions = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); 
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});

