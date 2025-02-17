// Create variables targetting the relevant DOM elements here 👇
const homeView = document.querySelector(".home-view");
const savedView = document.querySelector(".saved-view");
const formView = document.querySelector(".form-view");

const coverImage = document.querySelector(".cover-image");
const coverTitle = document.querySelector(".cover-title");
const coverTagLine1 = document.querySelector(".tagline-1");
const coverTagLine2 = document.querySelector(".tagline-2");

const homeButton = document.querySelector(".home-button");
const makeCoverButton = document.querySelector(".make-new-button");
const randomCoverButton = document.querySelector(".random-cover-button");
const saveCoverButton = document.querySelector(".save-cover-button");
const viewSavedButton = document.querySelector(".view-saved-button");

const makeCoverFormData = {
  cover: document.querySelector("#cover"),
  title: document.querySelector("#title"),
  descriptor1: document.querySelector("#descriptor1"),
  descriptor2: document.querySelector("#descriptor2"),
};
const submitCoverButton = document.querySelector(".create-new-book-button");

const savedCoversSection = document.querySelector(".saved-covers-section");

// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here
homeButton.addEventListener("click", viewHome);
makeCoverButton.addEventListener("click", viewForm);
randomCoverButton.addEventListener("click", getRandomCover);
viewSavedButton.addEventListener("click", viewSavedCovers);
submitCoverButton.addEventListener("click", makeOwnCover);
saveCoverButton.addEventListener("click", saveCover);

// Create your event handlers and other functions here 👇
function viewHome() {
  const hiddenElements = [formView, savedView, homeButton];
  const shownElements = [homeView, randomCoverButton, saveCoverButton, viewSavedButton, makeCoverButton];

  changeView(shownElements, hiddenElements);
}

function viewForm() {
  const hiddenElements = [homeView, savedView, randomCoverButton, saveCoverButton];
  const shownElements = [formView, homeButton, viewSavedButton, makeCoverButton];

  changeView(shownElements, hiddenElements);
}

function viewSavedCovers() {
  const hiddenElements = [formView, homeView, randomCoverButton, saveCoverButton];
  const shownElements = [savedView, homeButton, viewSavedButton, makeCoverButton];

  changeView(shownElements, hiddenElements);

  savedCoversSection.innerHTML = "";

  for (const cover of savedCovers) {
    savedCoversSection.innerHTML +=
    `<section class="mini-cover" id=${cover.id} ondblclick="deleteSavedCover(this)">
    <img class="cover-image" src= ${cover.coverImg}>
    <h2 class="cover-title">${cover.title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${cover.tagline1}</span> and <span class="tagline-2">${cover.tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>
    `;
  }
}

function changeView(shownElements, hiddenElements) {
  for (const element of shownElements) {
    element.classList.remove("hidden");
  }

  for (const element of hiddenElements) {
    element.classList.add("hidden");
  }
}

function deleteSavedCover(coverSection) {
  const coverIndex = savedCovers.findIndex((cover) => (cover.id === coverSection.id));

  savedCovers.splice(coverIndex, 1);
  coverSection.remove();
}

function getRandomCover() {
  let descriptorIndex1 = getRandomIndex(descriptors);
  let descriptorIndex2 = (descriptorIndex1 === (descriptors.length - 1)) ? descriptorIndex1 - 1
    : descriptorIndex1 + 1;

  currentCover = createCover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[descriptorIndex1],
    descriptors[descriptorIndex2],
  );

  displayCover();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeOwnCover() {
  event.preventDefault();

  // create cover
  currentCover = createCover(
    makeCoverFormData.cover.value,
    makeCoverFormData.title.value,
    makeCoverFormData.descriptor1.value,
    makeCoverFormData.descriptor2.value
  );

  // add user input to respective data arrays
  if (!covers.includes(currentCover.coverImg)) (covers.push(currentCover.coverImg));
  if (!titles.includes(currentCover.title)) (titles.push(currentCover.title));
  if (!descriptors.includes(currentCover.tagline1)) (descriptors.push(currentCover.tagline1));
  if (!descriptors.includes(currentCover.tagline2)) (descriptors.push(currentCover.tagline2));

  displayCover();
  viewHome();
}

function displayCover() {
  coverImage.src = currentCover.coverImg;
  coverTitle.innerHTML = currentCover.title;
  coverTagLine1.innerHTML = currentCover.tagline1;
  coverTagLine2.innerHTML = currentCover.tagline2;
}

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}
