//DOM Variables
var cardText = document.querySelector("#cardText");
var engText = document.querySelector("#engText");
var forText = document.querySelector("#forText");
var button = document.querySelector("#button");
var build = document.querySelector("#build");
var form = document.querySelector("#form");
var facts = document.querySelector("#facts");

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
    var addDiv = document.createElement("div");
    form.appendChild(addDiv);
    addDiv.classList.add("cardAdd");
    console.log(addDiv);
    addDiv.innerText = ("Card Added!");
    $(".cardAdd").fadeOut(1000);
  },
  //Create a function that builds a deck displaying the English side of the cards when 'build deck' button is pushed.
  showCard: function(event) {
    event.preventDefault();
    //Create Info Message
    var infoCards = document.createElement("div");
    $(infoCards).fadeIn(1000);
    cardText.appendChild(infoCards);
    infoCards.classList.add("info");
    infoCards.innerText= ("Here is your deck. Hover over a card to see its translation. Underneath the deck, you will see your fun facts about Malaysia!");

    //For loop that creates a number of cards equaling length of cards added.
    for (var i = 0; i < game.cards.length; i++) {
    var newDiv = document.createElement("div");
    $(newDiv).fadeIn(2000);
    cardText.appendChild(newDiv);
    newDiv.classList.add("frontVal");
    newDiv.dataset.cardIndex = i;
    console.log(newDiv);
    newDiv.innerText = (game.cards[i].frontVal);

    }
  },
  //Fun facts appear matching the length of the card deck.
  funFact: function() {
    for (var i = 0; i < game.cards.length; i++) {
      var factDiv = document.createElement("div");
      $(factDiv).fadeIn(3000);
      facts.appendChild(factDiv);
      factDiv.classList.add("funFact");
      factDiv.innerText = (game.factoids[i]);
      //$(".funFact").fadeOut(10000);
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
  },
  //Uncomment this to create a default deck of cards.
  // cardAdd: function(front, back) {
  //   this.cards.push(new card(front, back));
  //   console.log(this.cards);
  // },
  factoids: ["Fun fact 1", "Fun fact 2", "Fun fact 3", "Fun fact 4", "Fun fact 5", "Fun fact 6", "Fun fact 7", "Fun fact 8", "Fun fact 9", "Fun fact 10"]
};

button.addEventListener("click", game.userAdd);
build.addEventListener("click", game.showCard);
build.addEventListener("click", game.funFact);
cardText.addEventListener("mouseover", game.translate);
cardText.addEventListener("mouseout", game.revert);
//Default Cards
//game.cardAdd("How are you?", "Apa khabar?");
// game.cardAdd("My name is _________.", "Name saya _________.");
// game.cardAdd("Have you already eaten?", "Sudah makan?");
// game.userAdd();
//game.showCard();
