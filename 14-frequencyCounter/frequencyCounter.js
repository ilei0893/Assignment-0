function frequencyCounter(word) {
  let arr = {}; 

  for (var i = 0; i < word.length; i++) {
    var key = word.charAt(i);

    if (arr[key]) {   //Check if key exists and increment if it does
      arr[key]++;
    }
    else {            //If key does not exist, set new key with value of 1
      arr[key] = 1;
    }

  }
  return arr;
}

// Do not edit this line;
module.exports = frequencyCounter;