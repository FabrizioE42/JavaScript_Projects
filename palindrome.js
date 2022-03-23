function palindrome(str) {
    function specialChar() { // removes all non-alphanumeric characters and converts to lowercase

        const regex = /[^A-Za-z0-9]/g;
        const newstr = str.replace(regex, "").toLowerCase();
        return newstr;
    }
    let filteredstr = specialChar();
    let reverse = filteredstr.split("").reverse().join("");
    if(filteredstr==reverse) {
        return true;
    }
    return false;
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));