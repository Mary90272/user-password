// Assignment code here
var allPasswordChars = [
  {
    'label': 'lowercase',
    'chars': 'abcdefghijklmnopqrstuvxyz'
  },
  {
    'label': 'uppercase',
    'chars': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  },
  {
    'label': 'specials',
    'chars': '~`! @#$%^&*()_-+={[}]|\:;"\'<,>.?/'
  },
  {
    'label': 'digits',
    'chars': '0123456789'
  }
]

var passwordLengthInp = document.querySelector('#password-length-inp');
var containsLowercaseInp = document.querySelector('#contains-lowercase-inp');
var containsUppercaseInp = document.querySelector('#contains-uppercase-inp');
var containsSpecialCharsInp = document.querySelector('#contains-special-chars-inp');
var containsDigitsInp = document.querySelector('#contains-digits-inp');




function generatePassword() {
  var passwordLength = Number(passwordLengthInp.value);
  var containsLowercase = containsLowercaseInp.checked;
  var containsUppercase = containsUppercaseInp.checked;
  var containsSpecialChar = containsSpecialCharsInp.checked;
  var containsDigits = containsDigitsInp.checked;

  if(!containsLowercase && !containsUppercase && !containsSpecialChar && !containsDigits) {
    return '';
  }

  var password = Array(passwordLength).fill(null);
  var selectedCharSetIdxes = [];

  if(containsLowercase) {
    selectedCharSetIdxes.push(0);
    while(true) {
      var randPasswordIdx = Math.floor(Math.random() * passwordLength);
      if(password[randPasswordIdx] == null) {
        password[randPasswordIdx] = allPasswordChars[0]['chars'][Math.floor(Math.random() * allPasswordChars[0]['chars'].length)];
        break;
      }
    }
  }

  if(containsUppercase) {
    selectedCharSetIdxes.push(1);
    while(true) {
      var randPasswordIdx = Math.floor(Math.random() * passwordLength);
      if(password[randPasswordIdx] == null) {
        password[randPasswordIdx] = allPasswordChars[1]['chars'][Math.floor(Math.random() * allPasswordChars[1]['chars'].length)];
        break;
      }
    }
  }

  if(containsSpecialChar) {
    selectedCharSetIdxes.push(2);
    while(true) {
      var randPasswordIdx = Math.floor(Math.random() * passwordLength);
      if(password[randPasswordIdx] == null) {
        password[randPasswordIdx] = allPasswordChars[2]['chars'][Math.floor(Math.random() * allPasswordChars[2]['chars'].length)];
        break;
      }
    }
  }

  if(containsDigits) {
    selectedCharSetIdxes.push(3);
    while(true) {
      var randPasswordIdx = Math.floor(Math.random() * passwordLength);
      if(password[randPasswordIdx] == null) {
        password[randPasswordIdx] = allPasswordChars[3]['chars'][Math.floor(Math.random() * allPasswordChars[3]['chars'].length)];
        break;
      }
    }
  }

  for(var i = 0; i < password.length; i++) {
    if(password[i] == null) {
      var randCharSetIdx = selectedCharSetIdxes[Math.floor(Math.random() * selectedCharSetIdxes.length)];
      var randChar = allPasswordChars[randCharSetIdx]['chars'][Math.floor(Math.random() * allPasswordChars[randCharSetIdx]['chars'].length)];
      password[i] = randChar;
    }
  }

  return password.join('');
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
