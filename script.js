//DOM Variables
var gameBox = document.querySelector("#gameBox");
var cardText = document.querySelector("#cardText");
var engText = document.querySelector("#engText");
var forText = document.querySelector("#forText");
var button = document.querySelector("#button");
var build = document.querySelector("#build");
var form = document.querySelector("#form");
var facts = document.querySelector("#facts");
var startQuiz = document.querySelector("#startQuiz");
var quiz = document.querySelector("#quiz");

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
  buildDeck: function(event) {
    event.preventDefault();
    //Create Info Message
    infoCards = document.createElement("h3");
    $(infoCards).fadeIn(1000);
    cardText.appendChild(infoCards);
    infoCards.classList.add("info");
    infoCards.innerText= ("Here is your deck. Hover over a card to see its translation. Underneath the deck, you will see your fun facts about Malaysia!");

    //For loop that creates a number of cards equaling length of cards added.
    for (var i = 0; i < game.cards.length; i++) {
    newDiv = document.createElement("div");
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
      factDiv = document.createElement("div");
      $(factDiv).fadeIn(5000);
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
  //Removes deck and fun facts in preparation for quiz.
  removeDeck: function() {
    $(cardText).fadeOut(500);
    gameBox.removeChild(cardText); //Deletes the div
    // gameBox.removeChild(facts); //Deletes the div
    // $(cardText).fadeOut(1000); //Makes div invisible
    // cardText.removeChild(infoCards);
    $(facts).fadeOut(500); //Makes div invisible
  },

  quizUser: function() {
    //Redisplay cards, one at a time. HOW CAN I DO THIS ONE CARD AT A TIME?
    for (var k = 0; k < game.cards.length; k++) {
      quizCard = document.createElement("div");
      $(quizCard).fadeIn(2000);
      quiz.appendChild(quizCard);
      quizCard.classList.add("frontVal");
      quizCard.dataset.cardIndex = k;
      console.log(quizCard);
      quizCard.innerText = (game.cards[k].frontVal);
      correctButton = document.createElement("button");
      quiz.appendChild(correctButton);
      correctButton.classList.add("correct");
      correctButton.innerText = ("Correct!");
      incorrectButton = document.createElement("button");
      quiz.appendChild(incorrectButton);
      correctButton.classList.add("correct");
      incorrectButton.innerText = ("Incorrect :(");

      //Display card index value 0
      //If user correctly translates, click button 1 to give a user a point and remove card from deck and move to card of next index value
      //If user incorrectly translates, click button 2 to move to card of next index value
    }
    tallyRight = document.createElement("p");
    $(tallyRight).fadeIn(2000);
    quiz.appendChild(tallyRight);
    tallyRight.innerText = ("Number Correct: ");
    tallyWrong = document.createElement("p");
    $(tallyWrong).fadeIn(2000);
    quiz.appendChild(tallyWrong);
    tallyWrong.innerText = ("Number Incorrect: ");
  },
  factoids: [
    "FUN FACT 1: What is the building I see in the background? These are the PETRONAS TOWERS. They were the tallest buildings in the world from 1998 to 2004 and remain the tallest twin towers in the world.",
    "FUN FACT 2: The capital of Malaysia is Kuala Lumpur.",
    "FUN FACT 3: Malaysia is a melting pot of distinct ethnic groups: Muslim Malays, Chinese, Indian, and tribal Malays.",
    "FUN FACT 4: Each of these ethnic groups have their own distinct languages, such as Hokkien, Tamil, and Iban.",
    "FUN FACT 5: Malaysians LOVE to eat! A common way of greeting each other is 'Dah Makan?' which means, 'Have you already eaten?'.",
    "FUN FACT 6: Do not point at a person with your index finger, as that is considered rude. Instead point with your thumb.",
    "FUN FACT 7: Malaysia has a tropical climate, and is home to many beautiful islands and rainforests.",
    "FUN FACT 8: Malaysia is a Muslim majority country. Locals appreciate it if you dress appropriately!",
    "FUN FACT 9: Look right, then left. Malaysians drive on the left side of the street.",
    "FUN FACT 10: You already know 'some' Malay. Some words are based off of English and Dutch. For example, 'bus' is 'bas', 'taxi' is 'teksi', and 'hello' is 'helo'!"
  ]
};

button.addEventListener("click", game.userAdd);
build.addEventListener("click", game.buildDeck);
build.addEventListener("click", game.funFact);
cardText.addEventListener("mouseover", game.translate);
cardText.addEventListener("mouseout", game.revert);
startQuiz.addEventListener("click", game.removeDeck);
startQuiz.addEventListener("click", game.quizUser);
quiz.addEventListener("mouseover", game.translate);
quiz.addEventListener("mouseout", game.revert);
//Default Cards
//game.cardAdd("How are you?", "Apa khabar?");
// game.cardAdd("My name is _________.", "Name saya _________.");
// game.cardAdd("Have you already eaten?", "Sudah makan?");
// game.userAdd();
//game.buildDeck();
