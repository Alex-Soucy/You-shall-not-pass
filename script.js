// Assignment code here
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = ['!', '@', '#', '*', '(', ')', '$', '%', '^', '-', '+', '.', '&', ':', ';', '~', '{', '}', '[', ']'];

function getPasswordOptions() {
  var length = parseInt(
    prompt('Choose the length of your password between 8 and 128 characters')
  );

  if (Number.isNaN(length)) {
    alert('Password length must be a number');
    return null;
  }

  if (length < 8) {
    alert('Password must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password must be less than 129 characters');
    return null;
  }

  var hasUpperCaseLetters = confirm('Click OK to include uppercase letters');

  var hasLowerCaseLetters = confirm('Click OK to include lowercase letters');

  var hasNumericCharacters = confirm('Click OK to include numbers');

  var hasSpecialCharacters = confirm('Click OK to include special characters');

  if (
    hasUpperCaseLetters === false &&
    hasLowerCaseLetters === false &&
    hasNumericCharacters === false &&
    hasSpecialCharacters ===false
  ) {
    alert('Must select at least one character type');
    return null;
  }

  var passwordOptions = {
    length: length,
    hasUpperCaseLetters: hasUpperCaseLetters,
    hasLowerCaseLetters: hasLowerCaseLetters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.hasUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
    guaranteedCharacters.push(getRandom(upperCaseLetters));
  }

  if (options.hasLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
    guaranteedCharacters.push(getRandom(lowerCaseLetters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
