/*
Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/
function binaryAgent(str) {

    let strArr = str.split(" ");

    let sentence = "";

    for (let i = 0; i < strArr.length; i++){

        //first converts the number in base 2 into an integer and then converts the integer into its respective character
        sentence += String.fromCharCode(parseInt(strArr[i],2))

    }

    return sentence;
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));