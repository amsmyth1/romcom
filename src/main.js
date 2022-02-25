// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

var buttonHome = document.querySelector('.home-button');
var buttonRandomCover = document.querySelector('.random-cover-button');
var buttonMakeCover = document.querySelector('.make-new-button');
var buttonSaveCover = document.querySelector('.save-cover-button');
var buttonViewSavedCovers = document.querySelector('.view-saved-button');

var savedCoversSection = document.querySelector('.saved-covers-section')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

window.addEventListener('load', showRandomCover);
buttonRandomCover.addEventListener('click', showRandomCover);
buttonMakeCover.addEventListener('click', makeCoverView);
buttonViewSavedCovers.addEventListener('click', savedCoversView);
buttonHome.addEventListener('click', homePageView)


// Create your event handlers and other functions here 👇
function homePageView() {
  formView.classList.add('hidden')
  homeView.classList.remove('hidden')
  buttonHome.classList.add('hidden')
  buttonRandomCover.classList.remove('hidden')
  buttonSaveCover.classList.remove('hidden')
};

function makeCoverView() {
  formView.classList.remove('hidden')
  homeView.classList.add('hidden')
  buttonHome.classList.remove('hidden')
  buttonRandomCover.classList.add('hidden')
  buttonSaveCover.classList.add('hidden')
};

function savedCoversView() {
  displaySavedCovers()
  savedView.classList.remove('hidden')
  homeView.classList.add('hidden')
  buttonHome.classList.remove('hidden')
  buttonRandomCover.classList.add('hidden')
  buttonSaveCover.classList.add('hidden')
};

function displaySavedCovers() {
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML = `
    <div class="mini-cover">
      <img class="mini-cover" src="${savedCovers[i].cover}">
      <h2 class="cover-title">'${savedCovers[i].title}'</h2>
      <h3 class="tagline">A tale of
        <span class="tagline-1">${savedCovers[i].tagline1}</span>
          and
        <span class="tagline-2">${savedCovers[i].tagline2}</span>
      </h3>
    </div>
    `
  }
};

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
