function isPalindrome(word) {
  var palindrome = "";      //Initialize empty string to add word in reverse
  var bool = false;         //Default words are not palindromes
  for(var i = word.length - 1; i >= 0; i--)   //Begin at end of word, add it to palindrome, and decrement
  {
    palindrome += word[i];
  }
  if(palindrome === word)       //If word is the same as palindrome, is palindrome
  {
    bool = true;
  }
  return bool;
}

// Do not edit this line;
module.exports = isPalindrome;