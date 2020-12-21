// Assignment code here

var passwordEl = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: " !$&)'(*]+[-.#/:;<=>?@|^_`{|~",
  value: ""
}

// random character generator functions begin
var randomLowerCase = function () {
  var value = randomPassword.lowerCase[Math.floor(Math.random() * randomPassword.lowerCase.length)];
  console.log(value);
  return value;
}

var randomUpperCase = function () {
  var value = randomPassword.upperCase[Math.floor(Math.random() * randomPassword.upperCase.length)];
  console.log(value);
  return value;
}

var randomNumber = function() {
  var value = randomPassword.number[Math.floor(Math.random() * randomPassword.number.length)];
  console.log(value);
  return value;
}

var randomSymbol = function () {
  var value = randomPassword.symbol[Math.floor(Math.random() * randomPassword.symbol.length)];
  console.log(value)
  return value;
}
// random character generator functions end

var writePassword = function() {
  var passwordLength = window.prompt("How long should your password be? Please type a number between 8 and 128.");

    if (passwordLength >= 8 && passwordLength <= 128) {
      var lowerCaseConfirm = window.confirm("Do you want your password to contain lower case letters? 'Ok' for YES, 'Cancel' for NO.");
      if (lowerCaseConfirm) {
        var lowerCases = "lowercases";
      }

      var upperCaseConfirm = window.confirm("Do you want your password to contain upper case letters? 'Ok' for YES, 'Cancel' for NO.");
      if (upperCaseConfirm) {
        var upperCases = "uppercases";
      }

      var numberConfirm = window.confirm("Do you want your password to contain numbers? 'Ok' for YES, 'Cancel' for NO.");
      if (numberConfirm) {
        var numbers = "numbers";
      }

      var symbolConfirm = window.confirm("Do you want your password to contain special characters? 'Ok' for YES, 'Cancel' for NO.");
      if (symbolConfirm) {
        var symbols = "symbols";
      }
      
      generatePassword(passwordLength, lowerCases, upperCases, numbers, symbols);

    } else {
      window.alert("Your password length is invalid, please try again.");
      return writePassword();
    }
}

// var generatePassword() {
//   var window.confirm
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  return passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

randomSymbol()