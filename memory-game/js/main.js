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

function flipCard(cardId) {

  const flippedCard = cards[cardId];

  console.log(`User flipped ${flippedCard.rank}`);
  console.log(flippedCard.cardImage);
  console.log(flippedCard.suit);

  cardsInPlay.push(flippedCard.rank);

  checkForMatch();

}

flipCard(0);
flipCard(2);

