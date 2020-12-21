// Assignment code here

var randomPassword = {
  length: "",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: " !$&)'(*]+[-.#/:;<=>?@|^_`{|~",
  value: ""
}

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