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
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var tagline1Input = document.querySelector('.user-desc1');
var tagline2Input = document.querySelector('.user-desc2');
var createNewBookButton = document.querySelector('.create-new-book-button');
var savedCoversSection = document.querySelector('.saved-covers-section');
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

window.addEventListener('load', showRandomCover);
randomCoverButton.addEventListener('click', showRandomCover);
makeYourOwnCoverButton.addEventListener('click', showForm);
viewSavedCoversButton.addEventListener('click', showSavedCovers);
homeButton.addEventListener('click', showHome);
createNewBookButton.addEventListener('click', showNewBook);
saveCoverButton.addEventListener('click', saveCoverDM);
viewSavedCoversButton.addEventListener('click', displaySavedCovers);
savedCoversSection.addEventListener('dblclick', deleteSavedCover);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showRandomCover() {
  createCover();
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2
}

function createCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
}

function showForm() {
  form.classList.remove('hidden');
  mainCover.classList.add('hidden');
  makeYourOwnCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  showSavedView.classList.add('hidden');
}

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

function makeNewBook() {
  currentCover = new Cover(coverInput.value, titleInput.value, tagline1Input.value, tagline2Input.value);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function showNewBook(event) {
  event.preventDefault();
  makeNewBook();
  showHome();
  covers.push(currentCover.cover);
  titles.push(currentCover.title);
  descriptors.push(currentCover.tagline1, currentCover.tagline2);
}

function saveCoverDM() {
  var duplicateCover = false;
    for (var i = 0; i < savedCovers.length; i++ ) {
      if (currentCover.cover === savedCovers[i].cover && currentCover.title === savedCovers[i].title && currentCover.tagline1 === savedCovers[i].tagline1 && currentCover.tagline2 === savedCovers[i].tagline2) {
        duplicateCover = true;
      }
    }
    if (duplicateCover === false) {
    savedCovers.push(currentCover);
    }
}

function displaySavedCovers() {
  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML +=
    `<section class="main-cover" id="${savedCovers[i].id}"/>
      <img class="cover-image" src="${savedCovers[i].cover}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </section>`
  }
}

function deleteSavedCover(event) {
  var coverToDelete = event.target.parentElement.id;
  for (var i = 0; i < savedCovers.length; i++) {
    if (coverToDelete == savedCovers[i].id) {
      savedCovers.splice(i, 1);
    }
  }
  displaySavedCovers();
}
