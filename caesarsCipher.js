// This function takes as input a phrase in ROT-13 cypher and converts it back to english
function rot13(str) {
    const rotation = { // stores every letter of the alphabet as a key-value pair 
        A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V", J: "W", K: "X", L: "Y", M: "Z",
        N: "A", O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M"
    };
    let arr = str.split(""); // convert string to array
    for(let i=0; i < arr.length; i++) { // for the length of the array, check if each element has a value that equals a property in the object
        if (rotation.hasOwnProperty(arr[i])) {
            arr[i] = rotation[arr[i]]; // If property exists then replace element in array with object value
        }
    }
    arr = arr.join(""); // combine array back to string
    

    return arr;
  }
  
  rot13("SERR PBQR PNZC");
