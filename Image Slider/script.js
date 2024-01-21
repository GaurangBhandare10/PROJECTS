const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imgEls = document.querySelectorAll("img");
let currentImg = 1;
let timeout;
nextEl.addEventListener("click", () => {
  currentImg += 1;
  clearTimeout(timeout);
  updateImage();
});

updateImage();

function updateImage() {
  if (currentImg > imgEls.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgEls.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeout = setTimeout(() => {
    currentImg += 1;
    updateImage();
  }, 3000);
}

prevEl.addEventListener("click", () => {
  currentImg -= 1;
  clearTimeout(timeout);
  updateImage();
});
