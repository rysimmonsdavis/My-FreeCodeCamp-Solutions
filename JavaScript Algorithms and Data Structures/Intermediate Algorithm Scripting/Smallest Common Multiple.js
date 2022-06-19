/*Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.*/

function smallestCommons(arr) {

    let scm = 1;
  
    
    //correct order of parameters in original array
    if (arr[0] > arr[1]){
  
      let elem0 = arr[0];
  
      arr[0] = arr[1];
  
      arr[1] = elem0;
    }
  
    
  
    //create instance of array of primes to try as divisors
    let PrimesArr = primesArr(arr[1]);
  
    //create instance of array of primes to try as divisors
    let DivisorsArr = [];
  
    //iterate through all numbers in range
    for (let number = arr[0]; number <= arr[1]; number++){
        
      //iterate through all primes to try as divisors
      for (let primeIndex = 0; PrimesArr[primeIndex] <= number; primeIndex++){
  
        let power = 1;
  
        let isDivisor = false;
        
        //check if primeIndex is a divisor
        if (number % PrimesArr[primeIndex] == 0){

  
          isDivisor = true;

       
          //iterate through all powers of the primeIndex to try as divisors
          while (number % Math.pow(PrimesArr[primeIndex], power + 1) == 0 ){
            power++;
          }
        }
  
        if (isDivisor == true){
  
          let isInDivisors = false;

          let isInDivisorsIndex = -1;
  
          let i = 0;
  
          let oldPower = 1;
  
          //iterate through array of divisors already found
          while (i < DivisorsArr.length && isInDivisors == false){
            
            if (DivisorsArr[i][0] == PrimesArr[primeIndex]){
  
              isInDivisors = true;

              isInDivisorsIndex = i;
  
              oldPower = DivisorsArr[i][1];

            }
  
            i++;
          }
          
          

          
          if (isInDivisors == false){
  
            DivisorsArr.push([PrimesArr[primeIndex], power])
            
          }

            
          if (isInDivisors == true && power > oldPower){
  
            DivisorsArr[isInDivisorsIndex] = [PrimesArr[primeIndex], power];
            
          }
          
        }
      }
    }

    let DivisorsArrProduct = 1;
  
    for (let i = 0; i < DivisorsArr.length; i++){
        DivisorsArrProduct *= Math.pow(DivisorsArr[i][0], DivisorsArr[i][1])
    }

    
    return DivisorsArrProduct;
  }
  
  function primesArr(max){
  
      let primeArr = [];
    
      for (let number = 2; number <= max; number++){
    
        let isPrime = true;
    
        for (let primeIndex = 2; primeIndex <= number/2; primeIndex++){
          if (number % primeIndex == 0){
            isPrime = false;
          }
        }
    
        if (isPrime == true){
          primeArr.push(number);
        }
      }
    
      return primeArr;
  }
  
  console.log(smallestCommons([2,10]));