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
    for (var i = 0; i < game.cards.length; i++) {
    var newDiv = document.createElement("div");
    cardText.appendChild(newDiv);
    newDiv.classList.add("frontVal");
    console.log(newDiv);
    newDiv.innerText= (game.cards[i].frontVal);
    }
  },
  //Create a function that switches English to Malay when text is clicked.
  translate: function(event) {
    event.preventDefault();
    event.target.innerText= (game.cards[0].backVal);
  }
};

//Default Cards
game.cardAdd("How are you?", "Apa khabar?");
game.cardAdd("My name is _________.", "Name saya _________.");
game.cardAdd("Have you already eaten?", "Sudah makan?");
game.showCard();
cardText.addEventListener("click", game.translate);
