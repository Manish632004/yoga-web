window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ------------------------------------------About section ki animation
window.addEventListener('scroll', function () {
  const aboutLeft = document.querySelector('.aboutLeft');
  const aboutRight = document.querySelector('.aboutRightImg');

  const triggerBottom = window.innerHeight * 0.85;

  if (aboutLeft.getBoundingClientRect().top < triggerBottom) {
    aboutLeft.classList.add('active');
  } else {
    aboutLeft.classList.remove('active');
  }

  if (aboutRight.getBoundingClientRect().top < triggerBottom) {
    aboutRight.classList.add('active');
  } else {
    aboutRight.classList.remove('active');
  }
});


//-------------------------------------------- animation on page reload
window.addEventListener('load', function () {
  const aboutLeft = document.querySelector('.aboutLeft');
  const aboutRight = document.querySelector('.aboutRightImg');
  
  aboutLeft.classList.add('active');
  aboutRight.classList.add('active');
});


// ------------------------------------------------para and heading pop up
window.addEventListener('scroll', function () {
  const triggerBottom = window.innerHeight * 0.85;

  document.querySelectorAll('.headings').forEach((section) => {
    const subheading = section.querySelector('.section-subheading');
    const heading = section.querySelector('.section-heading');

    if (subheading.getBoundingClientRect().top < triggerBottom) {
      subheading.classList.add('active');

      setTimeout(() => {
        heading.classList.add('active');
      }, 10); 
    } else {
      subheading.classList.remove('active');
      heading.classList.remove('active');
    }
  });
});

window.addEventListener('load', function () {
  document.querySelectorAll('.headings').forEach((section) => {
    const subheading = section.querySelector('.section-subheading');
    const heading = section.querySelector('.section-heading');

    subheading.classList.add('active');
    setTimeout(() => {
      heading.classList.add('active');
    }, 100);
  });
});


// -----------------------------yoga classes schedule section
window.addEventListener("scroll", function () {
  const triggerBottom = window.innerHeight * 0.85;
  const cards = document.querySelectorAll(".classes-section .service-card");

  cards.forEach((card, index) => {
    if (card.getBoundingClientRect().top < triggerBottom) {
      setTimeout(() => {
        card.classList.add("active");
      }, index * 200); 
    } else {
      card.classList.remove("active"); 
    }
  });
});


// -----------------------------trainers section scroll animation
window.addEventListener("scroll", function () {
  const triggerBottom = window.innerHeight * 0.85;
  const trainerCards = document.querySelectorAll(".trainers-section .trainer-card");

  trainerCards.forEach((card, index) => {
    if (card.getBoundingClientRect().top < triggerBottom) {
      setTimeout(() => {
        card.classList.add("show");   
      }, index * 200); 
    } else {
      card.classList.remove("show"); 
    }
  });
});
