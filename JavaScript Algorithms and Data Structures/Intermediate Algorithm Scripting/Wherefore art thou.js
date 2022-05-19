/*
Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
    const arr = [];

    let srcPropArr = Object.keys(source);
    
    for (let i = 0; i < collection.length; i++){ //iterate through all objects in the array

        let allSrcPropsInCollObj = true; //whether we've found all matching properties

        for (let j = 0; j < srcPropArr.length; j++){ //iterate through all properties in the source object

            let collObjPropArr = Object.keys(collection[i]);

            let srcPropInCollObj = false; //whether we've found the matching property

            for (let k = 0; k < collObjPropArr.length; k++){ //iterate through all properties in the current array object

                if (collObjPropArr[k] == srcPropArr[j] && collection[i][collObjPropArr[k]] == source[srcPropArr[j]]){ //if the array object property is the same as the source object property in the current iteration
                    srcPropInCollObj = true; //set we've found the matching property
                }
            }

            if (srcPropInCollObj == false){
                allSrcPropsInCollObj = false;
            }
        }

        if (allSrcPropsInCollObj == true){
            arr.push(collection[i]);
        }
    }
  
    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

