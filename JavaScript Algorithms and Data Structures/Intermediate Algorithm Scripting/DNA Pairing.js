/*DNA Pairing
Pairs of DNA strands consist of protein base pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */

function pairElement(str) {
    
    let strArr = str.split("");
    
    strArr.forEach(function(v, i, a){
        switch(v) {
            case "C": a[i] = ["C","G"];
                break;
            case "G": a[i] = ["G","C"];
                break;
            case "A": a[i] = ["A","T"];
                break;
            case "T": a[i] = ["T","A"];
                break;
                            
        }
    })

    return strArr;
  }
  
  console.log(pairElement("GCG"));