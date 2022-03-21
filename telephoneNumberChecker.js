function telephoneCheck(str) {

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

    return patterns.some((elem) => elem.test(str));
  }
  
  telephoneCheck("555-555-5555");