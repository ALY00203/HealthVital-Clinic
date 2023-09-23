// slider-1
const slides = document.querySelectorAll('.fade');
let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

setInterval(nextSlide, 5000);
showSlide();
// ------------------------------------------------
// accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');

        // Toggle the content of the clicked section
        accordionContent.classList.toggle('active');
        
        // Close all other content sections
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                otherHeader.parentElement.querySelector('.accordion-content').classList.remove('active');
            }
        });
    });
});
// ------------------------------------------------

// slider-2
const slider = document.querySelector('.sliderr');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let position = 0;
const cardWidth = 100; // Adjust to match card width
nextBtn.addEventListener('click', () => {
  if (position > -(slider.scrollWidth - slider.offsetWidth)) {
    position -= cardWidth;
    slider.style.transform = `translateX(${position}px)`;
  }
});
prevBtn.addEventListener('click', () => {
  if (position < 0) {
    position += cardWidth;
    slider.style.transform = `translateX(${position}px)`;
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.links a[href^="#"]');
  
  navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
              const offset = targetSection.offsetTop - 100; // Adjust the offset as needed
              window.scrollTo({
                  top: offset,
                  behavior: "smooth"
              });
          }
      });
  });
});
// ------------------------------------------------
// scrollToTopButton
const scrollToTopButton = document.getElementById('scrollToTopBtn');

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show the button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
// ------------------------------------------------
// slider-shop













