/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  str = " " + str;
  let newStr = ""

    for (let i = 1; i < str.length; i++){

      if (str[i - 1].match(/ /) && str[i].match(/[a-z]/)){

        newStr += str[i].toUpperCase();

      } else if (!str[i - 1].match(/ /) && str[i].match(/[A-Z]/)){

        newStr += str[i].toLowerCase();

      } else {
        newStr += str[i];
      }
  
    };

    return newStr;


  };
  
  titleCase("I'm a little tea pot");