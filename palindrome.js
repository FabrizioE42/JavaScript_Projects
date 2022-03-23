function palindrome(str) {
    function specialChar() { // This function removes all non-alphanumeric characters and converts to lowercase

        const regex = /[^A-Za-z0-9]/g; // regular expression
        const newstr = str.replace(regex, "").toLowerCase(); //if it finds non-alphanumeroc it replaces with nothing while converting to lowercase
        return newstr;
    }
    let filteredstr = specialChar(); // call function
    let reverse = filteredstr.split("").reverse().join(""); // convert string to array, then reverse its order, and convert back to string
    if(filteredstr==reverse) { // check if the reverse string is the same as original
        return true;
    }
    return false;
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));
