//DOM Variables
var cardText = document.querySelector("#cardText");

//Create Card container
function card(front, back){
    this.frontVal = front;
    this.backVal = back;
}

//Create a Game Object
game = {
  // The cards are an empty array to start.
  cards: [],
  //Create a function that adds the front and back values to the card array.
  cardAdd: function(front, back) {
    this.cards.push(new card(front, back));
    console.log(this.cards);
  },
  //Create function that logs user inputs of English and Malay.
  userAdd: function() {
    var userWord = prompt("Please provide a word in English and a word in Malay. Please separate the words with a space.");
    game.cards.push(userWord.split(" "));
    console.log(this.cards);
  },
  //Create a function that displays English side of the cards when page loads.
  showCard: function() {
    for (var i = 0; i < this.cards.length; i++) {
    var newDiv = document.createElement("div");
    cardText.appendChild(newDiv);
    newDiv.classList.add("frontVal");
    newDiv.dataset.cardIndex = i;
    console.log(newDiv);
    newDiv.innerText = (this.cards[i].frontVal);
    }
  },
  //Create a function that switches English text to the corresponding Malay text when text mouseover.
  translate: function(event) {
    event.preventDefault();
    var thisCard = game.cards[event.target.dataset.cardIndex];
    event.target.innerText = thisCard.backVal;
  },
  //Create a function that switches Malay text back to the corresponding English text when text mouseout.
  revert: function(event) {
    event.preventDefault();
    var frontCard = game.cards[event.target.dataset.cardIndex];
    event.target.innerText = frontCard.frontVal;
  }
};

//Default Cards
game.cardAdd("How are you?", "Apa khabar?");
game.cardAdd("My name is _________.", "Name saya _________.");
game.cardAdd("Have you already eaten?", "Sudah makan?");
game.userAdd();
game.showCard();
cardText.addEventListener("mouseover", game.translate);
cardText.addEventListener("mouseout", game.revert);
