/* ////////////////////////////////////////
       SLIDER EAST PAGINA
/////////////////////////////////////// */

(function() {
    const slides = document.querySelectorAll("main > section:nth-of-type(2) li");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (slides.length > 0) {
      slides[0].style.transform = "translateX(0)";
    }

    if (prefersReducedMotion) return;

    let slideIndex = 0;

    function showSlides() {
      const current = slides[slideIndex];
      const nextIndex = (slideIndex + 1) % slides.length;
      const next = slides[nextIndex];
  
      
      slides.forEach(slide => {
        slide.classList.remove("active", "previous");
        slide.style.transform = "translateX(100%)"; 
      });
  
    
      current.classList.add("previous");
      current.style.transform = "translateX(-100%)"; 
      next.classList.add("active");
      next.style.transform = "translateX(0)"; 
  
      slideIndex = nextIndex;
  
      setTimeout(showSlides, 4000);
    }
  
    showSlides();
  })();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    clearInterval(carouselInterval); // Stop the carousel
  } else {
    const carouselInterval = setInterval(showNextImage, 3000);
  }

  // Bronnen: Class list begrijpen https://developer.mozilla.org/en-US/docs/Web/API/Element/classList.com
  // transform toevoegen aan javascript https://www.w3schools.com/jsref/prop_style_transform.asp
//  ChatGPT4o - toen mijn eerste versie code niet goed werkte. 