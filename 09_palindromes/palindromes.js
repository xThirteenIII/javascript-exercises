const palindromes = function (phrase) {
  
  if (typeof phrase == "string"){
    phrase.toLowerCase()
  }else {
    return "ERROR"
  }
  let punctuationless = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let finalString = punctuationless.replace(/\s{2,}/g," ");
  reversedPhrase = finalString.split().reverse().join()

  return finalString == reversedPhrase
};

// Do not edit below this line
module.exports = palindromes;
