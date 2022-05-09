function convertToRoman(num) {
    let string = "";
    
    while (num - 1000 >= 0){
        num -= 1000;
        string += "M";
    };
    
    while (num - 900 >= 0){
        num -= 900;
        string += "CM";
    };
    
    while (num - 500 >= 0){
        num -= 500;
        string += "D";
    };
    
    while (num - 400 >= 0){
        num -= 400;
        string += "CD";
    };
    
    while (num - 100 >= 0){
        num -= 100;
        string += "C";
    };
    
    while (num - 90 >= 0){
        num -= 90;
        string += "XC";
    };
    
    while (num - 50 >= 0){
        num -= 50;
        string += "L";
    };
    
    while (num - 40 >= 0){
        num -= 40;
        string += "XL";
    };
    
    while (num - 10 >= 0){
        num -= 10;
        string += "X";
    };
    
    while (num - 9 >= 0){
        num -= 9;
        string += "IX";
    };
    
    while (num - 5 >= 0){
        num -= 5;
        string += "V";
    };
    
    
    while (num - 4 >= 0){
        num -= 4;
        string += "IV";
    };
    
    while (num - 1 >= 0){
        num -= 1;
        string += "I";
    };
    
    return string;
};

convertToRoman(36);