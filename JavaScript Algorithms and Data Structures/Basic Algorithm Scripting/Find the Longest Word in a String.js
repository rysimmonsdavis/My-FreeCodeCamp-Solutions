/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    str = " " + str + " ";
    let longWord = 0;
    let prevWord = 0;
    let prevSpcItr = 0;
  
    for (let i = 0; i < str.length; i++){
      if (str[i].match(/ /)){
        prevWord = i - prevSpcItr - 1;
        prevSpcItr = i;
      };
  
      if (prevWord > longWord){
        longWord = prevWord;
      };
    };
  
    return longWord;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));