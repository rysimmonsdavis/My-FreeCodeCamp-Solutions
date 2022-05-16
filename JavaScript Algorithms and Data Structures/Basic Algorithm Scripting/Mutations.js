
/*
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

*/

function mutation(arr) {

    let foundEntire = true;

    let first = arr[0].toLowerCase();
    let second = arr[1].toLowerCase();
  
    for (let i = 0; i < second.length && foundEntire == true; i++){

      let foundEach = false;
  
      for (let j = 0; j < first.length && foundEach == false; j++){

        if (second[i] == first[j]){

          foundEach = true;
        };
      };
  
      if (foundEach == false){

        foundEntire = false
      };
    };
  
    return foundEntire;
  };
  
  console.log(mutation(["hello", "hey"]));