/* ////////////////////////////////////////
       SLIDER EAST PAGINA
/////////////////////////////////////// */

(function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll("main > section:nth-of-type(2) div");
  
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