/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    let sum = 0;
    let lower = 0;
    let upper = 0;

    if (arr[0] < arr[1]){
        lower = arr[0];
        upper = arr[1];
    } else {
        lower = arr[1];
        upper = arr[0];
    };

    for (let i = lower; i <= upper; i++){
        sum += i;
    };

    return sum;
  }
  
  console.log(sumAll([1, 4]));