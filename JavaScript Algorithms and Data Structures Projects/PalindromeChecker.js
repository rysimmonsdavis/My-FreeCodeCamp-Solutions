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