function getPlayerName() {
  let playerName = prompt("Qual o seu nome?");
  if(!playerName) {
    playerName = "Jogador";
  }
  return playerName;
}
const playerName = getPlayerName();
console.log(`Bem-vindo, ${playerName}!`);
const players = [
  './src/images/1.jpg', './src/images/1.jpg',
  './src/images/2.jpg', './src/images/2.jpg',
  './src/images/3.jpg', './src/images/3.jpg',
  './src/images/4.jpg', './src/images/4.jpg',
  './src/images/5.jpg', './src/images/5.jpg',
  './src/images/6.jpg', './src/images/6.jpg',
  './src/images/7.jpg', './src/images/7.jpg',
  './src/images/8.jpg', './src/images/8.jpg'
];

let openCards = [];
let shufflePlayers = players.sort(() => (Math.random() > 0.5 ? 1 : -1));

function loadGameBoard(playerArray) {
  const container = document.querySelector('.game');
  container.innerHTML = '';

  playerArray.forEach(src => {
    const box = document.createElement('div');
    box.className = 'item';
    box.onclick = handleClick;

    const img = document.createElement('img');
    img.src = src;
    img.style.width = '100px';
    img.style.height = '100px';
    img.style.margin = '10px';

    box.appendChild(img);
    container.appendChild(box);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  loadGameBoard(shufflePlayers);
});

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add('boxOpen');
    openCards.push(this);
  }
  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
  console.log(openCards);
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch');
    openCards[1].classList.add('boxMatch');
  } else {
    openCards[0].classList.remove('boxOpen');
    openCards[1].classList.remove('boxOpen');
  }
  openCards = [];

  if (document.querySelectorAll('.boxMatch').length === players.length) {
    alert(`Parabéns ${playerName} você venceu!!`);
  }
}

