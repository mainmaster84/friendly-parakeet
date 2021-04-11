// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
  var password = "";
  var passwordChar = "";
  // Ask for password length
  var passwordLength = window.prompt("How many characters would you like your password?");
  passwordLength = parseInt(passwordLength);
  if(passwordLength === null){
    generatePassword();
  }
  if(passwordLength >= 8 && passwordLength <= 128){
    // Include character types
    var lowercaseChar = window.confirm("Do you want lowercase?");
      if(lowercaseChar){
        passwordChar += lowercase;
      }
    var uppercaseChar = window.confirm("Do you want uppercase?");
      if(uppercaseChar){
        passwordChar += uppercase;
      }
    var numChar = window.confirm("Do you want numbers?");
      if(numChar){
        passwordChar += number;
      }
    var specialChar = window.confirm("Do you want special characters?");
      if(specialChar){
        passwordChar += special;
      }

    // Loop to add characters to password
    for(i = 0; i < passwordLength; i++){
      password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
    }
    return password;
  }else{
    window.alert("Password must be between 8-128 characters!"); //Length error handling
    return generatePassword();
  }
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
