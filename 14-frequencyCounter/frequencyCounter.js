function frequencyCounter(word) {
  let map = {};

  for (var i = 0; i < word.length; i++) {
    var key = word.charAt(i);

    if (map[key]) {
      map[key]++;
    }
    else {
      map[key] = 1;
    }

  }
  return map;
}

// Do not edit this line;
module.exports = frequencyCounter;