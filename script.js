document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navbar Toggle
    document.querySelector(".menu-toggle").addEventListener("click", () => {
      document.querySelector(".nav-links").classList.toggle("active");
    });
  
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Fade-in effect for sections
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  