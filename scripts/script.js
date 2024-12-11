



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

// /* ////////////////////////////////////////
//        SLIDER EAST PAGINA
// /////////////////////////////////////// */

// (function() {
//   let slideIndex = 0;
//   const slides = document.querySelectorAll("main > section:nth-of-type(2) div");

//   function showSlides() {
//     const current = slides[slideIndex];
//     const nextIndex = (slideIndex + 1) % slides.length;
//     const next = slides[nextIndex];

    
//     slides.forEach(slide => {
//       slide.classList.remove("active", "previous");
//       slide.style.transform = "translateX(100%)"; 
//     });

  
//     current.classList.add("previous");
//     current.style.transform = "translateX(-100%)"; 
//     next.classList.add("active");
//     next.style.transform = "translateX(0)"; 

//     slideIndex = nextIndex;

//     setTimeout(showSlides, 4000);
//   }

//   showSlides();
// })();

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

