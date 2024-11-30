const images = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.vorige');
const nextButton = document.querySelector('.volgende');

let currentIndex = 0;
const totalImages = images.children.length;

function updateCarousel() {
  const width = images.children[0].clientWidth;
  images.style.transform = `translateX(-${currentIndex * width}px)`;
}

function moveToNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function moveToPreviousImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

prevButton.addEventListener('click', moveToPreviousImage);
nextButton.addEventListener('click', moveToNextImage);

setInterval(moveToNextImage, 5000);
