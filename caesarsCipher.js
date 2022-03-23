function rot13(str) {
    const rotation = {
        A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V", J: "W", K: "X", L: "Y", M: "Z",
        N: "A", O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M"
    };
    let arr = str.split("");
    for(let i=0; i < arr.length; i++) {
        if (rotation.hasOwnProperty(arr[i])) {
            arr[i] = rotation[arr[i]];
        }
    }
    arr = arr.join("");
    //console.log(arr);

    return arr;
  }
  
  rot13("SERR PBQR PNZC");