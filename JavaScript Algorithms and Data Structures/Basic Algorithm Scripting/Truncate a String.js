/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {

    if (num < str.length){
      
      let retStr = "";
  
      for (let i = 0; i < num; i++){
  
        retStr += str[i];
  
      };
  
        retStr += "...";
  
        return retStr;
  
    } else {
  
      return str;
  
    };
  };
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8)