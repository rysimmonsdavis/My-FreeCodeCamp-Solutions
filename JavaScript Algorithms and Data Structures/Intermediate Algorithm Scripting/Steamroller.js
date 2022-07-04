/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {

    const flatArr = [];
  
    for (let i = 0; i < arr.length; i++){
  
      if (Array.isArray(arr[i])){
  
        //pushes the returned flattened array, using the spread operator, from the recursive call, into the flattened array that was instantiated before making the recursive call.
        flatArr.push(...steamrollArray(arr[i]));
  
      } else {
  
        flatArr.push(arr[i])
      }
    }
  
    return flatArr;
  }

  console.log(steamrollArray([[["a"]], [["b"]]]));