//This function checks if the input is a valid US phone number format including a 1 area code extension

function telephoneCheck(str) {
    // array contains different regex filters to check for all possible valid inputs
    const patterns = [
        //555-555-5555
        /^\d{3}-\d{3}-\d{4}$/,
        //1 555 555 5555
        /^1\s\d{3}\s\d{3}\s\d{4}$/,
        //(555)555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/,
        //(555) 555-5555
        /^\(\d{3}\)\s\d{3}-\d{4}$/,
        //555 555 5555
        /^\d{3}\s\d{3}\s\d{4}$/,
        //5555555555
        /^\d{10}$/,
        //1 555-555-5555
        /^1\s\d{3}-\d{3}-\d{4}$/,
        //1 (555) 555-5555
        /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
        //1(555)555-5555
        /^1\(\d{3}\)\d{3}-\d{4}$/];

    return patterns.some((elem) => elem.test(str)); // patterns.some will use each element in array to check if the string matches correct format
  }
  
  telephoneCheck("555-555-5555");
