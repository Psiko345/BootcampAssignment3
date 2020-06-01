// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  //Prompt: Password length (8-128 Characters)
  //1. prompt user for max length,
  //2. set min length to 8
  //3. save length of password in characters
  //4. ensure user can only enter numbers / re-run prompt if any letters are entered or if user inputs a number less than 8

  let passwordLengthAsString = prompt(
    "How many characters long do you want your password? (8 - 128)"
  );
  let passwordLength = parseInt(passwordLengthAsString);
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLengthAsString = prompt(
      "That value is not ok. How many characters long do you want your password? (8 - 128)"
    );
    passwordLength = parseInt(passwordLengthAsString);
  }

  //Prompt: Special Characters?
  //1. prompt user if they want to use special characters
  //2. if yes, allow generate to access array of special characters
  //3. if no, do not allow access to array

  let specialCharacters = "!#$%&()*+,-./:<=>?@[]^_`{|}~";
  if (!window.confirm("Do you want to use special Characters?")) {
    specialCharacters = "";
  }

  //Prompt: Integers?
  //1. prompt user if they want to use numbers
  //2. if yes, allow generate to access array of numbers
  //3. if no, do not allow access to array

  let allNumbers = ["1234567890"];
  if (!window.confirm("Do you want to use Numbers?")) {
    allNumbers = "";
  }
  //Prompt: Uppercase?
  //1. prompt user if they want to use Uppercase
  //2. if yes, allow generate to access array of Uppercase
  //3. if no, do not allow access to array

  let upperCaseletters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  if (!window.confirm("Do you want to use Uppercase?")) {
    upperCaseletters = "";
  }

  //Prompt: Lowercase
  //1. prompt user if they want to use lowercase
  //2. if yes, allow generate to access array of lowercase
  //3. if no, do not allow access to array

  let lowerCaseletters = ["abcdefghijklmnopqrstuvwxyz"];
  if (!window.confirm("Do you want to use Lowercase?")) {
    lowerCaseletters = "";
  }

  //Define allowed arrays
  // specialcharacters array
  // numbers array
  // uppercase array
  // lowercase array

  let acceptableCharacters =
    specialCharacters + allNumbers + upperCaseletters + lowerCaseletters;

  //Generate password
  // when generate button is clicked, follow prompts
  // when prompts followed, generate password
  // look at allowed length of password
  // look at allowedArrays
  // am i allowed special characters? IF YES, access array / IF NO, skip array
  // am i allowed numbers? IF YES, access array / IF NO, skip array
  // am i allowed uppercase? IF YES, access array / IF NO, skip array
  // am i allowed lowercase? IF YES, access array / IF NO, skip array
  // given "passwordLength", run through "allowedArrays" for each character, choosing randomly
  // disply resulting password

  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    password = password + getRandomCharacterFromString(acceptableCharacters);
  }

  //Display password
  document.getElementById("passwordDisplay").value = password;
}

function getRandomCharacterFromString(theStringWithCharacters) {
  let stringLength = theStringWithCharacters.length;
  let randomIndex = Math.floor(Math.random() * stringLength);
  return theStringWithCharacters[randomIndex];
}
