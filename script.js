//DOM Variables
var cardText = document.querySelector("#cardText");

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
  //Create a function that displays cards when page loads.
  showCard : function() {
    for (var i = 0; i < game.cards.length; i++) {
    var newDiv = document.createElement("div");
    cardText.appendChild(newDiv);
    console.log(newDiv);
    newDiv.innerText= (game.cards[i].frontVal);
    }
  }
};

//Default Cards
game.cardAdd("How are you?", "Apa khabar?");
game.cardAdd("My name is _.", "Name saya _.");
game.cardAdd("Have you already eaten?", "Sudah makan?");
game.showCard();
