//DOM Variables
var gameBox = $("#gameBox");
var cardText = $("#cardText");
var engText = $("#engText");
var forText = $("#forText");
var button = $("#button");
var build = $("#build");
var form = $("#form");
var facts = $("#facts");
var startQuiz = $("#startQuiz");
var quiz = $("#quiz");
// var correct = document.querySelector(".correct");
// var incorrect = document.querySelector(".incorrect");

//Create Card container
function Card(front, back){
    this.frontVal = front;
    this.backVal = back;
}
//Create a Game Object
game = {
  // The cards are an empty array to start.
  cards: [],
  //Creates Card Added! Message and then fades out.
  addMessage: function() {
    var addDiv = document.createElement("div");
    form.append(addDiv);
    addDiv.classList.add("cardAdd");
    console.log(addDiv);
    addDiv.innerText = ("Card Added!");
    $(".cardAdd").fadeOut(1000);
  },
  //Create function that logs user inputs of English and Malay words.
  userAdd: function(event) {
    event.preventDefault();
    var front = engText.val();
    var back = forText.val();
    game.cards.push(new Card(front, back));
    console.log(game.cards);
    game.addMessage();
    engText.val("");
    forText.val("");
  },
  //Create Info Message
  infoMessage: function() {
    var infoCards = document.createElement("h3");
    $(infoCards).fadeIn(1000);
    cardText.append(infoCards);
    infoCards.classList.add("info");
    infoCards.innerText= ("Here is your deck. Hover over a card to see its translation. Underneath the deck, you will see your fun facts about Malaysia!");
  },
  //Create a function that builds a deck displaying the English side of the cards when 'build deck' button is pushed.
  buildDeck: function(event) {
    event.preventDefault();
    game.infoMessage();
    //For loop that creates a number of cards equaling length of cards added.
    for (var i = 0; i < game.cards.length; i++) {
      game.createNewDivs(game.cards[i], i);
    }
    game.funFact();
  },
  createNewDivs: function(card, index) {
    var newDiv = document.createElement("div");
    $(newDiv).fadeIn(2000);
    cardText.append(newDiv);
    newDiv.classList.add("frontVal");
    $(".frontVal").on("mouseover", game.translate);
    $(".frontVal").on("mouseout", game.revert);
    newDiv.dataset.cardIndex = index;
    console.log(card);
    newDiv.innerText = (card.frontVal);

  },
  //Fun facts appear matching the length of the card deck.
  funFact: function() {
    if (game.cards.length <= 10) {
      for (var i = 0; i < game.cards.length; i++) {
        var factDiv1 = document.createElement("div");
        $(factDiv1).fadeIn(5000);
        facts.append(factDiv1);
        factDiv1.classList.add("funFact");
        factDiv1.innerText = (game.factoids[i]);
      }
      //Since I have only written ten facts, this prevents undefined divs from showing up after the 10th fact & shows a message to check back later for more facts.
    } else if (game.cards.length > 10) {
      for (var j = 0; j < 10; j++) {
        var factDiv2 = document.createElement("div");
        $(factDiv2).fadeIn(5000);
        facts.append(factDiv2);
        factDiv2.classList.add("funFact");
        factDiv2.innerText = (game.factoids[j]);
      }
      var factDiv3 = document.createElement("div");
      $(factDiv3).fadeIn(5000);
      facts.append(factDiv3);
      factDiv3.classList.add("funFact");
      factDiv3.innerText = ("Check back later for more facts!");
    }
  },
  //Create a function that switches English text to the corresponding Malay text when text mouseover.
  translate: function(event) {
    event.preventDefault();
    var thisCard = game.cards[event.target.dataset.cardIndex];
    console.log(thisCard);
    console.log(this);
    event.target.innerText = thisCard.backVal;
  },
  //Create a function that switches Malay text back to the corresponding English text when text mouseout.
  revert: function(event) {
    event.preventDefault();
    var frontCard = game.cards[event.target.dataset.cardIndex];
    event.target.innerText = frontCard.frontVal;
  },
  //Removes deck and fun facts in preparation for quiz.
  removeDeck: function() {
    cardText.fadeOut(500);
    facts.fadeOut(500); //Makes div invisible so user can retrieve later when I make a button for it.
    // gameBox.removeChild(cardText); //Deletes the div
  },
  //User Quizzes themselves
  quizUser: function() {
    game.removeDeck();
    var message = gameBox.append("<h2>Check back later for completed quiz!</h2>");
    // message.fadeIn(2000);
  //Redisplay cards, one at a time. HOW CAN I DO THIS ONE CARD AT A TIME? Make all but the first invisible? Do I not use a for loop? I can either have just the first card show up or all of the cards show up at once, but I am struggling to show them in a loop one at a time.
    // for (var k = 0; k < game.cards.length; k++) {
    //   // if (k === 0) {
    //     quizCard = document.createElement("div");
    //     quizCard.fadeIn(2000);
    //     quiz.append(quizCard);
    //     quizCard.classList.add("frontVal");
    //     quizCard.dataset.cardIndex = k;
    //     console.log(quizCard);
    //     quizCard.innerText = (game.cards[k].frontVal);
    //   // }
      // correctButton = document.createElement("button");
      // quiz.append(correctButton);
      // correctButton.classList.add("correct");
      // correctButton.innerText = ("Correct!");

      //Display card index value 0
      //If user correctly translates, click button 1 to give a user a point and remove card from deck and display card of next index value
      //If user incorrectly translates, click button 2 to display card of next index value and put previous card at the end of the array
      //Quiz continues until all cards are removed from the array
    // }
  },
  factoids: [
    "FUN FACT 1: What is the building I see in the background? These are the PETRONAS TOWERS. They were the tallest buildings in the world from 1998 to 2004 and remain the tallest twin towers in the world.",
    "FUN FACT 2: The capital of Malaysia is Kuala Lumpur.",
    "FUN FACT 3: Malaysia is a melting pot of distinct ethnic groups: Muslim Malay, Chinese, Indian, and various indigenous tribes.",
    "FUN FACT 4: In addition to Malay, each of these ethnic groups have their own distinct languages, such as Hokkien, Tamil, and Iban.",
    "FUN FACT 5: Malaysians LOVE to eat! A common way of greeting each other is 'Dah Makan?' which means, 'Have you already eaten?'.",
    "FUN FACT 6: Do not point at a person with your index finger, as that is considered rude. Instead point with your thumb.",
    "FUN FACT 7: Malaysia has a tropical climate, and is home to many beautiful islands and rainforests.",
    "FUN FACT 8: Malaysia is a Muslim majority country. Locals appreciate it if you dress appropriately!",
    "FUN FACT 9: Look right, then left. Malaysians drive on the left side of the street.",
    "FUN FACT 10: You already know some Malay. Some words are based off of English and Dutch. For example, 'bus' is 'bas', 'taxi' is 'teksi', and 'hello' is 'helo'!"
  ]
  // //Uncomment this to create a default deck of cards.
  // cardAdd: function(front, back) {
  //   this.cards.push(new card(front, back));
  //   console.log(this.cards);
  // }
};

button.on("click", game.userAdd);
build.on("click", game.buildDeck);
// $(".frontVal").on("mouseover", game.translate);
// $(".frontVal").on("mouseout", game.revert);
startQuiz.on("click", game.quizUser);
quiz.on("mouseover", game.translate);
quiz.on("mouseout", game.revert);
// //Uncomment to Create Default Cards
// game.cardAdd("How are you?", "Apa khabar?");
// game.cardAdd("My name is _________.", "Name saya _________.");
// game.cardAdd("Have you already eaten?", "Sudah makan?");
// game.userAdd();
// game.buildDeck();
