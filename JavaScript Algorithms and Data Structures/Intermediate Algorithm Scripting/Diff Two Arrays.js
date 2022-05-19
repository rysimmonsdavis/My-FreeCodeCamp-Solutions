/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    
    let nonDupArr1 = elimSelfDups(arr1);
    let nonDupArr2 = elimSelfDups(arr2);
    
    let nonDupsArr = [];

    nonDupsArr = addNonDupsToArr(nonDupArr1, nonDupArr2, nonDupsArr);
    nonDupsArr = addNonDupsToArr(nonDupArr2, nonDupArr1, nonDupsArr);
   
    return nonDupsArr;
    
  }

  function elimSelfDups(arr){
    let nonDupArr = arr;
    let len = nonDupArr.length;

    for (let i = 0; i < len; i++){

      for (let j = i + 1; j < len; j++){
        if (nonDupArr[i] == nonDupArr[j]){
          nonDupArr.splice(j,1);
          len--;
          j--;
        };
      };
    };
    return nonDupArr;
  };

  function addNonDupsToArr(arr1, arr2, nonDupsArr){

    for (let i = 0; i < arr1.length; i++){

      let dupInArr2 = false;

      for (let j = 0; j < arr2.length; j++){
        if (arr1[i] == arr2[j]){
          dupInArr2 = true
        };
      };

      if (!dupInArr2){
        nonDupsArr.push(arr1[i]);
      }
    };
    return nonDupsArr;
  };

  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));