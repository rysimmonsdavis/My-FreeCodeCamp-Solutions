/*
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether(...args) {
    if (args.length == 2 && Number.isFinite(args[0]) && Number.isFinite(args[1]) ){
      return args[0] + args[1];
    } else if (args.length == 1 && Number.isFinite(args[0]) ){
      return function (arg) {
        if (Number.isFinite(arg)){
          return args[0] + arg;
        } else {
          return undefined
        }
      }
    } else {
      return undefined;
    }
  }
  
  console.log(addTogether(1)(1));

  console.log(addTogether(1,1));

  console.log(addTogether(1)([1]));