/*Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/

function sumPrimes(num) {

    let primeSum = 0;
  
    for (let i = 2; i <= num; i++){
  
      let isPrime = true;
  
      for (let j = 2; j <= i/2; j++){
        if (i % j == 0){
          isPrime = false;
        }
      }
  
      if (isPrime == true){
        primeSum += i;
      }
    }
  
    return primeSum;
  }
  
sumPrimes(10);