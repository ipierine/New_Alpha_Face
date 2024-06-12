//MAIN.JS
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== TROCAR A COR DE FUNDO NO SCROLL ====================*/
// window.onscroll = function () {
//   var header = document.getElementById("header");
//   let navHeader = document.querySelector(".nav");
//   let navLogo = document.querySelector(".nav__logo");

//   if (window.scrollY > 200) {
//     header.style.backgroundColor = "var(--first-color)"; // Altere para a cor desejada
//     header.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.301)";
//     navHeader.style.height = "calc(var(--header-height) + 1.5rem)";
//     navLogo.style.height = "40px";
//     navLogo.style.width = "60px";
//   } else {
//     header.style.backgroundColor = "#062f481e"; // Cor inicial do cabeçalho
//     header.style.boxShadow = "none";
//     navHeader.style.height = "calc(var(--header-height) + 4.5rem)";
//     navLogo.style.height = "60px";
//     navLogo.style.width = "80px";
//   }
// };

//Função Autoplay Video
window.addEventListener('load', function(){
  let videoautoplay=document.querySelector('#video')
  videoautoplay.play()
  
  videoautoplay.loop=true
})

/*==================== ACCORDION SKILLS ====================*/

// const skillsContent = document.getElementsByClassName('skills__content'),
//   skillsHeader = document.querySelectorAll('.skills__header')

// function toggleSkills() {
//   let itemClass = this.parentNode.className
//   for (i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].className = 'skills__content skills__close'
//   }

//   if (itemClass === 'skills__content skills__close') {
//     this.parentNode.className = 'skills__content skills__open'
//   }
// }

// skillsHeader.forEach((element) => {
//   element.addEventListener('click', toggleSkills)
// })

/*==================== QUALIFICATION TABS ====================*/

// const tabs = document.querySelectorAll('[data-target]'),
//   tabContents = document.querySelectorAll('[data-content]')

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     const target = document.querySelector(tab.dataset.target)

//     tabContents.forEach(tabContent => {
//       tabContent.classList.remove('qualification__active')
//     })
//     target.classList.add('qualification__active')

//     tabs.forEach(tab => {
//       tab.classList.remove('qualification__active')
//     })
//     tab.classList.add('qualification__active')
//   })
// })

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");
const iframes = document.querySelectorAll("iframe");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose, i) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
    iframes.forEach((iframe) => {
      iframe.src = iframe.src;
    });
  });
});

var swiper4 = new Swiper(".diferencialSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    568: {
      coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  },
},
});

/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    568: {
      slidesPerView: 4,
    },
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  effect: "fade",
  thumbs: {
    swiper: swiper,
  },
});

/*==================== ESPECIALIDADES  ====================*/

let sliderThumb = document.querySelectorAll(".compare .compare-ip");
let sliderItem = document.querySelectorAll(".compare .before .after");
sliderThumb.forEach((slideThumb, i) => {
  slideThumb.addEventListener("input", function (e) {
    sliderItem.forEach((slideItem) => {
      slideItem.style.width = +e.target.value + "px";
    });
  });
});

sliderThumb.forEach((slideThumb, i) => {
  slideThumb.addEventListener("change", function (e) {
    sliderItem.forEach((slideItem) => {
      slideItem.style.width = +e.target.value + "px";
    });
  });
});

/*==================== ESPECIALIDADES SWIPER  ====================*/
var swiperEspecialidades = new Swiper(".especialidadesSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  autoplay: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
