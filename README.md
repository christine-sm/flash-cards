# Flash Cards
**www.christinemovius.com/flash-cards**

**What is this?**
  * This is a JavaScript Flash Card Application.
  * The intended purpose to is create a pack of flash cards for studying Malay, the national language of Malaysia. However, the user can input whatever values they want.

**Technologies Used:** HTML5, CSS3, JavaScript, jQuery, git, GitHub, DOM Manipulation

**Approach Taken:**
* I first created a card container and a function that made an array with cards containing front and back values. I tested this by creating a default set of cards to display in the console.
* I used DOM manipulation to create HTML divs for the cards and display their front values. With Matt's help, we were able to connect the front values to the back values of the cards. When you hover over the card, it shows the translation!
* I replaced the default set of cards for user input cards. To do this, I created two input fields for the front (English) and the back (Malay). When the user hits 'add card', the values are logged into the card array and they receive a pop up message that the card was added.
* When the user is satisfied with the amount of cards they added, they hit 'build deck'. This starts a DOM manipulation for loop that creates a visual HTML representation of the cards array. When you hover over the card, it shows the translation.
* To incentivize the user to add more cards, I created the 'fun fact' component. For each card a user adds, they receive a fun fact about Malaysia. For example, if a user only adds one card, they only receive one fact. If they add ten cards, they receive ten facts.
* I wanted the user to then be able to quiz themselves on these cards. I created a 'start quiz' button that resets the staging area for the quiz, removing the cards and facts and then redisplaying the cards at the bottom of the screen.
* **Future Steps:** Ideally, I would like to display the flash cards one at a time for the quiz. If the user correctly translates, the get a point.


<!--I love that you included a section all about unsolved problems  -->
**Unsolved Problems:**
* For the quiz, I was having trouble making the cards show up one at a time. I could either make all of the cards show up at once using a for loop or isolate one card to show up without being able to later cycle through the cards. I would love to figure out how to tackle this.
* When I hover over the cards, they translate properly, but an error message shows up in the console. I understand why the error is happening, but I don't know how to fix it without messing up the translation.
* I would like to switch the hover mechanism to a click mechanism. However, I can't click back and forth between translations because they overwrite each other.
* Ideally, I do not want to have the 'add card' and 'build deck' to be separate functions. I would like it to work so that when a user adds a card, it immediately pops up, then they add a second card, that one pops up and so on. My build deck function worked so well as a for loop that I struggled to find another solution.
* It would be nice if I had an API of fun facts about Malaysia so I do not have to write out a bunch of facts. I wrote out ten facts for now, but what if a user creates 10+ cards? I could repeat the facts in a loop, but the more facts the better.
<!--Awesome user stories!  -->
# User Stories
  * **User Story 1:** As a user, I should be able to add cards by inputting English words/phrases and translated words/phrases so I can customize the deck to my liking.

  * **User Story 2:** As a user, I should be able to create a deck of flash cards so I can store the pairs of English words/phrases and their translations.

  * **User Story 3:** As a user, I should be able to hover over the English word on the front of the flash card so that I can reveal the Malay word on the back of the flash card.

  * **User Story 4:** As a user, I should be able to see fun facts of Malaysian culture so I can learn about Malaysian culture in addition to Malaysian words.

  * **User Story 5:** As a user, I should be able to display the flashcards one at a time so that I can quiz myself on the words on these cards.

# Bronze, Silver, Gold
  * **Bronze:** Set of default flash cards that show up on the screen. Flash card values flip from English to translation and vice versa.
  * **Silver:** Replace default deck with deck created by user input. Add buttons for user to enter in words and translations.
  * **Gold:** Application has nice CSS styling. For each card added, user learns a fun fact about Malaysian culture.
  * **Platinum:** Deck "quiz" where user can cycle through one card at a time.
<!--Great Pseudocode as well  -->
# Initial Pseudocode
  * Card Container Function
  * Create a Deck of Default Cards Function
    * The cards are an empty array to start. Create a function that adds a front value and a back value to the card array.
  * Replace default card with User Input of Additional Cards Function
    * Create buttons for user input of word and translated word. Log those inputs into a flash card with a front value and a back value.
  * When user has added their cards, create a build deck function that displays all of the cards as one deck.
    * User can hover over cards to see translation.
    * For each card a user added, they will learn a fun fact about Malaysia.
