const queen = "queen";
const king = "king";

const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];


let cardsInPlay = [];
const foundMatchMsg = "You found a match.";
const matchNotFoundMsg = "Sorry, try again.";

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert(foundMatchMsg);
  } else {
    alert(matchNotFoundMsg);
  }
}

function flipCard() {

  const cardId = this.getAttribute('data-id');
  const flippedCard = cards[cardId];
  const cardImageUrl = flippedCard.cardImage;
  console.log(cardId);
  console.log(`User flipped ${flippedCard.rank}`);
  console.log(flippedCard.cardImage);
  console.log(flippedCard.suit);

  cardsInPlay.push(flippedCard.rank);
  this.setAttribute('src', cardImageUrl);

  if (cardsInPlay.length >= 2) {
    checkForMatch();
  }
}

function createBoard() {
  const gameBoard = document.getElementById('game-board');
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
  }
}

createBoard();

