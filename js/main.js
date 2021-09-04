$(function(){

function scrollTo(el){
  window.scroll({
    top: el.offsetTop,
    behavior: 'smooth'
  })
}

const btnScroll = document.querySelector('.arrow')
const sectionProject = document.querySelector('.project')

btnScroll.addEventListener('click', () => scrollTo(sectionProject));

$('.start').on('mousemove', (e) => {
  const x = e.pageX / $(window).width();
  const y = e.pageY / $(window).height();

  $('.flyicon1').css(
    'transform',
    'translate( -' + x * 230 + 'px, -' + y * 230 + 'px)'
  );
  $('.flyicon2').css(
    'transform',
    'translate(' + x * 190 + 'px, ' + y * 190 + 'px)'
  );
  $('.flyicon3').css(
    'transform',
    'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
  );
  $('.flyicon4').css(
    'transform',
    'translate(-' + x * 60 + 'px, ' + y * 60 + 'px)'
  );
  $('.flyicon5').css(
    'transform',
    'translate(-' + x * 120 + 'px, -' + y * 120 + 'px)'
  );
  $('.flyicon6').css(
    'transform',
    'translate(-' + x * 20 + 'px, -' + y * 150 + 'px)'
  );
  $('.flyicon7').css(
    'transform',
    'translate(-' + x * 160 + 'px, ' + y * 20 + 'px)'
  );
});

var text = $('.typewriter').text();

var length = text.length;
var timeOut;
var character = 0;


(function typeWriter() { 
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
        $('.typewriter').text(type);
        typeWriter();
        
        if (character == length) {
            clearTimeout(timeOut);
        }
        
    }, 400);
}());



let $btnStart = document.querySelector('#start')
let $gameZona = document.querySelector('#game')
let $time = document.querySelector('#time')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')

let counter;
let isGame = false;
let timeDefalt = 10;
let colors = ['#00d4ff', '#fdbb2d', '#fc466b', '#fd1d1d', '#833ab4', '#5bc885', '#3f5efb', '#94bbe9', '#eeaeca', '#fd1dbf' ];
let boxTexts= ['JS', 'HTML', 'css', 'vue', 'scss', 'php', 'git', 'gulp', 'node']
$time.textContent = timeDefalt;

$btnStart.addEventListener('click', startGame)
$gameZona.addEventListener('click', handleBoxClick)

function updateTimer() {
  // let seconds = Number($time.textContent);
  let seconds = timeDefalt;
  let interval = setInterval(() => {
    isGame = true;
    $time.innerHTML = seconds.toFixed(1);
    seconds = seconds - 0.1;
    if (seconds < 0) {
      clearInterval(interval);
      endGame()
    }

  }, 100);

}

function hide(el){
  el.classList.add('hide')
}
function show(el){
  el.classList.remove('hide')
}

function startGame() {
  // isGame = false;
  $btnStart.classList.add('hide')
  $gameZona.style.backgroundColor = '#fff';
  show($timeHeader)
  hide($resultHeader)
  counter = 0;

  updateTimer();
  renderBox();

}

function endGame(){
  $gameZona.innerHTML = ''
  show($btnStart);
  $gameZona.style.backgroundColor = '#ccc';
  hide($timeHeader)
  show($resultHeader)
  document.querySelector('#result').innerText = counter;
}


function handleBoxClick(e) {
  if(!isGame){
     return false;
    }
  if (e.target.dataset.box) {
    e.target.style.transform = 'scale(0)';
    // setTimeout(renderBox, 400);
    renderBox();

    counter++;
  console.log(counter);
  }
}


function renderBox() {
  let boxEl = document.createElement('div');
  let boxSize = randomInteger(35, 110);
  let maxWidth = $gameZona.clientWidth - boxSize;
  let maxHeight = $gameZona.clientHeight - boxSize;

  boxEl.style.width = boxEl.style.height = boxSize + 'px';
  boxEl.classList.add('game__item');
  boxEl.style.backgroundColor = colors[randomInteger(0, colors.length - 1)];
  boxEl.innerText = boxTexts[randomInteger(0, boxTexts.length - 1)];
  boxEl.style.top = randomInteger(0, maxWidth) + 'px';
  boxEl.style.left = randomInteger(0, maxHeight) + 'px';
  boxEl.dataset.box = 'yes';
  $gameZona.insertAdjacentElement('afterbegin', boxEl);
}



function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
});