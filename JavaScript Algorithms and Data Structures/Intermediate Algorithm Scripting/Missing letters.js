/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  let missingLetter = undefined;

  for (let i = 0; i < str.length - 1; i++){
    for (let j = 0; j < alphabet.length - 1; j++){
      if (str[i] == alphabet[j] && str[i + 1] != alphabet[j + 1]){
        missingLetter = alphabet[j + 1];
        return missingLetter;
      }
    }
  }
  return missingLetter;
}
  
  console.log(fearNotLetter("abce"));