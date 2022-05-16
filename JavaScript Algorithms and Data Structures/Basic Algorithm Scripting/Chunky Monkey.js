/*
Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    let newArr = [];
  
    for (let i = 0; i < arr.length / size; i++){
      newArr.push([]);
    };
  
    for (let j = 0; j < arr.length; j++){
      newArr[Math.floor(j / size)].push(arr[j]);
    };    
  
    return newArr;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));