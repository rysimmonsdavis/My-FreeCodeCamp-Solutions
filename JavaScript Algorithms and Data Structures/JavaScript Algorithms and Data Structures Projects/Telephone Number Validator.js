/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

telephoneCheck("555-555-5555") should return a boolean.

telephoneCheck("1 555-555-5555") should return true.

telephoneCheck("1 (555) 555-5555") should return true.

telephoneCheck("5555555555") should return true.

telephoneCheck("555-555-5555") should return true.

telephoneCheck("(555)555-5555") should return true.

telephoneCheck("1(555)555-5555") should return true.

telephoneCheck("555-5555") should return false.

telephoneCheck("5555555") should return false.

telephoneCheck("1 555)555-5555") should return false.

telephoneCheck("1 555 555 5555") should return true.

telephoneCheck("1 456 789 4444") should return true.

telephoneCheck("123**&!!asdf#") should return false.

telephoneCheck("55555555") should return false.

telephoneCheck("(6054756961)") should return false.

telephoneCheck("2 (757) 622-7382") should return false.

telephoneCheck("0 (757) 622-7382") should return false.

telephoneCheck("-1 (757) 622-7382") should return false.

telephoneCheck("2 757 622-7382") should return false.

telephoneCheck("10 (757) 622-7382") should return false.

telephoneCheck("27576227382") should return false.

telephoneCheck("(275)76227382") should return false.

telephoneCheck("2(757)6227382") should return false.

telephoneCheck("2(757)622-7382") should return false.

telephoneCheck("555)-555-5555") should return false.

telephoneCheck("(555-555-5555") should return false.

telephoneCheck("(555)5(55?)-5555") should return false.

telephoneCheck("55 55-55-555-5") should return false.

telephoneCheck("11 555-555-5555") should return false.
*/

//main function
function telephoneCheck(str) {

    let digsNum = numDigs(str);
    let frstDigLoc = locFrstDig(str);

    if (digsNum < 10 || digsNum > 11){
        return false;
    }

    if (str[frstDigLoc] == 0){
        return false;
    } 
    
    if (str[frstDigLoc] == 1 && digsNum != 11){
        return false;
    }

    if (str[frstDigLoc] != 1 && digsNum == 11){
        return false;
    }

    if (hasBadChars(str)){
        return false;
    }

    if (str.match(/\(\d\d\d\d/) || str.match(/\(\d\d\d-/) || str.match(/\d\d\d\d\)/)){
        return false;
    }

    if (str.match(/\d\d\d-\d\d\d-\d\d\d\d/)
    || str.match(/1 \d\d\d-\d\d\d-\d\d\d\d/)
    || str.match(/1 \(\d\d\d\) \d\d\d-\d\d\d\d/)
    || str.match(/\d\d\d\d\d\d\d\d\d\d/)
    || str.match(/\(\d\d\d\)\d\d\d-\d\d\d\d/)
    || str.match(/1\(\d\d\d\)\d\d\d-\d\d\d\d/)
    || str.match(/1 \d\d\d \d\d\d \d\d\d\d/))
    {
        return true;
    } else {
      return false;
    }

};
  
// function returns location of first digit
function locFrstDig(str){

    let frstDigLoc = -1;

    for (let i = 0; frstDigLoc < 0 && i < str.length; i++){
        if (str[i].match(/[0-9]/)){
            frstDigLoc = i;
        }
    }

    return frstDigLoc;
};

// function returns number of digits
function numDigs(str){

    let digsNum = 0;
    
    for (let i = 0; i < str.length; i++){
        if (str[i].match(/[0-9]/)){
            digsNum++;
        }
    }

    return digsNum;
};

// function returns if characters other than digits, parentheses, spaces or dashes are included
function hasBadChars(str){
    if (!str[0].match(/[0-9]|\(/)){
        return true;
    }

    for (let i = 1; i < str.length; i++){
        
        if (!str[i].match(/[0-9]|\-| |\(|\)/)){
            
            return true;
        }
    }

    return false;
}

console.log(telephoneCheck("555-555-5555"));