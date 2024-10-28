// Lätta
// ************************************************************************************************************************
// 1.

// const greetUser = () => {
//   const name = prompt("Hello what is your name?");
//   console.log(`Greetings, ${name}`);
// };

// greetUser();

// ************************************************************************************************************************

// 2.

// const compareWords = () => {
//     const wordOne = prompt("Please enter two words, let' start with the first one:")
//     const wordTwo = prompt("And then the seccond one:")

//     wordOne.toLocaleLowerCase()
//     wordTwo.toLocaleLowerCase()

//     if(wordOne < wordTwo){
//         console.log(`${wordOne} comes first`)
//     } else if (wordOne > wordTwo){
//         console.log(`${wordTwo} comes first`)
//     }
// }

// compareWords();

// ************************************************************************************************************************

// 3.

// const isAdult = () => {
//     const age = prompt('How old are you?')
//     if(age > 18){
//         console.log('You are an a adult')
//     } else if (age < 18) {
//         console.log('You are still young, kiddo')
//     }
// }

// isAdult();

// ************************************************************************************************************************

// 4.

// const quessTheAnimal = () => {
//     const guessedAnimal = prompt("I'm thinking of a animal, can you guess which?")
//     guessedAnimal.toLocaleLowerCase()

//     if(guessedAnimal === "uggla"){
//         console.log('Wow! you were right, can you read my mind? ')
//     } else {
//         console.log('Sorry, that was not the animal I was thinking of :(')
//     }
// }

// quessTheAnimal();

// ************************************************************************************************************************
// Medelsvåra

// 5.

// const favouriteColor = () => {
//   const colorInput = prompt("What is your favourite color? ");
//   colorInput.toLocaleLowerCase();
//   if (colorInput === "green") {
//     console.log("Green is a nice color, reminds me of the spring or summer");
//   } else if (colorInput === "red") {
//     console.log("Red! Make sure you dont wear anything red around bulls hehe");
//   } else if (colorInput === "blue") {
//     console.log(
//       "Ah, blue makes me think of the wonderful sea or a clear blue sky on a summers day"
//     );
//   } else {
//     console.log("That's a new color for me, exciting!")
//   }
// };

// favouriteColor();

// ************************************************************************************************************************

// 6.

// const passTheTest = () => {
//   const testResult = prompt("The exam is over, what were your result? (0-100)");
//   if (testResult == 100) {
//     console.log("WOW! 100 of 100? You must of studied alot, nice!");
//   } else if (testResult > 50) {
//     console.log("You passed, good work!");
//   } else if (testResult < 50) {
//     console.log(
//       "Sorry buddy, you didn't pass the test. You need to study more!"
//     );
//   }
// };

// passTheTest();

// ************************************************************************************************************************

// 7.

// const checkWeather = () => {
//   const weatherForecast = prompt(
//     "You are looking for a activity? Well how is the weather looking like? is it sunny, rainy or cloudy?"
//   );
//   weatherForecast.toLocaleLowerCase();
//   if (weatherForecast === 'sunny') {
//     console.log("If the sun is out, grab a pair of shorts and head to the beach!")
//   } else if (weatherForecast === 'rainy'){
//     console.log("Oh rain heh? Well grab a book and cuddle up in the sofa with a nice cuppa")
//   } else if (weatherForecast === 'cloudy'){
//     console.log("A cloudy day is perfect for a hike, so take a hike buddy")
//   } else {
//     console.log('That is not a weather forecast, silly')
//   }
// };

// checkWeather();

// ************************************************************************************************************************

// 8.

// const languageChecker = () => {
//   const spokenLanguage = prompt(
//     "What language can you speak? I know Swedish, English and Japanese!"
//   );
//   spokenLanguage.toLocaleLowerCase();
//   if (spokenLanguage === "swedish") {
//     console.log("Pratar du också Svenska? Coolt! Hur mår du?");
//   } else if (spokenLanguage === "english") {
//     console.log("English speaker huh? Good day to you sir!");
//   } else if (spokenLanguage === "japanese") {
//     console.log(
//       "「すごい、日本語が話せるんですか？そこに住んでいたことがありますか？」"
//     );
//   } else {
//     console.log("I don't speak that language, but it sound's cool!")
//   }
// };

// languageChecker();

// ************************************************************************************************************************

// 9.

// const isMultiple = () => {
//     const num = prompt('Enter a number')
//     if (num % 5 === 0) {
//         console.log("That's a multiple of 5")
//     } else {
//         console.log("That is not a multiple of 5")
//     }
// };

// isMultiple();

// ************************************************************************************************************************

// 10.

// const goingOutOrNot = () => {
//   let question = "Do you want to go outside?";
//   if (confirm(question) == true) {
//     console.log("Let's gooo!");
//   } else {
//     console.log("Waa, you are boring");
//   }
// };

// goingOutOrNot();

// Svåra
// ************************************************************************************************************************

// 11.

// const checkInput = () => {
//     const input = prompt('Enter a word or a number')
//     if(!isNaN(parseFloat(input))){
//         console.log('That is a number')
//     } else {
//         console.log("That is a word")
//     }
// }

// checkInput();

// ************************************************************************************************************************

// 12.

// const checkWordLength = () => {
//   const wordOne = prompt("Enter three words! Lets start with the first one: ");
//   const wordTwo = prompt("And the seccond one: ");
//   const wordThree = prompt("And lastly the third one:");

//   length1 = wordOne.length;
//   length2 = wordTwo.length;
//   length3 = wordThree.length;

//   if (length1 > length2 && length1 > length3) {
//     console.log(`${wordOne} is the longest word`);
//   } else if (length2 > length1 && length2 > length3) {
//     console.log(`${wordTwo} is the longest word`);
//   } else if (length3 > length1 && length3 > length2) {
//     console.log(`${wordThree} is the longest word`);
//   }
// };

// checkWordLength();

// ************************************************************************************************************************

// 13.

// const checkPassword = () => {
//   const userInput = prompt(
//     "Enter your password and I will check if its safety"
//   );
//   const regex = /^(?=.*\d).{8,}$/
//   if (regex.test(userInput)) {
//     console.log("That is a safe password, and who gives their password away? Thanks for the money");
//   } else {
//     console.log(
//       "Your password need to be atleast 8 characters and include a number"
//     );
//   }
// };

// checkPassword();

// ************************************************************************************************************************

// 14.

// const checkAgeGroup = () => {
//   const age = prompt("How old are you? ");
//   if (age >= 65) {
//     console.log("Damn, you are kinda old");
//   } else if (age >= 20) {
//     console.log("You are an a adult");
//   } else if (age >= 13) {
//     console.log("Teenager, enjoy the pimples and hairy armpits");
//   } else if (age >= 0) {
//     console.log("You are just a baaaby");
//   }
// };

// checkAgeGroup();

// ************************************************************************************************************************

// 15.

// const prefChoice = () => {
//     alert("Pest or Cholera?  Cancel is a no and ok is a yes")
//   let questionOne ="Pest or";
//   let questionTwo = "Cholera?";
//   const answerOne = confirm(questionOne);
//   const answerTwo = confirm(questionTwo);

//   if (answerOne && !answerTwo) {
//     console.log("Pest is the worst");
//   } else if (answerTwo && !answerOne) {
//     console.log("Cholera is not much better either");
//   } else if (answerTwo && answerOne) {
//     console.log("Damn you want both? You are a sicko");
//   } else if (!answerOne && !answerTwo){
//     console.log('I wont let you of the hook that easily, you have to choose one!')
//   }
 
// };

// prefChoice();
