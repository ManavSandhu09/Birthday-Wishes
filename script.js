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
    pages[index].classList.remove("active");
    index++;
    pages[index].classList.add("active");
    pageSound.currentTime = 0;
    pageSound.play();
  }
}

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

// ✨ Soft random sticker placement
const stickers = document.querySelectorAll(".sticker");

const placements = [
  { top: "12%", left: "-35px", rotate: -18, scale: 0.9 },
  { bottom: "18%", right: "-28px", rotate: 12, scale: 0.85 }
];

stickers.forEach((sticker, i) => {
  const p = placements[i % placements.length];
  sticker.style.top = p.top || "auto";
  sticker.style.bottom = p.bottom || "auto";
  sticker.style.left = p.left || "auto";
  sticker.style.right = p.right || "auto";
  sticker.style.transform = `rotate(${p.rotate}deg) scale(${p.scale})`;
});
