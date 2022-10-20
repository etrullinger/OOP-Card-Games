// function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5);
// }

// let numbers = [1, 2, 3, 4, 5];
// // console.log(shuffle(numbers));

// let letters = ["a", "b", "c", "d", "e"];
// // console.log(shuffle(letters));

// let cardArr = [];
// function generateCards() {
//     let card = '';
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < letters.length; j++) {
//             card = `${numbers[i]} of ${letters[j]}`;
//             cardArr.push(card);
//         };
//     };
//     return cardArr;
// };
// generateCards();
// console.log(cardArr);

// function draw() {
//     return cardArr.shift();
// }

// console.log(draw());

// function deal(numHands, cardsPerHand) {
//     let allHands = [];
//     for (i = 0; i < numHands; i++) {
//         let hand = [];
//         for (j = 0; j < cardsPerHand; j++) {
//             hand.push(cardArr.shift());
//         };
//         allHands.push(hand);
//     };
//     return allHands;
// };


// console.log(deal(3, 4));