/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    let strArr = str.split("");

    strArr.forEach(function(v, i, a){
        switch(v) {
            case "&": a[i] = "&amp;";
                return;
            case "<": a[i] = "&lt;";
                return;
            case ">": a[i] = "&gt;";
                return;
            case '"': a[i] = "&quot;";
                return;
            case "'": a[i] = "&apos;";
                return;
            default:
                return;
        }
    })

    return strArr.join("");
  }
  
convertHTML("Dolce & Gabbana");