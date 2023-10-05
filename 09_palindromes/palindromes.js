const palindromes = function (phrase) {
  
  let toLower = "";
  if (typeof phrase == "string"){
    toLower = phrase.toLowerCase()
  }else {
    return "ERROR"
  }
  let punctuationless = toLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let spaceless = punctuationless
  reversedPhrase = punctuationless.split("").reverse().join("")

  return reversedPhrase == toLower
};

// Do not edit below this line
module.exports = palindromes;
