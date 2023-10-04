const reverseString = function(word) {
  
  splittedWord = word.split("");
  reverseArray = splittedWord.reverse();
  joinArray=reverseArray.join("");

  return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
