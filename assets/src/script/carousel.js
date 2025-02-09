console.clear();
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

//Buttons
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

//Indicators
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

//Arrange slide position
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

//When Left CLICKED, move slides to left
nextButton.addEventListener('click', (e)=>{
  
  const currentSlide = track.querySelector('.current-slide');
  let nextSlide = currentSlide.nextElementSibling;
  
  if (!nextSlide){
      nextSlide = slides[0];
  }
  
  const currentDot = dotsNav.querySelector('.current-slide');
  let nextDot = currentDot.nextElementSibling;
  
  if (!nextDot){
      nextDot = dots[0];
  }
  
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);      
  
});

//When Right CLICKED, move slides to right
prevButton.addEventListener('click', (e)=>{
  
  const currentSlide = track.querySelector('.current-slide');
  let prevSlide = currentSlide.previousElementSibling;
  
  if (!prevSlide){
      prevSlide = slides[slides.length-1];
  }
  
  const currentDot = dotsNav.querySelector('.current-slide');
  let prevDot = currentDot.previousElementSibling;
  
  if (!prevDot){
      prevDot = dots[dots.length-1];
  }
  
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);  
  
});

//Move to slide functions
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) =>{
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

//automate slide movement
const autoplaySlide = () => {
  nextButton.click();
}

//When any Nav CLICKED, move to that slide
dotsNav.addEventListener('click', e=>{
  
  const targetDot = e.target.closest('button');
  
  if (!targetDot) return; //Exit function if null
  
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];
  
  moveToSlide(track,currentSlide,targetSlide);
  updateDots(currentDot, targetDot);  
    
});


//AUTOPLAY (in ms)
const autoplay = true;
const durationBetweenSlides = 5000;
if (autoplay){
  const runAutoPlay = setInterval(autoplaySlide,durationBetweenSlides);  
}
