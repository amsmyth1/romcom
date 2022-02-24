// Create variables targetting the relevant DOM elements here 👇


var coverImage = document.querySelector('.cover-image');
var buttonRandomCover = document.querySelector('.random-cover-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

window.addEventListener('load', showRandomCover);
buttonRandomCover.addEventListener('click', showRandomCover);


// Create your event handlers and other functions here 👇
function showRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], "LOVE SEX LOVE", "love", "lies");
  renderCover();
};

function renderCover() {
  coverImage.src = currentCover.cover;
};


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
