// Get references to the HTML elements
const imageList = document.getElementById('imageList');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let scrollPosition = 0;
const imageWidth = 280; 
nextButton.addEventListener('click', () => {
  scrollPosition += imageWidth;
  if (scrollPosition >= imageList.scrollWidth - imageList.clientWidth) {
    scrollPosition = 0;
  }
  imageList.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

prevButton.addEventListener('click', () => {
  scrollPosition -= imageWidth;

  if (scrollPosition < 0) {
    scrollPosition = imageList.scrollWidth - imageList.clientWidth;
  }

  imageList.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});


