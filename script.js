// creates variable that is tied to HTML 'generate' id for "Generate Password" button
var generateBtn = document.querySelector("#generate");

// request input from user to establish parameters for password creation
var writePassword = function() {
  var selections = lowerCases + upperCases + numbers + symbols;
  var passwordLength = window.prompt("How long should your password be? Please type a number between 8 and 128.");

    if (passwordLength >= 8 && passwordLength <= 128) {
      var lowerCaseConfirm = window.confirm("Do you want your password to contain lower case letters? 'Ok' for YES, 'Cancel' for NO.");
      if (lowerCaseConfirm) {
        var lowerCases = true;
      }

      var upperCaseConfirm = window.confirm("Do you want your password to contain upper case letters? 'Ok' for YES, 'Cancel' for NO.");
      if (upperCaseConfirm) {
        var upperCases = true;
      }

      var numberConfirm = window.confirm("Do you want your password to contain numbers? 'Ok' for YES, 'Cancel' for NO.");
      if (numberConfirm) {
        var numbers = true;
      }

      var symbolConfirm = window.confirm("Do you want your password to contain special characters? 'Ok' for YES, 'Cancel' for NO.");
      if (symbolConfirm) {
        var symbols = true;
      }

      // require at least one option to be selected
      if (lowerCases || upperCases || numbers || symbols) {
        generatePassword(passwordLength, lowerCases, upperCases, numbers, symbols);
      } else {
        window.alert("You must select at least one character type. Please try again.");
        return writePassword();

      }

    } else {
      window.alert("Your password length is invalid, please try again.");
      return writePassword();
    }

}

// generate password based on criteria selected in writePassword function
var generatePassword = function(passwordLength, lowerCases, upperCases, numbers, symbols) {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var symbol = " !$&)'(*]+[-.#/:;<=>?@|^_`{|~";
  var passwordContainer;
  var passwordValue = "";

  if (lowerCases) {
    passwordContainer = lowerCase;
  }
  if (upperCases) {
    passwordContainer += upperCase;
  }
  if (numbers) {
    passwordContainer += number;
  }
  if (symbols) {
    passwordContainer += symbol;
  }

  for (var i = 0, x = passwordContainer.length; i < passwordLength; i++) {
    passwordValue += passwordContainer.charAt(Math.floor(Math.random() * x));
  }

  document.querySelector("#password").innerHTML = passwordValue;

}


// Call writePassword function when "Generate Password" button is clicked
generateBtn.addEventListener("click", writePassword);