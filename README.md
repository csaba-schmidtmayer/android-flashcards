# Would You Rather project

This is the code repository of the _Mobile Flashcards_ project app for the Udacity React Native final assessment.

## Installation

1. Create a clone of this repository.
2. Navigate to the project folder on your machine.
3. Install project dependencies with `npm install`.

## Running the app with Expo client

**Prerequisites:**
  * The app is installed as described in [Installation](#installation).
  * An Android phone with the [Expo client](https://play.google.com/store/apps/details?id=host.exp.exponent) installed.

1. Start the development server with `expo start`.
2. Scan the QR-code with the Expo client.

## Running the app with an emulator or USB-connected phone

**Prerequisites:**
  * The app is installed as described in [Installation](#installation).

1. Connect an android phone to your computer through USB, or launch an Android emulator.
2. Start the development server with one of the following commands:
  `npm start`
  `npm run android`

## Target platform

The intended platform of the app is Android. iOS-specific features (for example, notification settings) are not included. Testing has taken place on Android platform.

## How to use the app

### Dashboard

The _Dashboard_ is the main screen of the application. It lists all created decks together with the number of flashcards each of them includes. Initially, the list is empty. A new deck can be created by pressing the _Add deck_ button (+) in the lower right corner.

### Creating a new deck

On the _Create new deck_ screen, enter the name of the new deck, then press the _Create deck_ button. Once the deck is created, the app routes you to the _Deck overview_ screen of the new deck.

### Deck overview

On the _Deck overview_ screen, the specifics of the deck are visible (the name of the deck is shown in the navigation title), as well as buttons for the following interactions with the selected deck:
* Add new flashcard
* Start quiz

### Add new flashcard

On the _Create new flashcard_ screen, enter the question, and the answer you want to add to the active deck as a new flashcard, then press the _Add card to deck_ button. Once the card is added to the deck, the app routes you back to the _Deck overview_ screen.

### Test yourself

The quiz shows the flashcards of the selected deck in random order. Each card starts with the question side visible. To check the answer, press the flashcard. You can mark your answer as either correct or wrong by pressing the respective button below the flashcard. At the end of the quiz, your performance is graded by the percentage of the correct answers. From here, you can either restart the quiz, or go back to the _Deck overview_ screen. Note that restarting the quiz reshuffles the deck for a bigger challenge.

## Credits

This project was bootstrapped with [Expo](https://expo.io/) and [React Native](https://reactnative.dev/).
The code for _Durstenfeld shuffle_ used to shuffle the decks for quizzes is taken from [this Stackoveflow thread](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array).
