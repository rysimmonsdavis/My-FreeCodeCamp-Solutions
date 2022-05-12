/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {

    let targetIsEnding = true;
  
    for (let i = 0; i < str.length && i < target.length && targetIsEnding == true; i++){
      if (str[str.length - 1 - i] != target[target.length - 1 - i]){
        targetIsEnding = false;
      };
    };
  
    return targetIsEnding;
  }
  
  confirmEnding("Bastian", "n");