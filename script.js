const pages = document.querySelectorAll(".page");
const pageSound = document.getElementById("pageSound");

let currentPage = 0;

document.addEventListener("click", () => {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flip");
    pageSound.play();
    currentPage++;
  }
});



