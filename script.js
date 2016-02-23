//DOM Variables
var cardText = document.querySelector("#cardText");
var engText = document.querySelector("#engText");
var forText = document.querySelector("#forText");
var button = document.querySelector("#button");
var build = document.querySelector("#build");
var form = document.querySelector("#form");

//Create Card container
function card(front, back){
    this.frontVal = front;
    this.backVal = back;
}
//Create a Game Object
game = {
  // The cards are an empty array to start.
  cards: [],
  //Create function that logs user inputs of English and Malay words.
  userAdd: function(event, front, back) {
    event.preventDefault();
    front = engText.value;
    back = forText.value;
    game.cards.push(new card(front, back));
    console.log(game.cards);
    //Creates Card Added! Message and then fades out.
    addDiv = document.createElement("div");
    form.appendChild(addDiv);
    addDiv.classList.add("cardAdd");
    console.log(addDiv);
    addDiv.innerText = ("Card Added!");
    $(".cardAdd").fadeOut(750);
  },
  //Create a function that builds a deck displaying the English side of the cards when 'build deck' button is pushed.
  showCard: function(event) {
    event.preventDefault();
    for (var i = 0; i < game.cards.length; i++) {
    var newDiv = document.createElement("div");
    cardText.appendChild(newDiv);
    newDiv.classList.add("frontVal");
    newDiv.dataset.cardIndex = i;
    console.log(newDiv);
    newDiv.innerText = (game.cards[i].frontVal);
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
  //Uncomment this to create a default deck of cards.
  // cardAdd: function(front, back) {
  //   this.cards.push(new card(front, back));
  //   console.log(this.cards);
  // }
};

button.addEventListener("click", game.userAdd);
build.addEventListener("click", game.showCard);
cardText.addEventListener("mouseover", game.translate);
cardText.addEventListener("mouseout", game.revert);
//Default Cards
//game.cardAdd("How are you?", "Apa khabar?");
// game.cardAdd("My name is _________.", "Name saya _________.");
// game.cardAdd("Have you already eaten?", "Sudah makan?");
// game.userAdd();
//game.showCard();
