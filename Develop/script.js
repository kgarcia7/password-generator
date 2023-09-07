// Assignment code here

var characterLength = 8;
var choiceArray = []
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts ();
  var passwordText = document.querySelector("#password");

  if (correctPrompts){
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  }
}

function generatePassword(){
  var password = "";
  for (var i=0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random () * choiceArray.length)
    password = password + choiceArray[randomIndex];
    }
    return password;
}

function getPrompts () {
  choiceArray = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be?"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength> 128 ) {
    alert("Character length must be a number between 8 and 128. Please try again.");
    return false;
  }
  if(confirm("Would you like to include lowercase letters?")){
    choiceArray = choiceArray.concat(lowercaseLetters);
  }
  if(confirm("Would you like to include uppercase letters?")){
    choiceArray = choiceArray.concat(uppercaseLetters);
  }
  if(confirm("Would you like to include special characters?")){
    choiceArray = choiceArray.concat(specialCharacters);
  }
  if(confirm("Would you like to include numbers?")){
    choiceArray = choiceArray.concat(numbersArray);
  }
  return true;
}