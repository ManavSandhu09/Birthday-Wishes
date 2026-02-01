const pages = document.querySelectorAll(".page");
const music = document.getElementById("bgMusic");
const sound = document.getElementById("pageSound");

let index = 0;
let started = false;

music.volume = 0.25;
sound.volume = 0.15;

function nextPage() {
  if (!started) {
    music.play();
    started = true;
  }

  if (index < pages.length - 1) {
    pages[index].classList.remove("active");
    index++;
    pages[index].classList.add("active");
    sound.currentTime = 0;
    sound.play();
  }
}
