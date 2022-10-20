class Deck {
    constructor() {
        this.rankArr = [1, 2, 3];
        this.suitArr = ['heart', 'spade'];
        this.cardArr = [];
    };

    generateCards() {
        let card = '';
        for (let i = 0; i < this.rankArr.length; i++) {
            for (let j = 0; j < this.suitArr.length; i++) {
                card = `${this.rankArr[i]} of ${this.suitArr[j]}`;
                this.cardArr.push(card);
            };
        };
        return this.cardArr;
    };

    shuffleCards() {
        return this.cardArr.sort(() => Math.random() - 0.5);
    };

    draw() {
        return this.cardArr.shift();
    };

    deal(numHands, cardsPerHand) {
        let allHands = [];
        for (i = 0; i < numHands; i++) {
            let hand = [];
            for (j = 0; j < cardsPerHand; j++) {
                hand.push(this.cardArr.shift());
            };
            allHands.push(hand);
        };
        return allHands;
    };
};