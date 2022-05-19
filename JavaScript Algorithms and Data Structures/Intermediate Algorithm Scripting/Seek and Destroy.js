/*
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(...arr) {

    let initArr = arr[0];
    arr.splice(0,1);

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < initArr.length; j++){
            if (initArr[j] == arr[i]){
                initArr.splice(j,1);
                j--;
            };
        };
    };

    return initArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));