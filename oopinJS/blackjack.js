const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


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
    console.log("shuffling the cards...");
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
    this.score = 0;
  }
  
  addCard(card){
    this.hand.push(card);
  }
  
  checkScore(){
    const { hand } = this;
    let score = 0;
    for (let i = 0; i < hand.length; i++){
      const val = hand[i].value;
      if (Array.isArray(val)) {
       score = this.checkAce(score);
      } else {
        score += val;
      }
    }
  this.score = score;
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

class Game {
  constructor(numPlayers = 0){
    this.players = [];
    this.currPlayer = 1;
    this.deck = new BJDeck();
    this.addPlayers(numPlayers);
  }

  addPlayers(numPlayers){
    console.log("Creating game for " +`${numPlayers}` + " players!")
    const { players } = this;
    for (let i = 0; i <= numPlayers; i++){
      this.players.push(new Player());
    }
    return this;
  }
  
  start(){
    const { deck, players } = this;
    let { currPlayer } = this;
    deck.shuffle();
    for (let i = 0; i < 2; i++){
      for (let playerNum in players){
        players[playerNum].addCard(deck.deal());
        players[playerNum].checkScore();
        if (playerNum == 0) {
            console.log("dealing card to dealer..."); 
        } else {
           console.log("dealing card to player "+ `${playerNum}`); 
        }
      }
    }
    this.revealDealerLast();
    this.askPlayers();
    
  }
  
  askPlayers(){
    const { deck, players } = this;
    let { currPlayer } = this;
    if (currPlayer != players.length) {
      console.log("Player " + `${currPlayer}` +"'s turn!");
      let score = players[currPlayer].score;
      console.log("your score is... " + score);
       rl.question("[1] -- hit \n[2] -- stay\n ", (resp) =>{
       this.handleResp(resp);
      }); 
    } else {
      this.dealerPlay();
    }
  }
  
  handleResp(resp){
     let { currPlayer } = this;
    const { deck, players } = this;
    let playing = players[currPlayer];
    if (resp == 1) {
       console.log("hitting")
       console.log("adding card to Player " + `${currPlayer}`);
       playing.addCard(deck.deal());
       playing.checkScore();
       if (playing.score > 21) {
        console.log("Busted! score is " + playing.score);
         this.currplayers++;
       }
    }
   if (resp == 2) {
     console.log("staying")
     this.currPlayer++;
   }
    this.askPlayers();
  }

  revealDealerLast(){
    const { deck, players, currPlayer } = this;
    const dealer = players[0];
    console.log("dealer got these last cards..")
    for (let i = 1; i < dealer.hand.length; i++){
      console.log(dealer.hand[i]);
    }
  }
  
  dealerPlay(){
    const { deck, players } = this;
    const dealer = players[0];
    console.log("dealer playing...")
    dealer.checkScore();
    if (dealer.score < 17){
      dealer.addCard(deck.deal());
      this.dealerPlay();
    } else {
      this.endGame();
    }
  }
  
  endGame(){
    const { deck, players } = this;
    const dealScore = players[0].score;
    for (let player in players){
     let score = players[player].score;
      if (player == 0) {
        console.log("Dealer score: " + score);
        continue;
      }
        
      console.log("Player " + player + " score: " + score);
      
     if ((score > dealScore || dealScore > 21) && score <= 21) {
      console.log("congrats, you win Dealer!")
     } if ((score < dealScore && dealScore <=21) || score > 21){
       console.log("dealer win!")
      } else {
        console.log("draw with dealer!");
      }
   }
  }
 
  
 
}

let g = new Game(2);
g.start();
