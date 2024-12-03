document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".scroll-animation");
  
    elements.forEach((element) => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  });
  