//DOM Variables
var cardText = document.querySelector("#cardText");
var englishVal = document.body.querySelector(".frontVal");

//Create Card container
function card(front, back){
    this.frontVal = front;
    this.backVal = back;
}

// Create a Game Object
game = {
  // The cards are an empty array to start.
  cards: [],
  // Create a function that adds the front and back values to the card array.
  cardAdd: function(front, back) {
    this.cards.push(new card(front, back));
    console.log(this.cards);
  },
  //Create a function that displays English side of the cards when page loads.
  showCard: function() {
    for (var i = 0; i < this.cards.length; i++) {
    var newDiv = document.createElement("div");
    cardText.appendChild(newDiv);
    newDiv.classList.add("frontVal");
    console.log(newDiv);
    newDiv.innerText = (this.cards[i].frontVal);
    }
  },
  //Create a function that puts Malay side of cards into "undisplayed" div's.
  backCard: function() {
    for (var i = 0; i < this.cards.length; i++) {
    var replaceDiv = document.createElement("div");
    replaceDiv.classList.add("backVal");
    console.log(replaceDiv);
    replaceDiv.innerText = (this.cards[i].backVal);
    }
  },
  //Create a function that switches English div to the corresponding Malay div when text is clicked.
  translate: function(event) {
    event.preventDefault();
    event.target.innerText = (game.backCard());
  }
};

//Default Cards
game.cardAdd("How are you?", "Apa khabar?");
game.cardAdd("My name is _________.", "Name saya _________.");
game.cardAdd("Have you already eaten?", "Sudah makan?");
game.showCard();
//game.backCard();
cardText.addEventListener("click", game.translate);
