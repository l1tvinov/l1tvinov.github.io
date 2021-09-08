let $btnStart = document.querySelector('#start')
let $gameZona = document.querySelector('#game')
let $time = document.querySelector('#time')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')

let counter;
let isGame = false;
let timeDefalt = 15;
let colors = ['#00d4ff', '#fdbb2d', '#fc466b', '#fd1d1d', '#833ab4', '#5bc885', '#3f5efb', '#94bbe9', '#eeaeca', '#fd1dbf'];
let boxTexts = ['JS', 'HTML', 'css', 'vue', 'scss', 'php', 'git', 'gulp', 'node']
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

function hide(el) {
  el.classList.add('hide')
}

function show(el) {
  el.classList.remove('hide')
}

function startGame() {
  $btnStart.classList.add('hide')
  $gameZona.style.backgroundColor = '#fff';
  show($timeHeader)
  hide($resultHeader)
  counter = 0;

  updateTimer();
  renderBox();

}

function endGame() {
  $gameZona.innerHTML = ''
  show($btnStart);
  $gameZona.style.backgroundColor = '#ccc';
  hide($timeHeader)
  show($resultHeader)
  document.querySelector('#result').innerText = counter;
}


function handleBoxClick(e) {
  if (!isGame) {
    return false;
  }
  if (e.target.dataset.box) {
    e.target.style.transform = 'scale(0)';
    renderBox();
    renderBox();

    counter++;
  }
}


function renderBox() {
  let boxEl = document.createElement('div');
  let boxSize = randomInteger(20, 110);
  let maxWidth = $gameZona.clientWidth - boxSize;
  let maxHeight = $gameZona.clientHeight - boxSize;
  if (boxSize > 45) {
    boxEl.innerText = boxTexts[randomInteger(0, boxTexts.length - 1)];
  }
  boxEl.style.width = boxEl.style.height = boxSize + 'px';
  boxEl.classList.add('game__item');
  boxEl.style.backgroundColor = colors[randomInteger(0, colors.length - 1)];
  boxEl.style.top = randomInteger(0, maxHeight) + 'px';
  boxEl.style.left = randomInteger(0, maxWidth) + 'px';
  boxEl.dataset.box = 'yes';
  $gameZona.insertAdjacentElement('afterbegin', boxEl);
}



function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}