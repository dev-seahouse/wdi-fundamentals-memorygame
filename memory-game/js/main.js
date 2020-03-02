const queen = "queen";
const king = "king";

let cards = [queen, queen, king, king];
let cardsInPlay = [];

const cardOne = cards[0];
const cardTwo = cards[2];

const foundMatchMsg = "You found a match";
const matchNotFoundMsg = "Sorry, try again.";

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(`User flipped ${cardsInPlay[0]}`);
console.log(`User flipped ${cardsInPlay[1]}`);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert(foundMatchMsg);
  } else {
    alert(matchNotFoundMsg);
  }
}
