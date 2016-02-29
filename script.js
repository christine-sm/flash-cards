// I LOVE THE COMMENTS!

//DOM Variables
// there are quite a few global variables here, I might try to put these into an object
// maybe even naming it gameParts = {} or something
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
// var correct = document.querySelector(".correct");
// var incorrect = document.querySelector(".incorrect");

//Create Card container
// awesome job using a constructor function, just remember to capitalize!
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
    // you don't really to pass front and back in since you are really
    // defining them here in this function
    // var front = engText.value;
    // var back = engText.value;
    event.preventDefault();
    front = engText.value;
    back = forText.value;
    game.cards.push(new card(front, back));
    // totally great to use console.log for debugging, just remember to take it out after!
    console.log(game.cards);
    //Creates Card Added! Message and then fades out.

    // I would abstract the following below into a separate method, maybe call it addExtraDiv?

  //   addExtraDiv = function(){
  //     var addDiv = document.createElement("div");
  //     form.appendChild(addDiv);
  //     addDiv.classList.add("cardAdd");
  //     addDiv.innerText = ("Card Added!");
  // }

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

    // I would abstract the following into another method:

  //   createCardsInfo = function(){
  //     infoCards = document.createElement("h3");
  //     $(infoCards).fadeIn(1000);
  //     cardText.appendChild(infoCards);
  //     infoCards.classList.add("info");
  //     infoCards.innerText= ("Here is your deck. Hover over a card to see its translation. Underneath the deck, you will see your fun facts about Malaysia!");
  // }
    infoCards = document.createElement("h3");
    $(infoCards).fadeIn(1000);
    cardText.appendChild(infoCards);
    infoCards.classList.add("info");
    infoCards.innerText= ("Here is your deck. Hover over a card to see its translation. Underneath the deck, you will see your fun facts about Malaysia!");

    //For loop that creates a number of cards equaling length of cards added.
    for (var i = 0; i < game.cards.length; i++) {
    // watch out for indentation here! I would indent to the right so it's nested under the for loop
    newDiv = document.createElement("div");

    // again here I would abstract this into a separate method and it call in the for loop instead
    // game.appendExtraDiv(newDiv, i);

    // Then add the following below this method:
  //   appendExtraDiv = function(newDiv, index){
  //     $(newDiv).fadeIn(2000);
  //     cardText.appendChild(newDiv);
  //     newDiv.classList.add("frontVal");
  //     newDiv.dataset.cardIndex = index;
  //     console.log(newDiv);
  //     newDiv.innerText = (game.cards[index].frontVal);
  // }
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
    if (game.cards.length <= 10) {
      for (var i = 0; i < game.cards.length; i++) {
        // watch out again for indentation

        // for this funFact method I would take this portion into one separate method

        var factDiv1 = document.createElement("div");
        $(factDiv1).fadeIn(5000);
        facts.appendChild(factDiv1);
        factDiv1.classList.add("funFact");
        factDiv1.innerText = (game.factoids[i]);
      }
    } else if (game.cards.length > 10) {
      for (var j = 0; j < 10; j++) {
        // below we is almost identical code in this if/else conditional
        var factDiv2 = document.createElement("div");
        $(factDiv2).fadeIn(5000);
        facts.appendChild(factDiv2);
        factDiv2.classList.add("funFact");
        factDiv2.innerText = (game.factoids[j]);
      }
      var factDiv3 = document.createElement("div");
      $(factDiv3).fadeIn(5000);
      facts.appendChild(factDiv3);
      factDiv3.classList.add("funFact");
      factDiv3.innerText = ("Check back later for more facts!");
    }
  },
  //Create a function that switches English text to the corresponding Malay text when text mouseover.

  // I really like the following three methods because I think they are very modular and easy to read!
  translate: function(event) {
    event.preventDefault();
    var thisCard = game.cards[event.target.dataset.cardIndex];

    // It's saying that thisCard.backVal is undefined and causing an error in the console.
    // It appears you have not defined backVal or frontVal from what I could see. I think that could be a reason for the error
    // console.log("thiscard.back val: " + thisCard.backVal);
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
    $(cardText).fadeOut(500);
    gameBox.removeChild(cardText); //Deletes the div
    $(facts).fadeOut(500); //Makes div invisible so user can retrieve later when I make a button for it.
  },
  //User Quizzes themselves
  quizUser: function() {
  //Redisplay cards, one at a time. HOW CAN I DO THIS ONE CARD AT A TIME? Make all but the first invisible? Do I not use a for loop? I can either have just the first card show up or all of the cards show up at once, but I am struggling to show them in a loop one at a time.
    for (var k = 0; k < game.cards.length; k++) {
      // if (k === 0) {
        quizCard = document.createElement("div");
        $(quizCard).fadeIn(2000);
        quiz.appendChild(quizCard);
        quizCard.classList.add("frontVal");
        quizCard.dataset.cardIndex = k;
        console.log(quizCard);
        quizCard.innerText = (game.cards[k].frontVal);
      // }

      // although its okay to comment out code while troubleshooting, you should clean this up and take it out


      // correctButton = document.createElement("button");
      // quiz.appendChild(correctButton);
      // correctButton.classList.add("correct");
      // correctButton.innerText = ("Correct!");

      //Display card index value 0
      //If user correctly translates, click button 1 to give a user a point and remove card from deck and display card of next index value
      //If user incorrectly translates, click button 2 to display card of next index value and put previous card at the end of the array
      //Quiz continues until all cards are removed from the array
    }
    var message = document.createElement("h2");
    $(message).fadeIn(2000);
    quiz.appendChild(message);
    message.innerText = ("Check back later for completed quiz!");
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

// There are alot of eventlisteners in your code, are all of them necessary for it to work?
// I would try to think about what's necessary and how maybe you could combine functionality in one
// event listener, for example:
// Instead of 2 startQuiz.addEventListener("click", callback), include additional functionality in the callback

button.addEventListener("click", game.userAdd);
build.addEventListener("click", game.buildDeck);
build.addEventListener("click", game.funFact);
cardText.addEventListener("mouseover", game.translate);
cardText.addEventListener("mouseout", game.revert);
startQuiz.addEventListener("click", game.removeDeck);
startQuiz.addEventListener("click", game.quizUser);
quiz.addEventListener("mouseover", game.translate);
quiz.addEventListener("mouseout", game.revert);
// //Uncomment to Create Default Cards
// game.cardAdd("How are you?", "Apa khabar?");
// game.cardAdd("My name is _________.", "Name saya _________.");
// game.cardAdd("Have you already eaten?", "Sudah makan?");
// game.userAdd();
// game.buildDeck();
