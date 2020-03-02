const queen = "queen";
const king = "king";

let cards = [queen, queen, king, king];
let cardsInPlay = [];
const foundMatchMsg = "You found a match.";
const matchNotFoundMsg = "Sorry, try again.";

function checkForMatch() {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log(foundMatchMsg);
  } else {
    console.log(matchNotFoundMsg);
  }
}

function flipCard(cardId) {

  const flippedCard = cards[cardId];

  console.log(`User flipped ${flippedCard}`);

  cardsInPlay.push(flippedCard);

  checkForMatch();

}

flipCard(0);
flipCard(2);

