for (let n = 20; n >= 0; n--) {
    let output = "";
    if (n % 4 == 0) output += "Fizz";
    if (n % 4 == 3) output += "Buzz";
    console.log(output || n);
  }
  // I feel like there's another way to define "Buzz"
  // as a variable -1 less than "Fizz,"
  // but I couldn't find the right statement for it...
  // In my head defining "Buzz" as "Fizz" - 1 makes the most sense.