/*
Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(arr, num) {
    
    if (arr.length == 0) {return 0}

    else{
      
    let sortedArr = sortArr(arr);

    let loc = -1;

    if (num < sortedArr[0]){

      loc = 0;

    } else if (sortedArr[sortedArr.length - 1] < num){

      loc = sortedArr.length;

    } else { 
      
      let i = 0; while (i < sortedArr.length && loc == -1){

        if (num == sortedArr[i]){
            
          loc = i;

        } else if (sortedArr[i] < num && num < sortedArr[i + 1]){
            
          loc = i + 1;
        };

        i++;
      };
    };

    return loc;
  };
  };

  function sortArr(arr){

    if (arr.length == 0 || arr.length == 1){return arr;} 
    
    else {

    let sortedArr = [arr[0]];

    let i = 1; while (i < arr.length){

      if (arr[i] < sortedArr[0]){

          sortedArr.unshift(arr[i]);

      } else if (sortedArr[sortedArr.length - 1] < arr[i]){

        sortedArr.push(arr[i]);

      } else {

        let locFound = false;

        let j = 0; while (j < sortedArr.length && locFound == false){

          if (sortedArr[j] <= arr[i] && arr[i] < sortedArr[j + 1]){
            
            sortedArr.splice(j, 0, arr[i]);

            locFound = true;
          };

          j++;
        };
      };

      i++;
    };

    return sortedArr;
  };
  };
  
  console.log(getIndexToIns([44, 15, 0, 1, 100], 35));