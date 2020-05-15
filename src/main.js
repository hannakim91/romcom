
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline = document.querySelector('.tagline');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var form = document.querySelector('.form-view');
var mainCover = document.querySelector('.main-cover');
var showSavedView = document.querySelector('.saved-view');
var viewSavedCoversButton = document.querySelector('.view-saved-button');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', showCreatedCover);
randomCoverButton.addEventListener('click', showRandomCover);
makeYourOwnCoverButton.addEventListener('click', showForm);
viewSavedCoversButton.addEventListener('click', showSavedCovers);
homeButton.addEventListener('click', showHome);

// Create your event handlers and other functions here 👇
function showCreatedCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
};

function showRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
};

function showForm() {
  // When user clicks 'Make Your Own Cover Button' show hidden form section
  form.classList.remove('hidden');
  mainCover.classList.add('hidden');
  makeYourOwnCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  showSavedView.classList.add('hidden');
};

function showSavedCovers() {
  mainCover.classList.add('hidden');
  showSavedView.classList.remove('hidden');
  form.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function showHome() {
  mainCover.classList.remove('hidden');
  homeButton.classList.add('hidden');
  form.classList.add('hidden');
  showSavedView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  makeYourOwnCoverButton.classList.remove('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  //math.random returns a number between 0-1, mult by array length
}
