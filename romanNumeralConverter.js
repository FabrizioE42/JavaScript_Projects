function convertToRoman(num) {
    let digits = num.toString().split('');
    let M = ["M","MM","MMM"];
    let C = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let X = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let I = ["I","II","III","IV","V","VI","VII","VIII","IX"];
    let romanNumber = [];
    
    romanNumber.push(M[digits.at(-4)-1]);
    romanNumber.push(C[digits.at(-3)-1]);
    romanNumber.push(X[digits.at(-2)-1]);
    romanNumber.push(I[digits.at(-1)-1]);

    romanNumber = romanNumber.filter(elem => elem != undefined).join("");
    
    return romanNumber;
   }
   
   console.log(convertToRoman(2349));

   //console.log(digits.at(-4));
    /*switch (digits.at(-4)) {
        case '1':
        romanNumber.push("M");
        break;
        case '2':
        romanNumber.push("MM");
        break;
        case '3':
        romanNumber.push("MMM");
        break;
        
    }
    */