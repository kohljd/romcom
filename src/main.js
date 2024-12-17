// Create variables targetting the relevant DOM elements here 👇
const coverImage = document.querySelector(".cover-image");
const coverTitle = document.querySelector(".cover-title");
const coverTagLine1 = document.querySelector(".tagline-1");
const coverTagLine2 = document.querySelector(".tagline-2");

const randomCoverButton = document.querySelector(".random-cover-button");

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", getRandomCover)

// Create your event handlers and other functions here 👇
function getRandomCover() {
  let descriptorIndex1 = getRandomIndex(descriptors);
  let descriptorIndex2 = (descriptorIndex1 === (descriptors.length - 1)) ? descriptorIndex1 + 1
    : descriptorIndex1 - 1;

  currentCover = createCover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[descriptorIndex1],
    descriptors[descriptorIndex2],
  );

  coverImage.src = currentCover.coverImg;
  coverTitle.innerHTML = currentCover.title;
  coverTagLine1.innerHTML = currentCover.tagline1;
  coverTagLine2.innerHTML = currentCover.tagline2;
}

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
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
