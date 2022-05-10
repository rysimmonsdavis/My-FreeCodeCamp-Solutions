/*
Find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/

function sym(...args) {

    for (let i = 0; i < args.length; i++){
  
      for (let j = 0; j < args[i].length; j++){
  
        for (let k = j + 1; k < args[i].length; k++){
  
          if (args[i][k] == args[i][j]){
            args[i][k] = "";
          };
        };
      };
    };
  
    let argsSymDiff = [];
  
    for (let i = 0; i < args.length; i++){
      
      for (let j = 0; j < args[i].length; j++){
  
        let dup = false;
  
        for (let h = 0; h < argsSymDiff.length && dup == false; h++){
  
          if (args[i][j] != "" && argsSymDiff[h] == args[i][j]){
  
            argsSymDiff.splice(h,1);
  
            dup = true;
          };
        };
  
        if (args[i][j] != "" && dup == false){
          argsSymDiff.push(args[i][j]);
        };
  
      };
    };
  
    argsSymDiff.sort();
  
    return argsSymDiff;
  };
  
  sym([1, 2, 3], [5, 2, 1, 4]);