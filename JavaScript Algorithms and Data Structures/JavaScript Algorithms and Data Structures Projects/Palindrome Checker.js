/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {

    let alphNumStr = ""
    let alphNumRegex = /[a-z]|[A-Z]|[0-9]/;
  
    for (let i = 0; i < str.length; i++){
      if (alphNumRegex.test(str[i])){
        alphNumStr += str[i];
      }
    }
  
    alphNumStr =  alphNumStr.toLowerCase();
  
    let isPalindrome = true;
  
    for (let i = 0; isPalindrome == true && i < alphNumStr.length / 2; i++){
  
      if (alphNumStr[i] != alphNumStr[alphNumStr.length - i - 1]){
        isPalindrome = false;
      };
    };
  
    console.log(isPalindrome);
    return isPalindrome;
  }
  
  palindrome("eye");