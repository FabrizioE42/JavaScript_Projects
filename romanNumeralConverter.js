// The goal of this function is to convert any number to its roman number/letter equivalent
function convertToRoman(num) { 
    let digits = num.toString().split(''); // place every digit into an array
    let M = ["M","MM","MMM"];
    let C = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let X = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]; // Arrays with with every combination for 100s, 10s, 5s, and 1s place
    let I = ["I","II","III","IV","V","VI","VII","VIII","IX"];
    let romanNumber = []; // initialize empty array to store conversion
    // input each value in the digits array to its corresponding place starting with 100s place
    romanNumber.push(M[digits.at(-4)-1]);
    romanNumber.push(C[digits.at(-3)-1]); // negative index will start the count fron the front of the array to the back. -1 is to account for array length
    romanNumber.push(X[digits.at(-2)-1]);
    romanNumber.push(I[digits.at(-1)-1]);
// if all 4 digit slots are not used there will be an undefined residue. this line removes those undefined values
    romanNumber = romanNumber.filter(elem => elem != undefined).join(""); 
    
    return romanNumber;
   }
   
   console.log(convertToRoman(2349));
