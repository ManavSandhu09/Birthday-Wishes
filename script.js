let pages = document.querySelectorAll(".page");
let index = 0;

const music = document.getElementById("bgMusic");
const pageSound = document.getElementById("pageSound");

music.volume = 0.2;
pageSound.volume = 0.15;

document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

function nextPage() {
  if (index < pages.length - 1) {
    // Add exit class to the current page
    pages[index].classList.add("exit");
    pages[index].classList.remove("active");
    
    index++;
    
    // Activate the next page
    pages[index].classList.add("active");
    
    pageSound.currentTime = 0;
    pageSound.play();
  }
}


