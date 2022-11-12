// let slidePosition = 1;
// const slides = document.getElementsByClassName('carousel.');
// const totalSlides = slides.length;

// document.
// getElementById('carousel-button-next')
// .addEventListener("click", function() {
//     moveToNextSlide;
// })

// document.
// getElementById('carousel-button-prev')
// .addEventListener("click", function() {
//     moveToPrevSlide();
// })

// function updateSlidePosition() {
//     for (let slide of slides) {
//     slide.classList.remove('carousel-item-visible');
//     slide.classList.add('carousel-item-hidden'); 
// }

// slides[slidePosition].classList.add('carousel-item-visible')
// }

// function moveToNextSlide() {
//     if (slidePosition === totalSlides - 1) {
//         slidePosition = 0;
//     } else {
//         slidePosition++;
//     }

//     updateSlidePosition();
// }

// function moveToPrevSlide() {
//     if (slidePosition === 0)  {
//         slidePosition = totalSlides - 1;
//     } else {
//         slidePosition--; 
// }

// updateSlidePosition();
// }


//  prev/next button hovering
const img = document.getElementsByTagName("img");
for(item of img) {
    item.addEventListener("mouseover", function(){
        document.getElementById("carousel-actions-prev").style.display = "block";
        document.getElementById("carousel-actions-next").style.display = "block";
    });
    item.addEventListener("mouseout", function(){
        document.getElementById("carousel-actions-prev").style.display = "none";
        document.getElementById("carousel-actions-next").style.display = "none";
    });
}
document.getElementById("carousel-actions-prev").addEventListener("mouseover", function(){
    document.getElementById("carousel-actions-prev").style.display = "block";
    document.getElementById("carousel-actions-next").style.display = "block";
})
document.getElementById("carousel-actions-next").addEventListener("mouseover", function(){
    document.getElementById("carousel-actions-prev").style.display = "block";
    document.getElementById("carousel-actions-next").style.display = "block";
})




// slides control
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
