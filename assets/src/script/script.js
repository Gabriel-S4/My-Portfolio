function menuOnOff(){

  document.getElementById("bar1").classList.toggle("bar")
  document.getElementById("bar1").classList.toggle("change")

  document.getElementById("bar2").classList.toggle("bar")
  document.getElementById("bar2").classList.toggle("barinvert")

  document.getElementById("bar3").classList.toggle("barinvertinvert")
  document.getElementById("bar3").classList.toggle("bar")

    if(document.getElementById("menu").classList.contains("menuOff")){
      document.getElementById("menu").classList.add("menuOn");
      document.getElementById("menu").classList.remove("menuOff");
    } else {
      document.getElementById("menu").classList.add("menuOff");
      document.getElementById("menu").classList.remove("menuOn");
    }
}

// Menu configuration width

window.addEventListener("resize", () => {
  const larguraAtual = window.innerWidth;
    if(larguraAtual > 800){
      document.getElementById("menu").classList.add("menuOff");
      document.getElementById("menu").classList.remove("menuOn");
    } else if(larguraAtual < 800){
      header.style.backgroundColor = `transparent`
    }
});

// Skills Container buttons

const floatContainer = document.getElementById("floatContainer");
const html = document.querySelector("html");
const body = document.querySelector("body");
const header = document.getElementById("header");

// Change header background if scroll

  const larguraAtual = window.innerWidth;
  const scrollPosition = window.scrollY

  if(scrollPosition > 200 && larguraAtual > 800){
    header.style.background = `rgba(16, 16, 16, 0.78)`
  } else {
    header.style.background = `transparent`
  }
  
window.addEventListener('scroll', function() {
  const larguraAtual = window.innerWidth;
  const scrollPosition = window.scrollY
  if(scrollPosition > 200 && larguraAtual > 800){
    header.style.background = `rgba(16, 16, 16, 0.78)`
  } else {
    header.style.background = `transparent`
  }
})

function OpenSkills(){
  floatContainer.classList.add("floatVisible")
  floatContainer.classList.remove("floatHidden")
  html.style.overflowY = `hidden`;
  body.style.overflowY = `hidden`;
  header.style.display = `none`;
}

function CloseSkills(){
  floatContainer.classList.add("floatHidden")
  floatContainer.classList.remove("floatVisible")
  html.style.overflowY = `scroll`;
  body.style.overflowY = `auto`;
  header.style.display = `flex`;
}

// -----------------------------------audioPlayer-------------------------------

const playerButton = document.querySelector('.player-button'),
      audio = document.querySelector('audio'),
      timeline = document.querySelector('.timeline'),
      soundButton = document.querySelector('.sound-button'),
      playIcon = `
        <svg class="play-pause-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496.158 496.158" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#330769;" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.002,0,111.062,0,248.085 c0,137.002,111.07,248.071,248.083,248.071C385.088,496.155,496.158,385.086,496.158,248.085z"></path> <path style="fill:#9363cf;" d="M370.805,235.242L195.856,127.818c-4.776-2.934-11.061-3.061-15.951-0.322 c-4.979,2.785-8.071,8.059-8.071,13.762v214c0,5.693,3.083,10.963,8.046,13.752c2.353,1.32,5.024,2.02,7.725,2.02 c2.897,0,5.734-0.797,8.205-2.303l174.947-106.576c4.657-2.836,7.556-7.986,7.565-13.44 C378.332,243.258,375.452,238.096,370.805,235.242z"></path> </g></svg>
      `,
        pauseIcon = `
        <svg class="play-pause-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496.158 496.158" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#330769;" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.002,0,111.062,0,248.085 c0,137.002,111.07,248.071,248.083,248.071C385.088,496.155,496.158,385.086,496.158,248.085z"></path> <g> <path style="fill:#9363cf;" d="M223.082,121.066h-60.006c-5.523,0-10,4.479-10,10v234.024c0,5.523,4.477,10,10,10h60.006 c5.523,0,10-4.477,10-10V131.066C233.082,125.545,228.605,121.066,223.082,121.066z"></path> <path style="fill:#9363cf;" d="M333.082,121.066h-60.006c-5.523,0-10,4.479-10,10v234.024c0,5.523,4.477,10,10,10h60.006 c5.523,0,10-4.477,10-10V131.066C343.082,125.545,338.605,121.066,333.082,121.066z"></path> </g> </g></svg>
      `,
      soundIcon = `
        <svg class="play-pause-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496.159 496.159" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#330769;" d="M496.159,248.085c0-137.023-111.07-248.082-248.076-248.082C111.071,0.003,0,111.063,0,248.085 c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.159,385.086,496.159,248.085z"></path> <g> <path style="fill:#9363cf;" d="M247.711,125.252c-3.41-1.851-7.559-1.688-10.813,0.426l-95.137,61.789h-35.164 c-5.845,0-10.583,4.738-10.583,10.584v92.727c0,5.845,4.738,10.583,10.583,10.583h35.164l95.137,61.79 c1.748,1.135,3.753,1.707,5.765,1.707c1.733,0,3.471-0.425,5.049-1.281c3.41-1.852,5.534-5.421,5.534-9.301V134.553 C253.244,130.672,251.121,127.103,247.711,125.252z"></path> <path style="fill:#9363cf;" d="M282.701,319.271c0.894,0,1.801-0.162,2.685-0.504c24.239-9.412,40.524-38.49,40.524-72.359 c0-29.957-13.2-57.049-33.63-69.018c-3.534-2.072-8.08-0.885-10.153,2.65c-2.073,3.536-0.885,8.082,2.651,10.153 c15.971,9.358,26.291,31.424,26.291,56.214c0,27.359-12.77,51.424-31.055,58.525c-3.82,1.481-5.714,5.781-4.231,9.602 C276.924,317.474,279.729,319.271,282.701,319.271z"></path> <path style="fill:#9363cf;" d="M302.073,350.217c0.895,0,1.802-0.162,2.684-0.504c34.046-13.219,57.822-55.979,57.822-103.988 c0-43.187-18.884-82.156-48.11-99.279c-3.534-2.072-8.082-0.885-10.152,2.652c-2.073,3.535-0.885,8.081,2.651,10.152 c24.768,14.512,40.771,48.455,40.771,86.475c0,42.027-19.883,79.1-48.353,90.154c-3.82,1.481-5.715,5.781-4.231,9.602 C296.295,348.418,299.1,350.217,302.073,350.217z"></path> <path style="fill:#9363cf;" d="M322.025,379.715c-3.005,0-5.841-1.818-6.994-4.788c-1.499-3.861,0.416-8.206,4.277-9.706 c38.764-15.051,65.837-64.404,65.837-120.019c0-50.136-21.609-95.192-55.052-114.786c-3.574-2.094-4.773-6.688-2.68-10.262 c2.094-3.574,6.688-4.774,10.263-2.68c37.948,22.232,62.469,72.369,62.469,127.728c0,61.66-31.009,116.764-75.409,134.002 C323.846,379.551,322.928,379.715,322.025,379.715z"></path> </g> </g></svg>
      `,
      muteIcon = `
        <svg class="play-pause-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496.159 496.159" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#330769;" d="M496.159,248.085c0-137.023-111.07-248.082-248.076-248.082C111.071,0.003,0,111.063,0,248.085 c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.159,385.086,496.159,248.085z"></path> <g> <path style="fill:#9363cf;" d="M284.828,128.917c-3.409-1.851-7.559-1.688-10.813,0.425l-95.137,61.791h-35.164 c-5.845,0-10.583,4.738-10.583,10.582v92.728c0,5.845,4.738,10.583,10.583,10.583h35.164l95.137,61.79 c1.748,1.135,3.754,1.708,5.765,1.708c1.733,0,3.471-0.426,5.049-1.283c3.41-1.852,5.534-5.42,5.534-9.301V138.218 C290.363,134.338,288.239,130.768,284.828,128.917z"></path> <path style="fill:#9363cf;" d="M319.82,322.937c0.894,0,1.801-0.162,2.685-0.504c24.239-9.412,40.524-38.49,40.524-72.361 c0-29.956-13.2-57.047-33.63-69.018c-3.534-2.072-8.08-0.883-10.153,2.652c-2.072,3.535-0.885,8.082,2.651,10.152 c15.971,9.358,26.291,31.424,26.291,56.213c0,27.36-12.77,51.426-31.055,58.525c-3.82,1.482-5.715,5.783-4.231,9.604 C314.041,321.139,316.847,322.937,319.82,322.937z"></path> </g> </g></svg>
      `;

function playMusic () {
  if (audio.paused) {
    audio.play();
    playerButton.innerHTML = pauseIcon;
  } else {
    audio.pause();
    playerButton.innerHTML = playIcon;
  }
}

playerButton.addEventListener('click', playMusic);

function changeTimelinePosition () {
  const percentagePosition = (100*audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
}

audio.ontimeupdate = changeTimelinePosition;

function audioEnded () {
  playerButton.innerHTML = playIcon;
}

audio.onended = audioEnded;

function changeSeek () {
  const time = (timeline.value * audio.duration) / 100;
  audio.currentTime = time;
}

timeline.addEventListener('change', changeSeek);

function toggleSound () {
  audio.muted = !audio.muted;
  soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
}

soundButton.addEventListener('click', toggleSound);

// -------------------------------------------------------------------------------