class Hand {
    constructor() {
        this.handArr = [];
    };

    addCard(card) {
        this.handArr.push(card);
        return this.handArr;
    };

    playCard(card) {
        let cardInPlay = null;
        for (let i = 0; i < this.handArr.length; i++) {
            if (card = this.handArr[i]) {
                cardInPlay = card;
                this.handArr.splice(card, 1);
            }
        }
        return cardInPlay;
    };
};