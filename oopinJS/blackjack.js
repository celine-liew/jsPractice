class Deck{
  constructor(){
    this.deck = [];
    this.reset();
    // this.shuffle();
  }

  reset(){
    this.deck = [];

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit of suits) {
      for (let rank of ranks) {
        const card = {suit: suit,
                       rank: rank}
        this.deck.push(card);
      }
    }
  }

  shuffle(){
    const { deck } = this;
    let m = deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal(){
    return this.deck.pop();
  }
}

// const deck1 = new Deck();

class BJDeck extends Deck{
  constructor(){
    super();
    this.setValue();
  }
  
  setValue(){
    this.deck.forEach( card => {
      if (!isNaN(card.rank)){
        card.value = parseInt(card.rank);
      } else {
        if (card.rank == 'Ace'){
          card.value = [1,11];
        } else {
          card.value = 10;
        }
      }
    })
  }
}


class Player {
  constructor(){
    this.hand = [];
  }
  
  addCard(card){
    this.hand.push(card);
  }
  
  score(){
    const { hand } = this;
    let score = 0;
    
    for (let i = 0; i < hand.length; i++){
      const val = hand.length[i].value;
      if (Array.isArray(val)) {
       score = checkAce(score);
      } else {
        score += val;
      }
    }
  return score;
  }

  checkAce(score){
    const vals = [1, 11];
    if (score + vals[1] <= 21){
      return score +=  vals[1];
    } else{
      return score += vals[0];
    }
  }

}

const deck1 = new BJDeck();
const player1 = new Player();
// console.log(deck1.deck)
console.log(player1.hand)
player1.addCard(deck1.deal());
console.log(player1.hand)
