let list = document.querySelector('.list');
let imgs = Array.from(list.children);
const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");

// Getting images width
const imgWidth = imgs[0].getBoundingClientRect().width;
//console.log(imgWidth);

// Arranging imgs next to each other
function setImgPosition(img, index) {
  img.style.left = imgWidth * index + "px";
}

imgs.forEach(setImgPosition);

/*
When right button is clicked, move images to the left.
*/

nextBtn.addEventListener('click', function () {
  const currentImg = list.querySelector('.current-image');
  const nextImg = currentImg.nextElementSibling;
});

/*
When left button is clicked, move images to the right.
*/