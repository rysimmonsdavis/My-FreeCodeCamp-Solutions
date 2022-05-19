
/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/


function spinalCase(str) {

    let newStr = "";
  
    for(let i = 0; i < str.length; i++){
  
      if (i > 0 && !str[i - 1].match(/ /) && !str[i - 1].match(/_/) && str[i].match(/[A-Z]/)){

        newStr += "-" + str[i].toLowerCase() ;
  
      } else if (str[i].match(/ /) || str[i].match(/_/)){
  
        newStr += "-";
  
      } else if (str[i].match(/[A-Z]/)){

        newStr += str[i].toLowerCase()

      } else {

        newStr += str[i]
      }
    }
    return newStr;
  }
  
  spinalCase('This Is Spinal Tap')
  