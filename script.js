function showDino() {          //funkce s názvem showDino, voláme ji tím
  squares.forEach(square => {
    square.classList.remove('dino1', 'dino2', 'fire');      //ikonky mizí
  });

  const randomSquare = squares[Math.floor(Math.random() * squares.length)];
  const rand = Math.random();

  if (rand < 0.4) {
    randomSquare.classList.add('fire');
    dinoPosition = 'fire-' + randomSquare.id;
  } else if (rand < 0.7) {
    randomSquare.classList.add('dino1');
    dinoPosition = 'dino1-' + randomSquare.id;
  } else {
    randomSquare.classList.add('dino2');
    dinoPosition = 'dino2-' + randomSquare.id;
  }
}

function startGame() {
  dinoTimer = setInterval(showDino, 800);   //pravidelně se mi objevují ikonky každých 800 ms

  countdownTimer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(dinoTimer);     
      clearInterval(countdownTimer);
      alert(`Konec hry! Ulovil jsi ${score} dinosaurů.`);

     
      startButton.textContent = 'Hrát hru';
      startButton.style.display = 'block';
    }
  }, 1000);       //odpočet
}


function handleClick(square) {
  if ('dino1-' + square.id === dinoPosition) {
    score += 1;
  } else if ('dino2-' + square.id === dinoPosition) {
    score += 3;
  } else if ('fire-' + square.id === dinoPosition) {
    score = 0;
  } else {
    return;
  }

  // Zvýšení levelu podle skóre
  if (score >= 10 && level === 1) {
    level = 2;
    levelDisplay.textContent = level;
    clearInterval(dinoTimer);
    dinoTimer = setInterval(showDino, 600); // zrychlení1
  }

  if (score >= 20 && level === 2) {
    level = 3;
    levelDisplay.textContent = level;
    clearInterval(dinoTimer);
    dinoTimer = setInterval(showDino, 400); // zrychlení2
  }

  scoreDisplay.textContent = score;
  dinoPosition = null;
}


function resetGame() {
  clearInterval(dinoTimer);       //zastav časovač pro dino ikonky
  clearInterval(countdownTimer);   // zastav časovač pro odpočet

  score = 0;
  timeLeft = 25;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  level = 1;
  levelDisplay.textContent = level;


  startGame();
}

// 2 Hlavní program

/// Výběr prvků
const squares = document.querySelectorAll('.square');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('startButton');

// Počáteční hodnoty
let score = 0;
let timeLeft = 25;
let level = 1;
let dinoPosition = null;
let dinoTimer;
let countdownTimer;

// Klikání na políčka
squares.forEach(square => {
  square.addEventListener('click', () => {
    handleClick(square);
  });
});

// Kliknutí na start/znovu
startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  resetGame();
});