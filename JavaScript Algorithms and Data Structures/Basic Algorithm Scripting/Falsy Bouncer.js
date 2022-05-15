/*
Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {

    let nonFalsyArr = [];
  
    for (let i = 0; i < arr.length; i++){
  
      if (arr[i]){
        nonFalsyArr.push(arr[i]);
      };
      
    };
    return nonFalsyArr;
  };
  
  bouncer([7, "ate", "", false, 9]);