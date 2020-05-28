
// Add event listener to the generate button
document.getElementById("generate").addEventListener("click", function(){
  
// Setting up the possible Characters
  var lowercaseAlphabetChar = ("abcdefghijklmnopqrstuvwxyz");
  var uppercaseAlphabetChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var numericChar = (1234567890);
  var specialChar = ("!@#$%^&*()?~/|:'><");
  var password = "";
  var pSelection = "";

// User Prompts
  var length = prompt("How long is your Password? Choose between 8 and 128 Characters");

// Making sure User Chooses between 8 and 128 Characters
  if (length < 8 || length > 128){
    alert("Length has to be Between 8 and 128. Please Try Again")
    return
  }

  var wantsLower = confirm("Do you want Lowercase Characters?")
  var wantsUpper = confirm("Do you want Uppercase Characters?")
  var wantsNumbers = confirm("Do you want Numerical Characters?")
  var wantsSpecial = confirm("Do you want Special Characters?")
  
//Verification Points System - I allocate a point when an option is confirmed. if no points are allocated, user has not selected anything
  var verify = 0;

  if (wantsLower == true || wantsUpper == true || wantsNumbers == true || wantsSpecial == true) {
    verify += 1;
  }

  if (verify == 0) {
    alert("You have not selected a character Type, Please Try again.")
    return
  }

// Script will exit if not verified, if verified we Proceed to Grouping Password to User Needs.
  function generatePWD() {
    for (var i = 0; i <= length; i++) {
      password = password + pSelection.charAt(Math.floor(Math.random() * Math.floor(pSelection.length - 1)));
    }
  }

// IF STATEMENTS for User PreferenceLowerCase
  if (wantsLower && !wantsUpper && !wantsNumbers && !wantsSpecial) {
    pSelection = lowercaseAlphabetChar
    generatePWD();
  }
// LowerCase and UpperCase
  else if (wantsLower && wantsUpper && !wantsNumbers && !wantsSpecial) {
    pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar;
    generatePWD();
  }

//LowerCase and UpperCase and Numbers
  else if (wantsLower && wantsUpper && wantsNumbers && !wantsSpecial) {
    pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar + numericChar;
    generatePWD();
  }
// Everything
  else if (wantsLower && wantsUpper && wantsNumbers && wantsSpecial) {
    pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar + numericChar + specialChar;
    generatePWD();
  }
//Lowercase and Numbers
  else if (wantsLower && !wantsUpper && wantsNumbers && !wantsSpecial) {
    pSelection = lowercaseAlphabetChar + numericChar;
    generatePWD();
  }
//Lowercase and Numbers and Special
  else if (wantsLower && !wantsUpper && wantsNumbers && wantsSpecial) {
    pSelection = lowercaseAlphabetChar + numericChar + specialChar;
    generatePWD();
  }
// Lowercase and Special
  else if (wantsLower && !wantsUpper && !wantsNumbers && wantsSpecial) {
    pSelection = lowercaseAlphabetChar + specialChar;
    generatePWD();
  }
// Uppercase
  else if (!wantsLower && wantsUpper && !wantsNumbers && !wantsSpecial) {
    pSelection = uppercaseAlphabetChar;
    generatePWD();
  }
// UpperCase and Numbers
  else if (!wantsLower && wantsUpper && wantsNumbers && !wantsSpecial) {
    pSelection = uppercaseAlphabetChar + numericChar;
    generatePWD();
  }

// Uppercase and Numbers and Special
  else if (!wantsLower && wantsUpper && wantsNumbers && wantsSpecial) {
    pSelection = uppercaseAlphabetChar + numericChar + specialChar;
    generatePWD();
  }
// Uppercase and Special
  else if (!wantsLower && wantsUpper && !wantsNumbers && wantsSpecial) {
    pSelection = uppercaseAlphabetChar + specialChar;
    generatePWD();
  }
// Numbers
  else if (!wantsLower && !wantsUpper && wantsNumbers && !wantsSpecial) {
    pSelection = numericChar;
    generatePWD();
  }
// Numbers and Special
  else if (!wantsLower && !wantsUpper && wantsNumbers && wantsSpecial) {
    pSelection = numericChar + specialChar;
    generatePWD();
  }
// Special
  else if (!wantsLower && !wantsUpper && !wantsNumbers && wantsSpecial) {
    pSelection = specialChar;
    generatePWD();
  }
  document.getElementById("password").innerHTML = password;
  console.log(password);




});