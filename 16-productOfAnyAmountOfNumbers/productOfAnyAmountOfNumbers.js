function productOfAnyAmountOfNumbers(...args) {
  return args.reduce((prev,curr) => {
      return prev * curr;
  });
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;