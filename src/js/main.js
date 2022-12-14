const slidesContainer = document.getElementById("slides-container-mobile");
const slideMobile = document.querySelector(".slide-mobile");
const prevButtonMobile = document.getElementById("slide-arrow-prev-mobile");
const nextButtonMobile = document.getElementById("slide-arrow-next-mobile");

nextButtonMobile.addEventListener("click", () => {
  const slideWidth = slideMobile.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButtonMobile.addEventListener("click", () => {
  const slideWidth = slideMobile.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

const slidesContainerDesktop = document.getElementById(
  "slides-container-desktop"
);
const slideDesktop = document.querySelector(".slide-desktop");
const prevButtonDesktop = document.getElementById("slide-arrow-prev-desktop");
const nextButtonDesktop = document.getElementById("slide-arrow-next-desktop");

nextButtonDesktop.addEventListener("click", () => {
  const slideWidth = slideDesktop.clientWidth;
  slidesContainerDesktop.scrollLeft += slideWidth;
});

prevButtonDesktop.addEventListener("click", () => {
  const slideWidth = slideDesktop.clientWidth;
  slidesContainerDesktop.scrollLeft -= slideWidth;
});

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
