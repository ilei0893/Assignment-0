function setUnionOfAnyAmountOfSets(...args) {
  var newSet = new Set(); //Create set to be filled

  for(let sets of args){    //Iterates over rest parameters
    for(let num of sets)  //Adds set to newSet
    {
      newSet.add(num);
    }
  }
  return newSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;