function fizzBuzz(start, end) {
  //Initialize array to be filled
  var arr = [];   

  for (var i = start; i <= end; i++) {

    if ((i % 5 == 0) && (i % 3 == 0)) {   //If divisible by 3 and 5 = FizzBuzz
      arr.push("FizzBuzz");
    } else if (i % 3 == 0) {       //If divisible by 3 == Fizz
      arr.push("Fizz");
    }
    else if (i % 5 == 0) {         //If divisible by 5 == Buzz
      arr.push("Buzz");
    } else {                   //If none of the above == index #
      arr.push(i);
    }
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;