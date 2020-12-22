// creates variable that is tied to HTML 'generate' id for "Generate Password" button
var generateBtn = document.querySelector("#generate");

// request input from user to establish parameters for password creation
var writePassword = function() {
    var passwordLength = window.prompt("How long should your password be? Please type a number between 8 and 128.");

    if (passwordLength >= 8 && passwordLength <= 128) {
        // user selects character types to include in password
        var lowerCases = window.confirm("Do you want your password to contain lower case letters? 'Ok' for YES, 'Cancel' for NO.");
        var upperCases = window.confirm("Do you want your password to contain upper case letters? 'Ok' for YES, 'Cancel' for NO.");
        var numbers = window.confirm("Do you want your password to contain numbers? 'Ok' for YES, 'Cancel' for NO.");
        var symbols = window.confirm("Do you want your password to contain special characters? 'Ok' for YES, 'Cancel' for NO.");

        // validate at least one option was selected and pass choice(s) to generatePassword()
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
    var passwordContainer = "";
    var passwordValue = "";

    // compile variable strings into container based on selections from writePassword function
    if (lowerCases) {
        passwordContainer = lowerCase;
        console.log(lowerCases);
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

    // create random password with random selection from container that meets length requirement
    for (var i = 0, x = passwordContainer.length; i < passwordLength; i++) {
        passwordValue += passwordContainer.charAt(Math.floor(Math.random() * x));
        console.log(passwordValue);
    }

    document.querySelector("#password").textContent = passwordValue;

}


// Call writePassword function when "Generate Password" button is clicked
generateBtn.addEventListener("click", writePassword);