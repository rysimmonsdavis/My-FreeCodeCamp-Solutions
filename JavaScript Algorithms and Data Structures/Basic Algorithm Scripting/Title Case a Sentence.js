/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    let spacePrev = true;
  
    for (let i = 0; i < str.length; i++){
  
      if (spacePrev == true && str[i].match(/[a-z]/)){
        str[i].toUpperCase();
        spacePrev = false;
      };
  
      if (spacePrev == false && str[i].match(/[A-Z]/)){
        str[i].toLowerCase();
      };
  
      if (str[i].match(/ /)){
        spacePrev = true;
      };
  
    }
    return str;
  }
  
  titleCase("I'm a little tea pot");