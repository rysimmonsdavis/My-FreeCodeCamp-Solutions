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
    console.log(argsSymDiff);
  
    return argsSymDiff;
  };
  
  sym([1, 2, 3], [5, 2, 1, 4]);